namespace game {
    /**
     * 设置 界面弹窗
     */
    export class SetDialog extends DialogBase<any> {
        public btn_soundTab:eui.ToggleButton;
        public btn_musicTab:eui.ToggleButton;
        public btn_close:game.ScaleButton;
        public btn_music:eui.ToggleButton;
        public btn_sound:eui.ToggleButton;

        public sound:game.SoundManager;

        public constructor() {
            super("gameSkin.SetSkin");
            this.btn_soundTab.touchEnabled = false;
            this.btn_musicTab.touchEnabled = false;
            this.sound=game.SoundManager.getInstance();  
        }
       
        protected createComponent(): any {
            return undefined;
        }

        protected childrenCreated(): void {
            super.childrenCreated();

            this.init();
            this.btn_close.on(egret.TouchEvent.TOUCH_TAP,this.onCloseClick,this);
            this.btn_music.on(egret.TouchEvent.TOUCH_TAP,this.onMusicClick,this);
            this.btn_sound.on(egret.TouchEvent.TOUCH_TAP,this.isEffect,this);
         
        }
        private init(){
            this.btn_music.currentState = SoundManager.getInstance().isMusic ? "up" : "down";
            this.btn_musicTab.currentState = this.btn_music.currentState;
            this.btn_sound.currentState = SoundManager.getInstance().isEffect ? "up" : "down";
            this.btn_soundTab.currentState = this.btn_sound.currentState;
        }
        private onCloseClick(e: egret.TouchEvent): void{
            this.dispatch(SetEvent.click,true);
        }

        /** 按钮音效设置 */
        private isEffect( e: egret.TouchEvent ){
            SoundManager.getInstance().PlaySound(SoundManager.mClickAudioUrl);
            // SoundManager.getInstance().playClick();
            if( SoundManager.getInstance().isEffect ){
                SoundManager.getInstance().isEffect = false;
                this.btn_sound.currentState = "down";
                this.btn_soundTab.currentState = "down";
            }else{
                SoundManager.getInstance().isEffect = true;
                this.btn_sound.currentState = "up";
                this.btn_soundTab.currentState = "up";
            }
        }
        /** 背景音乐设置 */
        private onMusicClick(e: egret.TouchEvent): void{
            SoundManager.getInstance().PlaySound(SoundManager.mClickAudioUrl);
            // SoundManager.getInstance().playClick();
            if( SoundManager.getInstance().isMusic){
                SoundManager.getInstance().isMusic = false;
                this.btn_music.currentState = "down";
                this.btn_musicTab.currentState = "down";
            }else{
                SoundManager.getInstance().isMusic = true;
                this.btn_music.currentState = "up";
                this.btn_musicTab.currentState = "up";
            }
        }
      
    }
}
