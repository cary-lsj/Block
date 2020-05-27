namespace game {
    /**
	 * 
	 * 购买成功场景
	 */
    export class MsgDialog extends DialogBase<any> {
        public msg_txt:eui.Label;
        public btn_close:game.ScaleButton;


        public constructor() {
            super("gameSkin.msgSkin");
        }
        protected createComponent(): any {
            return undefined;
        }
        protected childrenCreated(): void {
            super.childrenCreated();
            this.btn_close.on(egret.TouchEvent.TOUCH_TAP, this.onBackClick, this);

        }
        private onBackClick(e: egret.TouchEvent): void {
            this.dispatch(PortEvent.clickBack, true);
        }
    }
}