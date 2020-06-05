namespace game {
    /**
     * 模块资源
     * @author cary
     */
    export class ModuleRes {
        private _moduleID: ModuleID;
        private _using: boolean = false;
        private _lastUseTime: number;
        private _liveTime: number;
        private _view: egret.DisplayObject & IModuleView;
        private _resNames: string[];
        private _resPolicy: ModuleResPolicy;

        public get moduleID(): ModuleID {
            return this._moduleID;
        }

        public set using(value: boolean) {
            this._using = value;
        }
        public get using(): boolean {
            return this._using;
        }

        public get lastUseTime(): number {
            return this._lastUseTime;
        }

        public get liveTime(): number {
            return this._liveTime;
        }

        public get view(): egret.DisplayObject & IModuleView {
            return this._view;
        }

        public get resNames(): string[] {
            return this._resNames;
        }

        public get resPolicy(): ModuleResPolicy {
            return this._resPolicy;
        }

        public init<T extends egret.DisplayObject & IModuleView>(moduleID: ModuleID, viewClass: { new(): T }, liveTime?: number): void {
            this._moduleID = moduleID;
            this._view = new viewClass();
            let resList: string[] = (<any>this._view.constructor).__releaseResList;
            if (resList && resList.length > 0) {
                this._resNames = resList.concat();
            }
            this._resPolicy = (<any>this._view.constructor).__resPolicy || ModuleResPolicy.never;
            if (this._resPolicy == ModuleResPolicy.smart) {
                this._liveTime = liveTime;
            }
        }

        public recordLastUseTime(): void {
            this._lastUseTime = GameTime.timer;
        }

        public dispose(): void {
            if (this._resPolicy != ModuleResPolicy.never) {
                this._view = undefined;
            }
        }

        public destroy(): boolean {
            if (this._resPolicy == ModuleResPolicy.never) {
                return;
            }
            if (this._resNames) {
                for (let i = 0; i < this._resNames.length; i++) {
                    if (RES.destroyRes(this._resNames[i])) {
                        this._resNames.splice(i, 1);
                        --i;
                    }
                }
            }
            return !this._resNames || this._resNames.length == 0;
        }
    }
}
