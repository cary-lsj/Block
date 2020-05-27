namespace game {
    /**
     * 玩家数据
     */
    export class GamerVO {
        public gamer: gameMsg.IGamer;
        /** 玩家ID */
        public sID: string;
        /** 玩家头像 */
        public sHeadImg: string;
        /** 玩家昵称 */
        public sNick: string;
        /** 玩家排位等级 */
        public nRankLevel: number;

        public update(gamer: gameMsg.IGamer) {
            let that = this;
            that.sID = gamer.sID;
            that.sHeadImg = gamer.sHeadImg;
            that.sNick = gamer.sNick;
            that.nRankLevel = gamer.nRankLevel;
        }
    }
}