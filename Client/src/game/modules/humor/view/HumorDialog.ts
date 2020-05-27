namespace game {
    /**
     * 皮一下 界面弹窗
     */
    export class HumorDialog extends DialogBase<any> {


        public img_buyao:eui.Image;
        public img_buneng:eui.Image;
        public btn_close:eui.Button;


        public edit_text:eui.EditableText;

        public btn_port:game.ScaleButton;



        
        public constructor() {
            super("gameSkin.HumorSkin");
        }

        protected createComponent(): any {
            return undefined;
        }

        protected childrenCreated(): void {
            super.childrenCreated();
            this.btn_close.on(egret.TouchEvent.TOUCH_TAP,this.onCloseClick,this);
            // this.edit_text.on(egret.FocusEvent.FOCUS_IN,this.onEditFocus,this);
            this.btn_port.on(egret.TouchEvent.TOUCH_TAP,this.onPortClick,this);
            this.edit_text.prompt="内容不要超过两百字哟";
        }

        private onPortClick(){
            this.dispatch(HumorEvent.PortClick,true);
        }

        // private onEditFocus(){
        //     this.edit_text.text = "";
        // }

        private onCloseClick(e:egret.TouchEvent):void{
            this.dispatch(HumorEvent.click,true);
        }

        //显示不要点图片
        public showBuyaoImg(){
            // this.img_buyao.visible = true;
            // this.img_buneng.visible = false;
        }

        //显示不能点图片
        public showBunengImg(){
            // this.img_buneng.visible = true;
            // this.img_buyao.visible = false;
        }
    }
}