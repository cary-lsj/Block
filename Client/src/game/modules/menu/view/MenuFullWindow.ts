namespace game {
    /**
     * 菜单界面
     */
    export class MenuFullWindow extends FullWindowBase<any> implements IModuleView {
        public btn_fight: game.ScaleButton;
        public btn_continue: game.ScaleButton;
        public btn_start: game.ScaleButton;
        public btn_rank: game.ScaleButton;
        public btn_shop: game.ScaleButton;
        public grp_dw:eui.Group;
        public DiamondText:eui.BitmapLabel;
        public GoldText:eui.BitmapLabel;


        public constructor() {
            super("gameSkin.MenuSkin");
            game.SoundManager.getInstance();//播放背景音乐
        }
        protected createComponent(): any {
            return undefined;

        }
        protected childrenCreated(): void {
            super.childrenCreated();

            // this.grp_dw.y = this.stage.height/4.65;

            this.btn_start.on(egret.TouchEvent.TOUCH_TAP, this.onStartClick, this);
            this.btn_rank.on(egret.TouchEvent.TOUCH_TAP, this.onRankClick, this);

            this.btn_fight.on(egret.TouchEvent.TOUCH_TAP, this.onFightClick, this);
            this.btn_continue.on(egret.TouchEvent.TOUCH_TAP, this.onContinueClick, this);
            this.btn_shop.on(egret.TouchEvent.TOUCH_TAP, this.onShopClick, this);
            this.updateAssets();
        }
        private onFightClick(e: egret.TouchEvent): void {
            this.dispatch(MenuEvent.clickFight, true);
        }

        private onContinueClick(e: egret.TouchEvent): void {
            this.dispatch(MenuEvent.clickContinue, true);
        }

        private onStartClick(e: egret.TouchEvent): void {
            this.dispatch(MenuEvent.clickStart, true);
        }
        private onRankClick(e: egret.TouchEvent): void {
            this.dispatch(MenuEvent.clickRank, true);
        }
        private onShopClick(e: egret.TouchEvent): void {
            this.dispatch(MenuEvent.clickShop, true);
        }
        public updateAssets(){
            this.DiamondText.text = '0';
            this.GoldText.text = '0';

            if($userData.playerVO.nMoney !== undefined)
                this.DiamondText.text = $userData.playerVO.nMoney.toString();
            if($userData.playerVO.nGold !== undefined)
                this.GoldText.text = $userData.playerVO.nGold.toString();
        }
    }
}