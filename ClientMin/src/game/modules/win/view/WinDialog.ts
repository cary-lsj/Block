namespace game {
    /**
     * 胜利 界面弹窗
     */
    export class WinDialog extends DialogBase<any> {

        public group:eui.Group;
        public btn_close:game.ScaleButton;
        public btn_next:game.ScaleButton;
        public btn_again:game.ScaleButton;
        public btn_rank:game.ScaleButton;
        public image:eui.Image;
        public image0:eui.Image;
        public image1:eui.Image;
        public image2:eui.Image;
        public btn_ad:game.ScaleButton;
        public image3:eui.Image;

        


        /**
         * EXML 中对应的tweenGroup动画对象
         */
        public starOne:egret.tween.TweenGroup
        public starTwo:egret.tween.TweenGroup
        public starThree:egret.tween.TweenGroup
        public comeOne:egret.tween.TweenGroup
        public goOne:egret.tween.TweenGroup
        public resetWin:egret.tween.TweenGroup
        public seeAd:egret.tween.TweenGroup

        private _starNum:number

        public constructor() {
            super("gameSkin.WinSkin");
            
        }
        protected createComponent(): any {
            return undefined;
        }
 
        protected childrenCreated(): void {
            super.childrenCreated();
            let view = this._component;

            this.btn_close.on(egret.TouchEvent.TOUCH_TAP,this.onCloseClick,this)
            this.btn_next.on(egret.TouchEvent.TOUCH_TAP,this.onNextClick,this)
            this.btn_again.on(egret.TouchEvent.TOUCH_TAP,this.onAgainClick,this)
            this.btn_rank.on(egret.TouchEvent.TOUCH_TAP,this.onRankClick,this)
            this.btn_ad.on(egret.TouchEvent.TOUCH_TAP,this.onAdClick,this)
            this.btn_ad.group.addChild(this.image3)

        }

        private onCloseClick(e:egret.TouchEvent):void{
            SoundManager.getInstance().PlaySound(SoundManager.mClickAudioUrl);
            // SoundManager.getInstance().playClick()
            this.dispatch(WinEvent.clickClose,true)
        }
        private onNextClick(e:egret.TouchEvent):void{
            SoundManager.getInstance().PlaySound(SoundManager.mClickAudioUrl);
            // SoundManager.getInstance().playClick()
            this.dispatch(WinEvent.clickNext,true)
        }
        private onAgainClick(e:egret.TouchEvent):void{
            SoundManager.getInstance().PlaySound(SoundManager.mClickAudioUrl);
            // SoundManager.getInstance().playClick()
            this.dispatch(WinEvent.clickAgain,true)
        }
        private onRankClick(e:egret.TouchEvent):void{
            SoundManager.getInstance().PlaySound(SoundManager.mClickAudioUrl);
            // SoundManager.getInstance().playClick()
            this.dispatch(WinEvent.clickRank,true)
        }
        private onAdClick(e:egret.TouchEvent):void{
            SoundManager.getInstance().PlaySound(SoundManager.mClickAudioUrl);
            // SoundManager.getInstance().playClick()
            this.dispatch(WinEvent.clickAd,true)
        }

        

        /** 播放动画 */
        public animationPlay(e:WinDialog){
            e.comeOne.play(0)
            switch(this._starNum){
                case 1:
                     e.starOne.play(0)
                     break
                case 2:
                     e.starTwo.play(0)
                     break
                case 3:
                     e.starThree.play(0)
                     break
            }
        }

        /** 获取星星个数 */
        public get getStarNum():number{
            return this._starNum
        }

        /** 修改星星个数 */
        public refreshViewData(value:number):void{
            this._starNum = value
        }

    }
}