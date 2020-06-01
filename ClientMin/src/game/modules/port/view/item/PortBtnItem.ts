namespace game {

    export class PortBtnItem extends eui.ItemRenderer {

        public bml_num2:eui.BitmapLabel;

        public bml_num:eui.BitmapLabel;
        public btn_start: game.ScaleButton;
        public list_star: eui.List;
        private _listData: eui.ArrayCollection;

        public constructor() {
            super();
            this._listData = new eui.ArrayCollection();

        }
        protected childrenCreated(): void {
            super.childrenCreated();
            this.btn_start.on(egret.TouchEvent.TOUCH_TAP, this.onStartClick, this);
            this.list_star.dataProvider = this._listData;
            this.list_star.itemRenderer = StarsItem;
        }
        private onStartClick(e: egret.TouchEvent) {
            this.dispatch(PortEvent.clickStart, true, this.data.id);
        }
        public dataChanged(): void {
            let data = this.data as PortVO;
            let stanum = data.state;
            this.bml_num.text=`${data.id}`;
            this.bml_num2.text=`${data.id}`;
            this.updateState(data.state);
            this.updateStartNum(data.starNum);

        }
        private updateState(state: PortType) {
            switch (state) {
                case PortType.lock:
                    this.currentState = "lock";
                    break;
                case PortType.unlocked:
                    this.currentState = "unlocked";
                    break;
            }

        }
        private updateStartNum(num: number) {
            let list = [];
            for (let i = 1; i <= 3; i++) {
                if (i <= num) {
                    list.push(StarType.owen)
                } else {
                    list.push(StarType.unowen)
                }
            }
            this.updateStar(list);
        }

        public updateStar(data: StarType[]) {
            this._listData.source = data;
            this._listData.refresh();
        }


    }



}