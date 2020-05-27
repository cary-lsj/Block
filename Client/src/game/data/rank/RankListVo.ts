namespace game {
    /**
     * 关卡列表数据
     * @author wizardc
     */
    export class RankListVo {
        public rankList: RankVO[];

        public updateList(data: any[]): void {
            for (let i = 0; i < data.length; i++) {
                let port = data[i];
                let vo = new RankVO();
                vo.rank = port.rank;
                vo.starNum = port.starNum;
                this.rankList.push(vo);
            }
        }
        
    }
}
