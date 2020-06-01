namespace game {
    /**
     * 广告 中介
     */
    export class AdMediator extends MediatorBase<AdDialog>{

        public onRegister(): void {
            super.onRegister();
            
        }

        @InterestEvent(AdEvent.click)
        private click(e: egret.Event): void {
            SoundManager.getInstance().PlaySound(SoundManager.mClickAudioUrl);
            // SoundManager.getInstance().playClick();
            $facade.removeModule(ModuleID.ad);
        }
    }
}
