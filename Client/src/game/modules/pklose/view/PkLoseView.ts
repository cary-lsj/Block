namespace game {
    /**
	 * 
	 * 好友对战失败场景
	 */
    export class PkLoseView extends FullWindowBase<any> implements IModuleView {
        public btn_leave: game.ScaleButton;
        public btn_again: game.ScaleButton;

        public constructor() {
            super("gameSkin.PkLoseSkin");
        }
        protected createComponent(): any {
            return undefined;
        }
        protected childrenCreated(): void {
            super.childrenCreated();


            this.btn_leave.on(egret.TouchEvent.TOUCH_TAP, this.onLeaveClick, this);
            this.btn_again.on(egret.TouchEvent.TOUCH_TAP, this.onAgainClick, this);
        }


        private onLeaveClick(e: egret.TouchEvent): void {

            this.dispatch(PortEvent.clickExit, true);
        }
        private onAgainClick(e: egret.TouchEvent): void {
            SoundManager.getInstance().PlaySound(SoundManager.mClickAudioUrl);
            this.dispatch(WinEvent.clickNext, true)
        }


    }
}
