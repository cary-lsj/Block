namespace game {
    /**
     * 动画资源管理
     * @author wizardc
     */
    export class AnimationResMgr extends ResMgrBase<AnimationRes> {
        private _defaultLiveTime: number = 10000;

        public getRes(url: string, liveTime?: number): AnimationRes {
            if (isNaN(liveTime)) {
                liveTime = this._defaultLiveTime;
            }
            if (!this._resMap[url]) {
                let res = recyclable(AnimationRes);
                res.init(url, liveTime);
                this._resMap[url] = res;
            }
            return this._resMap[url];
        }
    }
}
