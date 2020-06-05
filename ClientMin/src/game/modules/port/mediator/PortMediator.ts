namespace game {
    /**
     * 关卡中介
     */
    export class PortMediator extends MediatorBase<PortFullWindow>{
        @InjectProxy(ProxyID.port)
        public model: PortProxy;

        public onRegister(): void {
            super.onRegister();
            this._view.update($userData.portList.portList);
            this._view.bml_starNum.text = $userData.portList.starNum;
        }

        @InterestEvent(PortEvent.clickBack)
        private clickSet(e: egret.Event): void {
            SoundManager.getInstance().PlaySound(SoundManager.mClickAudioUrl);
            // SoundManager.getInstance().playClick();
            $facade.addModule(ModuleID.menu);
        }

        @InterestEvent(PortEvent.clickStart)
        private clickStart(e: egret.Event): void {
            SoundManager.getInstance().PlaySound(SoundManager.mClickAudioUrl);
            // SoundManager.getInstance().playClick();
            let id = e.data;
            this.gmStart(id);
        }

        @InterestEvent(PortEvent.clickExit)
        private clickExit(e: egret.Event): void {
            SoundManager.getInstance().PlaySound(SoundManager.mClickAudioUrl);
            $facade.addModule(ModuleID.menu);
        }

        public gmStart(id: number): void {
            let port = $userData.portList.getPort(id);
            let gamePortVO = $userData.gamePortVO = new GamePortVO();
            gamePortVO.update(port);
            gamePortVO.playProId = id;
            $facade.addModule(ModuleID.main);
        }

        @InterestNotify(NotifyConst.updatePortSart)
        private updatePortSart(e: egret.Event): void {
            $facade.addModule(ModuleID.main);
        }

    }
}