namespace game {
    /**
     * 游戏主场景中介
     */
    export class MainMediator extends MediatorBase<MainFullWindow>{
        public useKey: number;

        @InjectProxy(ProxyID.main)
        public model: MainProxy;

        public onRegister(): void {
            this.useKey = 0;
            super.onRegister();
            this.gameStart();
        }

        @InterestNotify(NotifyConst.gameNext)
        private gameNext(e: egret.Event): void {
            this.useKey = 0;
            let id = $userData.gamePortVO.playProId;
            let port = $userData.portList.getPort(id + 1);
            let gamePortVO = $userData.gamePortVO;
            gamePortVO.update(port);
            gamePortVO.playProId = id + 1;
            this._view.gameover();
            this.gameStart();
        }

        @InterestNotify(NotifyConst.gameStart)
        private gameStart() {
            this.gameAgain();
            //启用开始协议
            this.model.gamebegin();
            this._view.starnum.text = $userData.portList.starNum;
        }

        @InterestNotify(NotifyConst.updateKey)
        public updateKey() {
            // this._view.keynum.text = $userData.portList.keyNum;
        }

        @InterestNotify(NotifyConst.updateStar)
        public updateStar() {
            this._view.starnum.text = $userData.portList.starNum;
        }

        //修改游戏场景地图数据，并检测是否完成
        @InterestEvent(MainEvent.addMood)
        private addMood(e: egret.Event) {
            let data = e.data as MapVO;
            $userData.gamePortVO.GameMapVO.addMood(data);
            if (this.chechFillMap()) {
                SoundManager.getInstance().PlaySound(SoundManager.mWinAudioUrl);
                // SoundManager.getInstance().playWin();
                //启动结束协议
                this.model.gameend();
                this._view.map_rect.visible = true;

            }
        }

        //初始化木块坐标
        @InterestEvent(MainEvent.initPos)
        private initPos(e: egret.Event) {
            let data = e.data as MapVO;
            data.initPos();
        }

        @InterestEvent(MainEvent.removeMood)
        private removeMood(e: egret.Event) {
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
        @InterestEvent(MainEvent.beginMood)
        private beginMood(e: egret.Event) {

            SoundManager.getInstance().PlaySound(SoundManager.mClickAudioUrl);
            let _mapmood: MapMoodItem = e.target;
            _mapmood.index = this._view.grp_mood.getChildIndex(_mapmood);
            //置于99层，因为达不到99层，所以置于最顶层
            this._view.grp_mood.setChildIndex(_mapmood, 99);
            let result = this.getlattice(_mapmood.x, _mapmood.y);
            if (result.y <= $userData.gamePortVO.GameMapVO.map.rowGrids && result.x <= $userData.gamePortVO.GameMapVO.map.colGrids && result.y >= 0 && result.x >= 0) {
                _mapmood.removemood();
                return;
            }
        }

        //松开木块
        @InterestEvent(MainEvent.endMood)
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
        @InterestEvent(MainEvent.rechildindex)
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

        @InterestEvent(MainEvent.removeKeymood)
        private removeKeymood(): void {
            let numMood: number = this._view.grp_mood.numChildren;
            let numMapMood: number = $userData.gamePortVO.curPort.moodListVO.length;
            for (let i = 0; i < numMood - numMapMood; i++) {
                this._view.grp_mood.removeChildAt(numMapMood - 1);
            }
        }

        /** 监听 关卡 */
        @InterestEvent(MainEvent.clickMenu)
        private clickMenu(e: egret.Event): void {
            // SoundManager.getInstance().playClick();
            SoundManager.getInstance().PlaySound(SoundManager.mClickAudioUrl);
            this._view.grp_mood.removeChildren();
            this._view.map.removeChildren();
            $facade.addModule(ModuleID.menu);
        }

        /** 监听 关闭到Google按钮 */
        @InterestEvent(MainEvent.clickRefresh)
        private clickRefresh(e: egret.Event): void {
            // SoundManager.getInstance().playClick();
            SoundManager.getInstance().PlaySound(SoundManager.mClickAudioUrl);
            this.gameAgain();
        }

        /**监听 钥匙 */
        @InterestEvent(MainEvent.clickKey)
        private clickKey(): void {
            SoundManager.getInstance().PlaySound(SoundManager.mClickAudioUrl);
            this.model.userprompt();
            platform.share();
            egret.setTimeout(this.showkeymood, this, 500);
        }

        private showkeymood() {
            let port = $userData.gamePortVO.curPort;
            let mapmoodData = port.moodListVO;
            LogUtil.useKey(port.id);
            let key: number = 0;   //记录值，点击一次只提示一个
            for (let i = this.useKey; i < mapmoodData.length; i++) {
                let map_mood: MapMoodItem = this._view.grp_mood.getChildAt(i) as MapMoodItem;
                let result_px = this.getOVPixel(mapmoodData[i].col, mapmoodData[i].row);
                if (map_mood.data.col != mapmoodData[i].col || map_mood.data.row != mapmoodData[i].row) {
                    if (map_mood.data.col < port.mapVO.colGrids && map_mood.data.row < port.mapVO.rowGrids && map_mood.data.col > 0 && map_mood.data.row > 0) {
                        map_mood.removemood();
                        map_mood.restart();
                    }
                    if (key == 0) {
                        key = 1;
                        let mood: KeyMoodItem = this._view.refresh_keymood(mapmoodData[i]);
                        mood.x = result_px.x;
                        mood.y = result_px.y;
                        this._view.grp_mood.addChild(mood);
                        this.useKey = i + 1;
                    }
                }
            }
        }

        @InterestNotify(NotifyConst.gameAgain)
        public gameAgain(): void {
            //清除木块和地图
            this._view.gameover();
            //刷线本关卡地图数据
            let port = $userData.portList.getPort($userData.gamePortVO.playProId);
            this.useKey = 0;
            let mapData = $userData.gamePortVO;
            $userData.gamePortVO.GameMapVO.update(mapData.curPort.mapVO);
            this._view.updateData(mapData);
        }
    }
}