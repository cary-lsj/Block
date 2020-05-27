namespace game {
    /**
     * 皮一下 中介
     */
    export class HumorMediator extends MediatorBase<HumorDialog>{

        public onRegister(): void {
            super.onRegister();
            // this._view.edit_text.text = `内容不要超过两百字哟`;
            
        }

        public setModuleData(type:number){
            if(type==1)
            {
                this._view.showBuyaoImg();
            }else{
                this._view.showBunengImg();
            }

        }

        @InterestEvent(HumorEvent.click)
        private click(e: egret.Event): void {
            SoundManager.getInstance().PlaySound(SoundManager.mClickAudioUrl);
            // SoundManager.getInstance().playClick();
            $facade.removeModule(ModuleID.humor);
        }

        @InterestEvent(HumorEvent.PortClick)
        private portClick(e: egret.Event): void {
            SoundManager.getInstance().PlaySound(SoundManager.mClickAudioUrl);
            // SoundManager.getInstance().playClick();
            $facade.removeModule(ModuleID.humor);
        }
       
        
        
    }
}