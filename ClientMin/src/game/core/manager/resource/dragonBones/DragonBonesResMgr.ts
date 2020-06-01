namespace game {
    /**
     * 龙骨资源管理
     * @author wizardc
     */
    export class DragonBonesResMgr {
        private _resMap: {[url: string]: DragonBonesRes};
        private _checkTime: number = 10000;
        private _defaultLiveTime: number = 10000;

        public constructor() {
            this._resMap = {};
        }

        public set checkTime(value: number) {
            this._checkTime = value;
        }
        public get checkTime(): number {
            return this._checkTime;
        }

        public getRes(url: string, liveTime?: number): DragonBonesRes {
            if (isNaN(liveTime)) {
                liveTime = this._defaultLiveTime;
            }
            let res: DragonBonesRes;
            if (this._resMap[url]) {
                res = this._resMap[url];
            } else {
                res = new DragonBonesRes();
                this._resMap[url] = res;
            }
            res.init(url, liveTime);
            return this._resMap[url];
        }

        public clearRes(now: number): void {
            for (let url in this._resMap) {
                let res = this._resMap[url];
                if (res.status == LoadStatus.loaded && res.usingCount <= 0 && res.lastUseTime + res.liveTime <= now) {
                    res.destroy();
                }
            }
        }

        public forceClear(...args: string[]): boolean | boolean[] {
            if (!args || args.length == 0) {
                return undefined;
            }
            if (args.length == 1) {
                return this.destroyRes(args[0]);
            }
            let result: boolean[] = [];
            for (let url of args) {
                result.push(this.destroyRes(url));
            }
            return result;
        }

        private destroyRes(url: string): boolean {
            let res = this._resMap[url];
            if (!res || res.status != LoadStatus.loaded || res.usingCount > 0) {
                return false;
            }
            let result = res.destroy();
            return result;
        }
    }
}
