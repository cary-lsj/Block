namespace game {
    /**
     * 资源加载管理基类
     * @author wizardc
     */
    export abstract class ResMgrBase<T extends IRes> {
        protected _resMap: {[url: string]: Recyclable<T>};
        protected _checkTime: number = 10000;

        public constructor() {
            this._resMap = {};
        }

        public set checkTime(value: number) {
            this._checkTime = value;
        }
        public get checkTime(): number {
            return this._checkTime;
        }

        public abstract getRes(url: string, liveTime?: number): T;

        public clearRes(now: number): void {
            for (let url in this._resMap) {
                let res = this._resMap[url];
                if (res.status == LoadStatus.loaded && res.usingCount <= 0 && res.lastUseTime + res.liveTime <= now) {
                    res.destroy();
                    res.recycle();
                    delete this._resMap[url];
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
            res.recycle();
            delete this._resMap[url];
            return result;
        }
    }
}
