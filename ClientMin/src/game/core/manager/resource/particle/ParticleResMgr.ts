namespace game {
    /**
     * 粒子资源管理
     * @author wizardc
     */
    export class ParticleResMgr extends ResMgrBase<ParticleRes> {
        private _defaultLiveTime: number = 10000;

        public getRes(url: string, liveTime?: number): ParticleRes {
            if (isNaN(liveTime)) {
                liveTime = this._defaultLiveTime;
            }
            if (!this._resMap[url]) {
                let res = recyclable(ParticleRes);
                res.init(url, liveTime);
                this._resMap[url] = res;
            }
            return this._resMap[url];
        }
    }
}
