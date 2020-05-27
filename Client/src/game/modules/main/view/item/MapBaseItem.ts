namespace game {
    /**
     * 地图 基类
     */
    export class MapBaseItem extends eui.ItemRenderer {

        public constructor() {
            super();
        }
        protected childrenCreated(): void {
            super.childrenCreated();
        }

        public dataChanged(): void {
            let vo = this.data as MapVO;
            let map = vo.data;

            for (let i = 0; i < map.length; i++) {
                let rowLine = map[i];
                for (let j = 0; j < rowLine.length; j++) {
                    let data = rowLine[j];
                    if (data == SquareType.full) {
                        this.createSquare(i, j);
                    }
                    if(data==SquareType.obstacles){
                       this.createSquare(i, j,"8"); 
                    }
                }
            }
        }
        private createSquare(row: number, col: number,type:string="") {
            let square = new Square(type);
            let posisint: Point = { x: col, y: row };
            MapUtil.getPixel(posisint, square);
            this.addChild(square);
        }
    }
}