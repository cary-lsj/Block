namespace game {
    /**
     * 模块资源管理
     * @author cary
     */
    export class ModuleResMgr {
        private _checkTime: number = 10000;
        private _resMap: { [k: number]: ModuleRes };
        private _smartLiveTime: number = 60000;

        public constructor() {
            this._resMap = {};
        }

        public set checkTime(value: number) {
            this._checkTime = value;
        }
        public get checkTime(): number {
            return this._checkTime;
        }

        public getRes<T extends egret.DisplayObject & IModuleView>(moduleID: ModuleID, viewClass: { new(): T }): T {
            if (this._resMap[moduleID]) {
                let res = this._resMap[moduleID];
                if (res.resPolicy == ModuleResPolicy.never || (res.resPolicy == ModuleResPolicy.smart && res.view)) {
                    res.using = true;
                    return <T>res.view;
                }
            }
            let res = new ModuleRes();
            res.using = true;
            res.init(moduleID, viewClass, this._smartLiveTime);
            this._resMap[moduleID] = res;
            return <T>res.view;
        }

        public putRes(moduleID: ModuleID): void {
            if (this._resMap[moduleID]) {
                let res = this._resMap[moduleID];
                res.using = false;
                if (res.resPolicy == ModuleResPolicy.smart) {
                    res.recordLastUseTime();
                } else if (res.resPolicy == ModuleResPolicy.immediate) {
                    res.dispose();
                    if (res.destroy()) {
                        delete this._resMap[moduleID];
                    }
                }
            }
        }

        public clearRes(now: number): void {
            for (let url in this._resMap) {
                let res = this._resMap[url];
                if (res.using || res.resPolicy == ModuleResPolicy.never) {
                    continue;
                }
                if (res.resPolicy == ModuleResPolicy.smart) {
                    if (res.lastUseTime + res.liveTime <= now) {
                        res.dispose();
                    } else {
                        continue;
                    }
                }
                if (res.destroy()) {
                    delete this._resMap[res.moduleID];
                }
            }
        }
    }
}
