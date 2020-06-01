namespace game {
    /**
     * 胜利中介
     */
    export class PKWinMediator extends MediatorBase<PKWinFullWindow>{

        private balanceInfo = {};

        @InjectProxy(ProxyID.pkwin)
        public model: PKWinproxy;

        public onRegister(): void {
            super.onRegister();
            this._view._initView();
        }

        public setModuleData(balanceInfo){
            console.log(balanceInfo);
            if(balanceInfo.type === 1){
                this.showPersonInfo(balanceInfo);
            }else{
                this.showBalanceInfo(balanceInfo);
            }
            // this.showBalanceInfo(balanceInfo);
        }
        public showPersonInfo(Info){
            console.log(Info);
            this._view.analysisInfo(Info);
        }
        public showBalanceInfo(balance):void{
            let dataArr = [];
            let userGold = 0;
            for(let i = 0;i < balance.length;i++)
            {
                let GamerInfo = $userData.pkRoomVO.getGamer(balance[i]['sGamerID']);
                if(GamerInfo === undefined)
                    return;
                let dataTemp = {
                    "sHeadImg":GamerInfo.sHeadImg,
                    "sNick":GamerInfo.sNick,
                    "time":balance[i].nTime,
                    "gold":balance[i].nGold,
                    "nRank":balance[i].nRank,
                    "nLevel":balance[i].nLevel,
                    "sID":balance[i].sGamerID,
                }
                dataArr.push(dataTemp);
                if(GamerInfo.sID === $userData.account.userid.toString())
                    userGold = balance[i].nGold;
            }
            //更新本地财产
            let nGold = $userData.playerVO.nGold === undefined ? 0 : $userData.playerVO.nGold;
            $userData.playerVO.nGold = nGold + userGold;
            $facade.dispatch(NotifyConst.updateUserProperty);
            console.log(dataArr);
            let data = this.orderby(dataArr, i => i.nRank);
            let dataa = [
                {
                    "sHeadImg":'',
                    "sNick":"小A",
                    "time":20,
                    "glod":10,
                    "nRank":1
                },
                {
                    "sHeadImg":'',
                    "sNick":"小B",
                    "time":20,
                    "glod":10,
                    "nRank":1
                },
                {
                    "sHeadImg":'',
                    "sNick":"小C",
                    "time":20,
                    "glod":10,
                    "nRank":1
                }
            ];
            this._view.analysisBalanceData(data);
        }
        /** 再来一局 */
        @InterestEvent(PKWinEvent.clickMore)
        private clickNext(e: egret.Event): void {
            //进入等待页面等待房主开始游戏，
            $facade.removeModule(ModuleID.pkwin);
            $facade.addModule(ModuleID.room,undefined,'wait');    
        }
        /** 离开 */
        @InterestEvent(PKWinEvent.clickLeave)
        private clickExit(e: egret.Event): void {
            this.model.reqLeaveRoom();
            // $facade.removeModule(ModuleID.pkwin);
            // $facade.addModule(ModuleID.menu);
        }

        
        @InterestEvent(PKWinEvent.clickSeeRank)
        private clickSeeRank(e: egret.Event): void {
            this.showBalanceInfo(this.model.balanceInfo);
            this._view.group_pklevel.visible = true;
            this._view.group_pkNRank.visible = false;
            this._view.btn_lookRank.visible = false;
            //  SoundManager.getInstance().PlaySound(SoundManager.mBGAudioUrl);
            SoundManager.getInstance().stopPKMusic();
             SoundManager.getInstance().playBgMusic();
            //  SoundManager.getInstance().playBgMusic();
        }

         //开始游戏通知
        @InterestNotify(NotifyConst.pkGameStart)
        public pkGameStart():void{
            $facade.removeModule(ModuleID.pkwin);
            $facade.addModule(ModuleID.pkmain);
        }
         //结束游戏通知
        @InterestNotify(NotifyConst.pkGameEnd)
        public pkGameEnd():void{
            this._view.group_countDown.visible = false;
            this._view.btn_lookRank.visible = true;
            // this.showBalanceInfo(this.model.balanceInfo);
        }

        public orderby<Titem, Tvalue>(arr: Titem[], selector: (i: Titem) => Tvalue): Titem[] {
            if (arr.length <= 1) {
                return arr;
            }
            const pivotIndex = Math.floor(arr.length / 2);
            const pivot = arr.splice(pivotIndex, 1)[0];
            const left = [] as Titem[];
            const right = [] as Titem[];
        
            for (const i of arr) {
                if (selector(i) < selector(pivot)) {
                    left.push(i);
                } else {
                    right.push(i);
                }
            }
            return this.orderby(left, selector).concat([pivot], this.orderby(right, selector));
        }
        /** 修改倒计时 */
        @InterestNotify(NotifyConst.updatePKTime)
        private updatePKTime():void{
            let _this = this;
            let time = $userData.pkRoomVO.timeTick;
            let timeStr:string = time.toString();
            if(timeStr === '1'){
                setTimeout(function(){
                    _this._view.countDown_txt.text = '有人使用加时道具，还需等待';
                    _this._view.countDown_num.text = '';
                },2000);
            }
            this._view.countDown_num.text = timeStr;
        }
    }
}