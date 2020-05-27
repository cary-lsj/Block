namespace game{
    export class DiamondItem extends eui.ItemRenderer{
        public item_num:eui.BitmapLabel;
        public item_money:eui.BitmapLabel;

        
        public constructor() {
            super();
        }
        protected childrenCreated(): void {
            super.childrenCreated();
        }

        public dataChanged(): void {
            let data = this.data;
            if(data.check){
                this.currentState = 'selected';
            }else{
                this.currentState = 'normal';
            }
            this.item_num.text = data.num;
            this.item_money.text = data.rmb;
        }
    }
}