namespace game {
    /**
     * 地图数据
     * @author cary
     */
    export class MapVO {
        public data: number[][];
        public rowGrids: number;
        public colGrids: number;
        public type: number;
        public row: number;
        public col: number;
        public init(port) {
            this.rowGrids = port["row"];
            this.colGrids = port["col"];
            this.initMap();
            if (port["point"]) {
                for (let point of port["point"]) {
                    let row = point["row"] - 1;
                    let col = point["col"] - 1;
                    this.data[row][col] = SquareType.obstacles;
                }
            }

        }

        public initMap() {
            this.data = [];
            for (let i = 0; i < this.rowGrids; i++) {
                let rowLine = [];
                for (let j = 0; j < this.colGrids; j++) {
                    rowLine.push(SquareType.beyond);
                }
                this.data.push(rowLine);
            }
        }
        public initPos() {
            this.col = -1;
            this.row = -1
        }
        public update(data: any): void {
            this.row = parseInt(data["row"]);
            this.col = parseInt(data["col"]);
            this.data = ConfigManager.getMoodInfo(data["moodId"]);//获取木块数据（二维数组）

            this.rowGrids = this.data.length;
            this.colGrids = this.data[0].length;
        }

        public addMood(vo: MapVO) {
            this.addMap(vo.row, vo.col, vo.data);
        }

        public addMap(row: number, col: number, map: number[][]) {
            for (let i = 0; i < map.length; i++) {
                let rowLine = map[i];
                for (let j = 0; j < rowLine.length; j++) {
                    let data = rowLine[j];
                    if (data == SquareType.full) {
                        let n = i + row - 1;
                        let m = j + col - 1;
                        this.data[n][m] = SquareType.full;
                    }
                }
            }
        }

        public removeMood(vo: MapVO) {
            let map = vo.data;
            for (let i = 0; i < map.length; i++) {
                let rowLine = map[i];
                for (let j = 0; j < rowLine.length; j++) {
                    let data = rowLine[j];
                    if (data == SquareType.full) {
                        let n = i + vo.row - 1;
                        let m = j + vo.col - 1;
                        this.data[n][m] = SquareType.null;
                    }
                }
            }
        }
    }
}
