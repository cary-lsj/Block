namespace game {
    /**
     * 测试 item
     */
    export class TestItem extends eui.ItemRenderer {
        public txt_name: eui.Label;
        public constructor() {
            super();
        }
        protected childrenCreated(): void {
            super.childrenCreated();
        }

        public dataChanged(): void {
            let data = this.data;
            this.txt_name.text = "第" + data["name"] + "关";
        }
    }
}