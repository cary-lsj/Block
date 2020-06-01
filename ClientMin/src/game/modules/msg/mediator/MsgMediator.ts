namespace game {
    /**
     * 胜利中介
     */
    export class MsgMediator extends MediatorBase<MsgDialog>{

        public onRegister(): void {
            super.onRegister();
        }
        public setModuleData(msg){
            console.log(msg);
            this._view.msg_txt.text = msg;
        }
        @InterestEvent(PortEvent.clickBack)
        private clickSet(e: egret.Event): void {
            SoundManager.getInstance().PlaySound(SoundManager.mClickAudioUrl);
            $facade.removeModule(ModuleID.msg);
        }
    }
}