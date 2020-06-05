namespace game {
    export class PKMainMediator extends MediatorBase<PKMainFullWindow> {

        @InjectProxy(ProxyID.pkmain)
        public model: PkMainproxy;
        private _GamerInfo = $singlon(GamerInfoCFG);

        public onRegister(): void {
            super.onRegister();
            this.gameStart();
            // this._view.initMood();
            this._view.showGamerInfo();
        }
        @InterestEvent(PKMainEvent.clickMenu)
        public clickMenu(): void {
            SoundManager.getInstance().PlaySound(SoundManager.mClickAudioUrl);
            // this._view.grp_mood.removeChildren();
            // this._view.map.removeChildren();
            // $facade.addModule(ModuleID.menu);
        }

        private gameStart() {
            // this._view.gameover();
            let mapData = $userData.gamePortVO;
            // this._view.updateData(mapData);
            //启用开始协议
        }
        //修改游戏场景地图数据，并检测是否完成
        @InterestEvent(PKMainEvent.addMood)
        private addMood(e: egret.Event) {
            //实时
            this.changeMoodPosition(true);
            let data = e.data as MapVO;
            $userData.gamePortVO.GameMapVO.addMood(data);
            if (this.chechFillMap()) {
                SoundManager.getInstance().PlaySound(SoundManager.mWinAudioUrl);
                this.endpkgame();
            }
        }
        //游戏结束
        @InterestEvent(PKMainEvent.endpkgame)
        public endpkgame() {
            //启动结束协议
            this.model.reqEndGame();
            //$facade.addModule(ModuleID.pkwin);
        }
        //初始化木块坐标
        @InterestEvent(PKMainEvent.initPos)
        private initPos(e: egret.Event) {
            let data = e.data as MapVO;
            data.initPos();
        }
        @InterestEvent(PKMainEvent.removeMood)
        private removeMood(e: egret.Event) {
            //实时
            this.changeMoodPosition(false);
            let data = e.data as MapVO;
            $userData.gamePortVO.GameMapVO.removeMood(data);
        }
        //检测游戏是否完成
        public chechFillMap(): boolean {
            let map = $userData.gamePortVO.GameMapVO.map;
            let data = map.data;
            for (let i of data) {
                for (let j of i) {
                    if (j == SquareType.null) {
                        return false;
                    }
                }
            }
            return true;
        }
        //按下木块
        @InterestEvent(PKMainEvent.beginMood)
        private beginMood(e: egret.Event) {

            SoundManager.getInstance().PlaySound(SoundManager.mClickAudioUrl);
            let _mapmood: MapMoodItem = e.target;
            _mapmood.index = this._view.grp_mood.getChildIndex(_mapmood);
            //置于99层，因为达不到99层，所以置于最顶层
            this._view.grp_mood.setChildIndex(_mapmood, 97);
            let result = this.getlattice(_mapmood.x, _mapmood.y);
            if (result.y <= $userData.gamePortVO.GameMapVO.map.rowGrids && result.x <= $userData.gamePortVO.GameMapVO.map.colGrids && result.y >= 0 && result.x >= 0) {
                _mapmood.removemood();
                return;
            }
        }
        //松开木块
        @InterestEvent(PKMainEvent.endMood)
        private endMood(e: egret.Event) {
            SoundManager.getInstance().PlaySound(SoundManager.mDropAudioUrl);
            let _mapmood: MapMoodItem = e.target;
            let vo = _mapmood.data as MapVO;
            let result = this.getlattice(_mapmood.x, _mapmood.y);
            if (result.y > $userData.gamePortVO.GameMapVO.map.rowGrids || result.x > $userData.gamePortVO.GameMapVO.map.colGrids || result.y < 0 || result.x < 0) {
                _mapmood.restart();
                return;
            } else {
                //格子起点为（1,1），所以需要加一
                vo.col = result.x + 1;
                vo.row = result.y + 1;
            }
            if (this.chechPlace(vo)) {
                //规整
                let posisint: Point = { x: vo.col, y: vo.row }
                MapUtil.getPixel(posisint, _mapmood);
                _mapmood.x += this._view.map.x;
                _mapmood.y += this._view.map.y;
                _mapmood.modifymapdata(vo);
                _mapmood.rechindex();
                return;
            } else {
                _mapmood.restart();
                return;
            }
        }
        //恢复木块层级
        @InterestEvent(PKMainEvent.rechildindex)
        public rechildindex(e: egret.Event) {
            let _mapmood: MapMoodItem = e.target;
            this._view.grp_mood.setChildIndex(_mapmood, _mapmood.index);
            _mapmood.index = null;
        }
        //将坐标转换成格子
        public getlattice(x: number, y: number): Point {
            let _subx: number = x - this._view.map.x;
            let _suby: number = y - this._view.map.y;
            let point = new egret.Point(_subx, _suby);
            let result: game.Point = MapUtil.getGrid(point);
            return result;
        }
        //将格子转换成全局坐标
        public getOVPixel(col: number, row: number): Point {
            let point = new egret.Point(col, row);
            let result: game.Point = MapUtil.getPixel(point);
            result.x += this._view.map.x;
            result.y += this._view.map.y;
            return result;
        }
        //检测是否能放下
        public chechPlace(vo: MapVO): Boolean {
            let map = vo.data;
            let gameMap = $userData.gamePortVO.GameMapVO.map.data;
            for (let i = 0; i < map.length; i++) {
                let n = i + vo.row - 1;
                let rowLine = map[i];
                for (let j = 0; j < rowLine.length; j++) {
                    let m = j + vo.col - 1;
                    let data = rowLine[j];
                    //gameMap[n][m]超出矩阵情况
                    if (n >= $userData.gamePortVO.GameMapVO.map.rowGrids || m >= $userData.gamePortVO.GameMapVO.map.colGrids) {
                        return false;
                    }
                    if (data == SquareType.full && gameMap[n][m] != SquareType.null) {
                        return false;
                    }
                }
            }
            return true;
        }
        @InterestEvent(PKMainEvent.clickRefresh)
        public clickRefresh(): void {
            //                                                                                                                                                                                                                                   清除木块和地图
            // this._view.gameover();
            // //刷线本关卡地图数据
            // let port = $userData.portPKList.getPort($userData.gamePortVO.playProId);
            // // this.useKey = 0;
            // let mapData = $userData.gamePortVO;
            // $userData.gamePortVO.GameMapVO.update(mapData.curPort.mapVO);
            // this._view.updateData(mapData);
            // console.log("点击刷新");

            let playPortId = this._GamerInfo.RandomNumBoth(0, 50);
            let port = $userData.portPKList.getPort(playPortId);
            let gamePortVO = $userData.gamePortVO;
            gamePortVO.update(port);
            let mapData = $userData.gamePortVO;
            // this._view.updateData(mapData);
        }
        /**监听 钥匙 */
        @InterestEvent(PKMainEvent.clickKey)
        private clickKey(): void {
            SoundManager.getInstance().PlaySound(SoundManager.mClickAudioUrl);
            console.log("点击提示");
        }

        /** 修改倒计时 */
        @InterestNotify(NotifyConst.updatePKTime)
        private updatePKTime(): void {
            let time = $userData.pkRoomVO.timeTick;
            let timeStr: string = time.toString();
            this._view.timebar.text = timeStr;
            if (time <= 10) {
                this._view.timePrompt();
            }
        }

        /** 使用减时道具 */
        @InterestNotify(NotifyConst.useMinusTimeTool)

        private useMinusTimeTool(): void {
            //   SoundManager.getInstance().PlaySound(SoundManager.mShorterAudioUrl);
            if (this._view.reduceTime_Num.text === '0') {
                $facade.addModule(ModuleID.msg, undefined, '道具不足');
                return;
            }
            let opponentID = $userData.pkRoomVO.opponentID;
            this.model.reqUseTool(1);
            SoundManager.getInstance().PlaySound(SoundManager.mShorterAudioUrl);
        }

        @InterestNotify(NotifyConst.updateGameSituation)
        private updateGameSituation(): void {
            let msg = this.model.Msg;
            this._view.gamerSituation_label.text = msg;
            let sID = this.model.sDID;
            this._view.updateGamerPercent(sID, false, 'animation');
        }

        @InterestEvent(PKMainEvent.clickAddTimeTool)
        private clickAddTimeTool(): void {
            // this._view.showToolEffect();
            // let gamers = $userData.pkRoomVO.gamerList;
            // this._view.updateGamerPercent(gamers[1].sID,false,'animation');
            // SoundManager.getInstance().PlaySound(SoundManager.mLongerAudioUrl);
            if (this._view.addTime_Num.text === '0') {
                $facade.addModule(ModuleID.msg, undefined, '道具不足');
                return;
            }
            $userData.pkRoomVO.opponentID = $userData.account.userid.toString();
            this.model.reqUseTool(0);
            $userData.pkRoomVO.toolID = 0;
        }

        @InterestNotify(NotifyConst.toolUpdate)
        private toolUpdate(): void {
            this._view.updateToolNum();
        }
        public changeMoodPosition(flage: boolean) {
            if (flage) {
                console.log('添加木块');
                // let sID = $userData.pkRoomVO.gamerList[1].sID;
                // this._view.updateGamerPercent(sID,true);
                this.model.reqPlayBlockAdd();
            } else {
                console.log('减少木块');
                this.model.reqPlayBlockDelete();
            }

        }
        @InterestNotify(NotifyConst.moveMoodPosition)
        private moveMoodPosition() {
            let sID = this.model.sID;
            let flage = this.model.playBlockIsAdd;
            this._view.updateGamerPercent(sID, flage, 'percent');
        }
    }
}