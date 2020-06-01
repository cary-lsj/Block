namespace game {
    /**
     * 测试界面
     */
    export class TestView extends eui.Component implements IModuleView {
        public btn_click: game.ScaleButton;
        public txt_label: eui.Label;
        public list_item: eui.List;
        public item:game.TestItem;
        public itemcom:game.TestComponent;

        private _listData: eui.ArrayCollection;
        public constructor() {
            super();
            this._listData = new eui.ArrayCollection();
        }
        public get layer(): ModuleLayer {
            return ModuleLayer.fullWindowLayer;
        }
        protected childrenCreated(): void {
            super.childrenCreated();
            this.btn_click.on(egret.TouchEvent.TOUCH_TAP, this.onCLick, this);

            this.list_item.dataProvider = this._listData;
            this.list_item.itemRenderer = TestItem;

            this.item.data = {"name":200};
            this.itemcom.data = {"name":500};
        }
        public onCLick(egret: TouchEvent): void {
            this.dispatch(TestEvent.click);
        }

        public setTxt(txt: string): void {
            this.txt_label.text = txt;
        }

        public refreshList(data: any): void {
            this._listData.source = data;
            this._listData.refresh();
        }
    }
}