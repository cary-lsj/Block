namespace game {
    /**
     * 排行榜 界面弹窗
     */
    export class RankDialog extends DialogBase<any> {

        public btn_close: eui.Button;
        public sc_rank: eui.Scroller;
        public list_rank: eui.List;
        public comOne: egret.tween.TweenGroup;
        public goOne: egret.tween.TweenGroup;

        private _listData: eui.ArrayCollection;

        public constructor() {
            super("gameSkin.RankSkin");
            this._listData = new eui.ArrayCollection();
        }

        protected createComponent(): any {
            return undefined;
        }

        protected childrenCreated(): void {
            super.childrenCreated();
            this.btn_close.on(egret.TouchEvent.TOUCH_TAP, this.onCloseClick, this);
            this.list_rank.dataProvider = this._listData;
            this.list_rank.itemRenderer = RankItem;
        }

        /** 排行榜展示 */
        public refreshList(list: any[]): void {
            this._listData.source = list;
            this._listData.refresh();
        }

        private onCloseClick(e: egret.TouchEvent): void {
            this.dispatch(RankEvent.click, true);
        }
    }
}