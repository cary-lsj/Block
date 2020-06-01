namespace game {
    /**
     * 商店界面
     */
    export class ShopView extends FullWindowBase<any> implements IModuleView {
        public btn_back:game.ScaleButton;
        public sc_box:eui.Scroller;
        public group_box:eui.Group;
        public group_tool:eui.Group;
        public group_diamond:eui.Group;
        public sc_group:eui.Scroller;
        public tool_list:eui.List;
        public total_money:eui.BitmapLabel;
        public diamond_list:eui.List;
        public btn_ToolBuy:game.ScaleButton;
        public btn_diamondBuy:game.ScaleButton;
        public Tool_title:eui.Image;
        public Diamond_title:eui.Image;
        public flage_gold:eui.Image;
        public flage_money:eui.Image;



        private offsetXStart:number;
        private offsetXEnd:number;
        private _toolListData:eui.ArrayCollection;
        private _diamondListData:eui.ArrayCollection;
        public _toolBuyIndex:number;
        public _diamondBuyIndex:number;
        public _SetMealCFG = $singlon(SetMealCFG);

        public isToolCheckedFlage:boolean;
        public isDiamondCheckedFlage:boolean;

        public constructor() {
            super("gameSkin.ShopSkin");
            this._toolListData = new eui.ArrayCollection();
            this._diamondListData = new eui.ArrayCollection();
        }
        
        protected createComponent(): any {
            return undefined;
        }

        protected childrenCreated(): void {
            super.childrenCreated();
            this.tool_list.dataProvider = this._toolListData;
            this.tool_list.itemRenderer = ShopItem;

            this.diamond_list.dataProvider = this._diamondListData;
            this.diamond_list.itemRenderer = DiamondItem;

            this.btn_back.on(egret.TouchEvent.TOUCH_TAP, this.onBackClick,this);
            this.sc_group.on(eui.UIEvent.CHANGE_START,this.onStartMove,this);
            this.sc_group.on(eui.UIEvent.CHANGE_END,this.onEndMove,this);
            this.btn_ToolBuy.on(egret.TouchEvent.TOUCH_TAP, this.onBuyToolClick,this);
            this.btn_diamondBuy.on(egret.TouchEvent.TOUCH_TAP, this.onBuyDiamondClick,this);

            this.tool_list.on(eui.ItemTapEvent.ITEM_TAP,this.onChecked,this);
            this.diamond_list.on(eui.ItemTapEvent.ITEM_TAP,this.onDiamondChecked,this);
        }

        private onBackClick(e: egret.TouchEvent): void{
            this.dispatch(ShopEvent.clickBack,true);
        }
        private onBuyToolClick(e: egret.TouchEvent){
            this.dispatch(ShopEvent.clickToolBuy,true);
        }
        private onBuyDiamondClick(e: egret.TouchEvent){
            this.dispatch(ShopEvent.clickDiamondBuy,true);
        }
        private onStartMove(e: egret.TouchEvent){
            this.offsetXStart = this.sc_group.viewport.scrollH;
        }
        private onEndMove(e: egret.TouchEvent){
            this.offsetXEnd = this.sc_group.viewport.scrollH;
            let isRtoL = this.isRtoL(this.offsetXStart,this.offsetXEnd);
            if(isRtoL){
                if(this.offsetXEnd <= this.group_tool.width/2)
                    egret.Tween.get(this.sc_group.viewport).to({ scrollH: 0,}, 500, egret.Ease.backInOut).call(this.showToolTitle,this);
                else
                    egret.Tween.get(this.sc_group.viewport).to({ scrollH: this.group_tool.width,}, 500, egret.Ease.backInOut).call(this.showDiamondTitle,this);  
            }else{
                if(this.offsetXEnd <= this.group_tool.width/2)
                    egret.Tween.get(this.sc_group.viewport).to({ scrollH: 0,}, 500, egret.Ease.backInOut).call(this.showToolTitle,this);
                else
                    egret.Tween.get(this.sc_group.viewport).to({ scrollH: this.group_tool.width,}, 500, egret.Ease.backInOut).call(this.showDiamondTitle,this);
            }
        }
        private isRtoL(start:number,end:number):boolean{
            if(start <= end)
                return false;
            return true;
        }
        private showToolTitle(){
            console.log('showToolTitle');
            this.Tool_title.visible = true;
            this.Diamond_title.visible = false;
        }
        private showDiamondTitle(){
            console.log('showDiamondTitle');
            this.Tool_title.visible = false;
            this.Diamond_title.visible = true;
        }
        public getListData(){
            this.Tool_title.visible = true;

            this.isToolCheckedFlage = false;
            this.isDiamondCheckedFlage = false;
            let data = this._SetMealCFG.getAllSetMealCFG();
            let thisLength = this._SetMealCFG.getSetMealLength();
            let dataArr = [];
            for(let i = 0;i < thisLength;i++){
                data[i]['check'] = false;
                dataArr.push(data[i]);
            }
            this.updateToolListData(dataArr);

            let diamondData = this._SetMealCFG.getAllDiamondCFG();
            let thisDiamondLength = this._SetMealCFG.getDiamondLength();
            let diamondDataArr = [];
            for(let i = 0;i < thisDiamondLength;i++){
                diamondData[i]['check'] = false;
                diamondDataArr.push(diamondData[i]);
            }
            this.updateDiamondListData(diamondDataArr);
        }
        public updateToolListData(data){
            this._toolListData.source = data;
            this._toolListData.refresh();
        }
         public updateDiamondListData(data){
            this._diamondListData.source = data;
            this._diamondListData.refresh();
        }
        public onChecked(e:eui.ItemTapEvent){
            this.isToolCheckedFlage = true;
            let index = e.itemIndex;
            let data = this._toolListData.source;
            for(let i = 0;i < data.length;i++){
                data[i]['check'] = false;
            }
            data[index]['check'] = true;
            this.updateToolListData(data);
            if(data[index]['gold'] === 0){
                this.total_money.text = data[index]['money'];
                this.flage_gold.visible = false;
                this.flage_money.visible = true;
            }else{
                this.total_money.text = data[index]['gold'];
                this.flage_money.visible = false;
                this.flage_gold.visible = true;
            }
            
            this._toolBuyIndex = index;
        }
        public onDiamondChecked(e:eui.ItemTapEvent){
            this.isDiamondCheckedFlage = true;
            let index = e.itemIndex;
            let data = this._diamondListData.source;
            for(let i = 0;i < data.length;i++){
                data[i]['check'] = false;
            }
            data[index]['check'] = true;
            this.updateDiamondListData(data);
            this._diamondBuyIndex = index;
        }
    }
}