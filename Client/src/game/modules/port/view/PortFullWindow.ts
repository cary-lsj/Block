namespace game {
    /**
     * 关卡界面
     */
    export class PortFullWindow extends FullWindowBase<any> implements IModuleView {
        public btn_back: game.ScaleButton;
        public sc_port: eui.Scroller;
        public list_port: eui.List;
        public btn_showstar: game.ScaleButton;
        private _listData: eui.ArrayCollection;

        public bml_starNum:eui.BitmapLabel;
        public grp_bj:eui.Group;

        public btn_exit:game.ScaleButton;

        public constructor() {
            super("gameSkin.PortSkin");
            this._listData = new eui.ArrayCollection();
        }
        protected createComponent(): any {
            return undefined;
        }
        protected childrenCreated(): void {
            super.childrenCreated();

            this.list_port.dataProvider = this._listData;
            this.list_port.itemRenderer = PortBtnItem;
            this.btn_back.on(egret.TouchEvent.TOUCH_TAP, this.onBackClick, this);
            this.btn_exit.on(egret.TouchEvent.TOUCH_TAP, this.onExitClick,this);
        }
       
        private onBackClick(e: egret.TouchEvent): void {
            this.dispatch(PortEvent.clickBack, true);
        }

        private onExitClick(e: egret.TouchEvent): void{
            this.dispatch(PortEvent.clickExit,true);
        }
        
        public update(data: PortVO[]) {
            this._listData.source = data;
            this._listData.refresh();
        }
        
    }
}