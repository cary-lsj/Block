namespace game {

    export class ShopItem extends eui.ItemRenderer {

        public reduce_time:eui.Image;
        public add_time:eui.Image;
        public item_num:eui.BitmapLabel;
        public item_money:eui.BitmapLabel;
        public flage_money:eui.Image;
        public flage_gold:eui.Image;
        
        public constructor() {
            super();
        }
        protected childrenCreated(): void {
            super.childrenCreated();
            // this.on(egret.TouchEvent.TOUCH_TAP, this.onChecked,this);
        }

        public dataChanged(): void {
            let data = this.data;
            this.updateState(data);
            if(data.check){
                this.currentState = 'selected';
            }else{
                this.currentState = 'normal';
            }
            this.item_num.text = data.num;
            if(data.money === 0){
                this.item_money.text = data.gold;
                this.flage_gold.visible = true;
            }else{
                this.item_money.text = data.money;
                this.flage_money.visible = true;
            }
            
            
        }
        private updateState(data) {
            switch(data.toolId){
                case 0:
                    this.add_time.visible = true;
                case 1:
                    this.reduce_time.visible = true;
            }
        }
    }
}