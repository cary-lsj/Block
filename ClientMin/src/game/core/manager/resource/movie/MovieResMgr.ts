namespace game {
    /**
     * 序列帧动画管理
     * @author wizardc
     */
    export class MovieResMgr extends ResMgrBase<MovieRes> {
        private _defaultLiveTime: number = 10000;

        public getRes(url: string, liveTime?: number): MovieRes {
            if (isNaN(liveTime)) {
                liveTime = this._defaultLiveTime;
            }
            if (!this._resMap[url]) {
                let res = recyclable(MovieRes);
                res.init(url, liveTime);
                this._resMap[url] = res;
            }
            return this._resMap[url];
        }
    }
}
