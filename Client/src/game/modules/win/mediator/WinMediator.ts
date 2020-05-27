namespace game {
    /**
     * 胜利中介
     */
    export class WinMediator extends MediatorBase<WinDialog>{
        /** 使用胜利代理 */
        @InjectProxy(ProxyID.win)
        public model: WinProxy

        public seeAdFlage = false

        public onRegister(): void {
            super.onRegister();
            this.resetStar();
            this.updatePortSart()
        }

        /** 监听 关闭按钮 */
        @InterestEvent(WinEvent.clickClose)
        private clickClose(e: egret.Event): void {
            this._view.goOne.play(0)
            setTimeout(function () {
                $facade.removeModule(ModuleID.win)
            }, 250);
        }

        /** 监听 下一关按钮 */
        @InterestEvent(WinEvent.clickNext)
        private clickNext(e: egret.Event): void {
            $facade.removeModule(ModuleID.win);
            let portId = $userData.gamePortVO.playProId;
            if(portId < $userData.portList.portList.length){
                $facade.dispatch(NotifyConst.gameNext);
            }     
        }
        /** 监听 再来一次按钮 */
        @InterestEvent(WinEvent.clickAgain)
        private clickAgain(e: egret.Event): void {
            // console.log('clickAgain');
            $facade.removeModule(ModuleID.win);
            $facade.dispatch(NotifyConst.gameAgain);
        }
        /** 监听 排行榜按钮 */
        @InterestEvent(WinEvent.clickRank)
        private clickRank(e: egret.Event): void {
            // console.log('clickRank');
            $facade.addModule(ModuleID.rank);
        }

        /** 监听 看广告按钮 */
        @InterestEvent(WinEvent.clickAd)
        private clickAd(e: egret.Event): void {
            // console.log('clickAd');
            if(!this.seeAdFlage){
                this.model.senSeeAd()
                this.seeAdFlage = true
            }else{
                console.log('请进行下一关')
            }
            
            // this._view.seeAd.play(0);
        }

        private resetStar(): void{
            this._view.image0.alpha = this._view.image1.alpha =this._view.image2.alpha = 0;
            this._view.image0.x = this._view.image1.x =this._view.image2.x = 246;
            this._view.image0.y = this._view.image1.y =this._view.image2.y = 211;
        }


        /** 监听 关卡星星数据 */
        @InterestNotify(NotifyConst.updatePortSart)
        private updatePortSart(): void {
            this.seeAdFlage = false;
            let portId = $userData.gamePortVO.playProId;
            let port = $userData.portList.getPort(portId);
            let StarNum = port.starNum;
            this._view.refreshViewData(StarNum);
            this._view.animationPlay(this._view);
        }
    }
}