namespace game {
    /**
     * 测试 item
     */
    export class TestComponent extends eui.Component  {
        public txt_name: eui.Label;

        private _data: number;

        private _invalidateDataFlag: boolean = false;

        public set data(value: any) {
            this._data = value;
            this._invalidateDataFlag = true;
            this.invalidateProperties();
        }
        public get data(): any {
            return this._data;
        }

        public constructor() {
            super();
        }
         public commitProperties(): void {
            super.commitProperties();

            if (this._invalidateDataFlag) {
                this._invalidateDataFlag = false;
                this.txt_name.text = "第" + this.data["name"] + "关";
            }
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