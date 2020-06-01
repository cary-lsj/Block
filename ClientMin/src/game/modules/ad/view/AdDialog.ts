namespace game {
    /**
     * 广告 界面弹窗
     */
    export class AdDialog extends DialogBase<any> {

        public btn_close:game.ScaleButton;

        
        public constructor() {
            super("gameSkin.AdSkin");
        }

        protected createComponent(): any {
            return undefined;
        }

        protected childrenCreated(): void {
            super.childrenCreated();
            this.btn_close.on(egret.TouchEvent.TOUCH_TAP,this.onCloseClick,this);
        }

        private onCloseClick(e:egret.TouchEvent):void{
            this.dispatch(AdEvent.click,true);
        }
    }
}