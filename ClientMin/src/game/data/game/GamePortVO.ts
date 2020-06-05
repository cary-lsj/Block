namespace game {
    /**
     * 当前游戏 关卡数据
     * @author cary
     */
    export class GamePortVO {
        /** 地图数据 */
        public GameMapVO: GameMapVO;
        /** 木块列表 */
        public moodListVO: MapVO[];
        /**g关卡ID */
        public playProId: number;
        /**当前关卡所有数据（原始） */
        public curPort: PortVO;

        public update(vo: PortVO) {
            this.curPort = vo;
            this.updateMoods(vo.moodListVO)
            let gamemap = this.GameMapVO = new GameMapVO();
            gamemap.map = new MapVO();
            gamemap.init(this.curPort.mapVO.rowGrids, this.curPort.mapVO.colGrids);
            gamemap.update(vo.mapVO);
        }

        public updateMoods(list: MapVO[]) {
            this.moodListVO = [];
            for (let vo of list) {
                let map = new MapVO;
                map.row = -1;
                map.col = -1;
                map.rowGrids = vo.rowGrids;
                map.colGrids = vo.colGrids;
                map.type = vo.type;
                map.initMap();
                map.addMap(1, 1, vo.data);
                this.moodListVO.push(map);
            }
        }

        public addMood() {

        }

        public removeMood() {

        }


    }
}

