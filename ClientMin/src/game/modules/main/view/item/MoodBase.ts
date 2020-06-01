module game {
	/**
	 * 木块基类
	 */
    export class MoodBase extends MapBaseItem {
        public constructor() {
            super();
        }
        protected childrenCreated(): void {
            super.childrenCreated();
        }

        public dataChanged(): void {
            let vo = this.data as MapVO;
            let type = vo.type + "";
            let map = vo.data;

            for (let i = 0; i < map.length; i++) {
                let rowLine = map[i];
                for (let j = 0; j < rowLine.length; j++) {
                    let data = rowLine[j];
                    if (data == SquareType.full) {
                        this._createSquare(i, j, type);
                    }
                }
            }
        }
        private _createSquare(row: number, col: number, type: string) {
            let square = new Square(type);
            let posisint: Point = { x: col, y: row };
            MapUtil.getMoodPixel(posisint, square);
            this.addChild(square);
        }
    }
}