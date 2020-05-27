namespace game {

    export class GamerHeadItem extends eui.ItemRenderer {

        public headImg_item0:eui.Image;

        public constructor() {
            super();

        }
        protected childrenCreated(): void {
            super.childrenCreated();
            this.drawMask(this.headImg_item0);
        }
        public drawMask(headImg_0:eui.Image){
            let circle_one:egret.Shape = new egret.Shape();
            circle_one.graphics.beginFill(0x0000ff);
            circle_one.graphics.drawCircle(28,28,25);
            circle_one.graphics.endFill();
            this.addChild(circle_one);
            headImg_0.mask = circle_one; 
        }
    }
}