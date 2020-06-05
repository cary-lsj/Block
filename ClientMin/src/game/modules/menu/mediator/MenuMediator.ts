namespace game {
    /**
     * 菜单中介
     */
    export class MenuMediator extends MediatorBase<MenuFullWindow>{

        @InjectProxy(ProxyID.menu)
        public _model: MenuProxy;

        public onRegister(): void {
            super.onRegister();
            this._view.updateAssets();
        }

        @InterestEvent(MenuEvent.clickRank)
        private clickRank(e: egret.Event): void {
            // SoundManager.getInstance().playClick();
            SoundManager.getInstance().PlaySound(SoundManager.mClickAudioUrl);
            this.dispatch(NotifyConst.updatePortStart, true);
            // $facade.addModule(ModuleID.rank);
            platform.showRank();
            LogUtil.rankMain();
        }
        @InterestEvent(MenuEvent.clickStart)
        private clickStart(e: egret.Event): void {
            // SoundManager.getInstance().playClick();
            SoundManager.getInstance().PlaySound(SoundManager.mClickAudioUrl);
            $facade.addModule(ModuleID.port);
        }

        @InterestEvent(MenuEvent.clickFight)
        private clickFight(e: egret.Event): void {
            // SoundManager.getInstance().playClick();
            SoundManager.getInstance().PlaySound(SoundManager.mClickAudioUrl);
            $facade.addModule(ModuleID.room);
        }

        @InterestEvent(MenuEvent.clickContinue)
        private clickcontinue(e: egret.Event): void {
            // SoundManager.getInstance().playClick();
            SoundManager.getInstance().PlaySound(SoundManager.mClickAudioUrl);
            $facade.addModule(ModuleID.humor, undefined, 2);
        }
        @InterestEvent(MenuEvent.clickShop)
        private clickShop(e: egret.Event): void {
            // SoundManager.getInstance().playClick();
            SoundManager.getInstance().PlaySound(SoundManager.mClickAudioUrl);
            $facade.addModule(ModuleID.shop);
        }

        @InterestNotify(NotifyConst.toolUpdate)
        public toolUpdate() {
            this._view.updateAssets();
        }

        @InterestNotify(NotifyConst.updateUserProperty)
        public updateUserProperty() {
            this._view.updateAssets();
        }
    }
}