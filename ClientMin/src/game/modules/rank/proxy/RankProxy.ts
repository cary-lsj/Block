namespace game {
    /**
     * 排行榜代理
     */
    export class RankProxy extends ProxyBase {
        private _timeoutID: number;
        private _dataArr: any[];

        public constructor() {
            super(ProxyID.rank);
        }

        public reqRank(): void {
            this._senderHttp.send_Rank()
        }

        /** 监听 返回请求 */
        @InterestMessage(gameMsg.EnumMsg.rankresponse)
        private rankresponse(e?: egret.Event) {
            let data = e.data;
            let dataArr = data.response.rankDatas;
            this._dataArr = dataArr;
            $facade.dispatch(NotifyConst.rankUpdate);
        }

        public getDataArr() {
            return this._dataArr;
        }
    }
}