namespace game {
    /**
     * 皮一下 界面弹窗
     */
    export class HumorDialog extends DialogBase<any> {

        public btn_close: game.ScaleButton;
        public btn_save: game.ScaleButton;
        public edit_text: eui.EditableText;

        public constructor() {
            super("gameSkin.HumorSkin");
        }

        protected createComponent(): any {
            return undefined;
        }

        protected childrenCreated(): void {
            super.childrenCreated();
            this.btn_close.on(egret.TouchEvent.TOUCH_TAP, this.onCloseClick, this);
            this.btn_save.on(egret.TouchEvent.TOUCH_TAP, this.onSaveClick, this);
            this.edit_text.prompt = "内容不要超过两百字哟";
        }

        private onPortClick() {
            this.dispatch(HumorEvent.PortClick, true);
        }

        private onSaveClick() {

            let text = this.edit_text.text;
            LogUtil.logUser(`留言：《${text}》`);
            $facade.removeModule(ModuleID.humor);
        }

        private onCloseClick(e: egret.TouchEvent): void {
            this.dispatch(HumorEvent.click, true);
        }
    }
}