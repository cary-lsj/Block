namespace game {

    export class StarsItem extends eui.ItemRenderer {
        public constructor() {
            super();
        }
        protected childrenCreated(): void {
            super.childrenCreated();
        }

        public dataChanged(): void {
            let state = this.data as StarType;
            switch (state) {
                case StarType.owen:
                    this.currentState = "owen";
                    break;
                case StarType.unowen:
                    this.currentState = "unowen";
                    break;
            }
        }
    }
}