namespace game {
    /**
     * 游戏主地图 item
     */
    export class MapMainItem extends MapBaseItem {

        public constructor() {
            super();
        }
        protected childrenCreated(): void {
            super.childrenCreated();
        }

        public dataChanged(): void {
            super.dataChanged();
            let vo = this.data as MapVO;
            let map = vo.data;
            for (let i = 0; i < map.length - 1; i++) {
                let rowLine = map[i];
                for (let j = 0; j < rowLine.length - 1; j++) {
                    let data = rowLine[j];
                    this.createBorder(i, j);
                }
            }
        }

        private createBorder(row: number, col: number) {
            let type = MapBorderUtil.getBorderType(row, col);
            if (type == "") {
                return;
            }
            let border = new BorderItem();
            let posisint: Point = { x: col, y: row };
            MapBorderUtil.getMapBorderPixel(posisint, border);
            border.data = type
            this.addChild(border);
        }
    }
}