namespace game {
    /**
     * 皮一下 中介
     */
    export class HumorMediator extends MediatorBase<HumorDialog>{

        public onRegister(): void {
            super.onRegister();
            
        }

        public setModuleData(type:number){
        }

        @InterestEvent(HumorEvent.click)
        private click(e: egret.Event): void {
            SoundManager.getInstance().PlaySound(SoundManager.mClickAudioUrl);
            $facade.removeModule(ModuleID.humor);
        }
        
    }
}