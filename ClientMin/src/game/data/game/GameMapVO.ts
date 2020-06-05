namespace game {
    /**
     * 当前游戏 地图数据
     * @author cary
     */
    export class GameMapVO {
        /** 地图 逻辑数据 */
        public map: MapVO;
        /** 地图 渲染数据 */
        public mapData: MapVO;

        public init(rowGrids: number, colGrids: number) {
            this.map = new MapVO
            this.map.rowGrids = rowGrids;
            this.map.colGrids = colGrids;
            this.map.initMap();

            this.mapData = new MapVO
            this.mapData.rowGrids = rowGrids + 2;
            this.mapData.colGrids = colGrids + 2;
            this.mapData.initMap();
        }

        public update(vo: MapVO) {
            this.updateMap(vo);
            this.updateDataMap(vo);
        }

        public updateMap(vo: MapVO) {
            let map = vo.data;
            for (let i = 0; i < map.length; i++) {
                let rowLine = map[i];
                for (let j = 0; j < rowLine.length; j++) {
                    let data = rowLine[j];
                    if (data == 1) {
                        this.map.data[i][j] = SquareType.null;
                    }
                }
            }
        }

        public updateDataMap(vo: MapVO) {
            let map = vo.data;
            for (var i = 0; i < vo.rowGrids; i++) {
                let rowLine = map[i];
                for (var j = 0; j < vo.colGrids; j++) {
                    let data = rowLine[j];
                    this.mapData.data[i + 1][j + 1] = data;
                }
            }
        }

        public addMood(vo: MapVO) {
            this.map.addMood(vo);
        }

        public removeMood(vo: MapVO) {
            this.map.removeMood(vo);
        }
    }
}


