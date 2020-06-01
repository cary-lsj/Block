namespace game {
    /**
     * 用户数据
     */
    export class PlayerVO {
        /** ID */
        public sID: string;
        /** 头像 */
        public sHeadImg: string;
        /** 昵称 */
        public sNick: string;
        /**游戏币 */
        public nGold: number;
        /**金币 */
        public nMoney: number;
        /**道具 */
        public toolList: ToolVO[];
        /**道具 */
        public toolMap: { [id: number]: ToolVO };

        /** 星星总数 */
        public nTotalStar: number;

        public nTotalGate: number;

        public updateTool(data: string) {
            let that = this;
            for (let tool of that.toolList) {
                tool.count = 0;
            }
            if (data) {
                let goods = data.split(";");
                for (let good of goods) {
                    let arr = good.split(":");
                    that.toolMap[arr[0]].count = arr[1];
                }
            }
            $facade.dispatch(NotifyConst.toolUpdate);
        }
        public updateOneTool(toolInfo:ToolVO){
            let that = this;
            for (let tool of that.toolList) {
                if(tool.id === toolInfo.id)
                    tool.count = toolInfo.count;
            }
            that.toolMap[toolInfo.id].count = toolInfo.count;
            $facade.dispatch(NotifyConst.toolUpdate);
        }
    }
}