namespace game {
    /**
     * 登录界面
     */
    export class LoginFullWindow extends FullWindowBase<any> implements IModuleView {
        public btn_login:game.ScaleButton;
        public text_username:eui.EditableText;

        public constructor() {
            super("gameSkin.LoginSkin");
        }
        protected createComponent(): any {
            return undefined;
        }
        protected childrenCreated(): void {
            super.childrenCreated();
            this.btn_login.on(egret.TouchEvent.TOUCH_TAP, this.onLoginClick,this);
        }
        
        public onLoginClick():void{
            SoundManager.getInstance().PlaySound(SoundManager.mClickAudioUrl);
            this.dispatch(LoginEvent.clickLogin,true)
        }
        public _initView():void{
            this.text_username.text = '';
        }
    }
}