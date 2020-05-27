namespace game {
    /**
     * 测试 item
     */
    export class Square extends eui.ItemRenderer {
        public img:eui.Image;

        private Type:string;
          public constructor(type:string="") {
            super();
            this.Type=type;
            this.init();
        }
        protected childrenCreated(): void {
            super.childrenCreated();
        }

        public dataChanged(): void {
        }
        private init(){
            this.currentState=this.Type;
        }
    }
}