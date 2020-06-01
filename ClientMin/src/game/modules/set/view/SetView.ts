namespace game {
    /**
     * 设置 界面弹窗
     */
    export class SetView extends eui.Component {

        public grp_dialog:eui.Group;
        public grp_music:eui.Group; 
        public img_music_off:eui.Image;
        public grp_sound:eui.Group;
        public img_sound_off:eui.Image;
        public btn_set:game.ScaleButton;


       
        public sound: game.SoundManager;

        public constructor() {
            super();
            this.sound = game.SoundManager.getInstance();
        }

        protected createComponent(): any {
            return undefined;
        }

        protected childrenCreated(): void {
            super.childrenCreated();
            
            this.grp_dialog.visible = false;

            this.btn_set.on(egret.TouchEvent.TOUCH_TAP,this.onSetClick,this);
            this.grp_music.on(egret.TouchEvent.TOUCH_TAP,this.onMusicClick,this);
            this.grp_sound.on(egret.TouchEvent.TOUCH_TAP,this.onSoundClick,this);
            this.init();

        }
        private init() {
            this.img_music_off.visible = SoundManager.getInstance().isMusic ? false : true;
            this.img_sound_off.visible = SoundManager.getInstance().isEffect ? false : true;
           
        }
        public onSetClick(){
            // SoundManager.getInstance().playClick();
            SoundManager.getInstance().PlaySound(SoundManager.mClickAudioUrl);
            if(this.grp_dialog.visible){
                this.grp_dialog.visible = false;
            }else{
                this.grp_dialog.visible = true;
            }
        }

        /** 按钮音效设置 */
        private onSoundClick(e: egret.TouchEvent) {
            // SoundManager.getInstance().playClick();
            SoundManager.getInstance().PlaySound(SoundManager.mClickAudioUrl);
            if (SoundManager.getInstance().isEffect) {
                SoundManager.getInstance().isEffect = false;
                this.img_sound_off.visible = true;
                
            } else {
                SoundManager.getInstance().isEffect = true;
                this.img_sound_off.visible = false;
            }
        }
        /** 背景音乐设置 */
        private onMusicClick(e: egret.TouchEvent): void {
            // SoundManager.getInstance().playClick();
            SoundManager.getInstance().PlaySound(SoundManager.mClickAudioUrl);
            if (SoundManager.getInstance().isMusic) {
                SoundManager.getInstance().isMusic = false;
                this.img_music_off.visible = true;
            } else {
                SoundManager.getInstance().isMusic = true;
                this.img_music_off.visible = false;
            }
        }

    }
}
