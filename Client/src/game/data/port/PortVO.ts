namespace game {
    /**
     * 关卡数据
     * @author wizardc
     */
    export class PortVO {
        /** 关卡ID */
        public id: number;
        /** 地图数据 */
        public mapVO: MapVO;
        /** 方块数据 */
        public moodListVO: MapVO[];
        /** 星星数量 */
        public starNum: number;
        /** 关卡状态 */
        public state: number | PortType;

        public update(data: any[]) {
            for (let i = 0; i < data.length; i++) {
                let mood = data[i];
                let vo = new MapVO();
                vo.update(mood);
                vo.type = i + 1;
                this.moodListVO.push(vo);
                this.mapVO.addMood(vo);
            }
        }

        public updateStart(value: number) {
            this.starNum = value;
            $facade.dispatch(NotifyConst.updatePortSart);
        }
    }
}
