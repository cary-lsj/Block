namespace game {
    /**
     * 地图 边框
     */
    export class BorderItem extends eui.ItemRenderer {

        public constructor() {
            super();
        }
        protected childrenCreated(): void {
            super.childrenCreated();
        }

        public dataChanged(): void {
            this.currentState = this.data;
        }
    }
}