namespace game {
    /**
     * 粒子资源
     * @author wizardc
     */
    export class ParticleRes extends egret.EventDispatcher implements IRes {
        private _inConfig: boolean;
        private _jsonUrl: string;
        private _pngUrl: string;
        private _status: LoadStatus = LoadStatus.noload;
        private _usingCount: number = 0;
        private _lastUseTime: number;
        private _liveTime: number;
        private _jsonData: Object;
        private _imageData: egret.Texture;

        public get url(): string {
            return this._jsonUrl;
        }

        public get status(): LoadStatus {
            return this._status;
        }

        public get usingCount(): number {
            return this._usingCount;
        }

        public get lastUseTime(): number {
            return this._lastUseTime;
        }

        public get liveTime(): number {
            return this._liveTime;
        }

        public get data(): particle.GravityParticleSystem {
            return new particle.GravityParticleSystem(this._imageData, this._jsonData);
        }

        public init(url: string, liveTime: number): void {
            this._inConfig = RES.hasRes(url + "_json");
            if (this._inConfig) {
                this._jsonUrl = url + "_json";
                this._pngUrl = url + "_png";
            } else {
                this._jsonUrl = RESVersion.getRealUrl(url + ".json");
                this._pngUrl = RESVersion.getRealUrl(url + ".png");
            }
            this._liveTime = liveTime;
        }

        public addUsing(): void {
            ++this._usingCount;
        }

        public subtractUsing(): void {
            --this._usingCount;
            if (this._usingCount <= 0) {
                this._lastUseTime = GameTime.timer;
            }
            if (DEBUG) {
                if (this._usingCount < 0) {
                    console.trace(`资源"${this._jsonUrl}"使用次数统计异常，当前为 ${this._usingCount}`);
                }
            }
        }

        public load(): void {
            if (this._status == LoadStatus.loading) {
                return;
            }
            if (this._status == LoadStatus.noload || this._status == LoadStatus.destroy) {
                this._status = LoadStatus.loading;
                this.loadData();
            }
        }

        private async loadData(): Promise<any> {
            let json, image;
            if (this._inConfig) {
                json = await RESP.getResAsyncAsync(this._jsonUrl, LoadPriority.effect);
                image = await RESP.getResAsyncAsync(this._pngUrl, LoadPriority.effect);
            } else {
                json = await RESP.getResByUrlAsync(this._jsonUrl, RES.ResourceItem.TYPE_JSON, LoadPriority.effect);
                image = await RESP.getResByUrlAsync(this._pngUrl, RES.ResourceItem.TYPE_IMAGE, LoadPriority.effect);
            }
            this._status = LoadStatus.loaded;
            this._jsonData = json;
            this._imageData = image;
            this.dispatch(egret.Event.COMPLETE);
        }

        public destroy(): boolean {
            if (DEBUG) {
                if (this._usingCount > 0) {
                    console.warn(`资源"${this._jsonUrl}"使用次数为 ${this._usingCount} 时就被销毁了！`);
                }
            }
            if (this._status == LoadStatus.loaded) {
                this._status = LoadStatus.destroy;
                this._jsonData = undefined;
                this._imageData = undefined;
                RES.destroyRes(this._jsonUrl);
                RES.destroyRes(this._pngUrl);
                this.dispatch(egret.Event.REMOVED);
                return true;
            }
            return false;
        }

        public dispose(): void {
            this._usingCount = 0;
            this._status = LoadStatus.noload;
            this._inConfig = undefined;
            this._jsonUrl = undefined;
            this._pngUrl = undefined;
            this._jsonData = undefined;
            this._imageData = undefined;
        }

        public onRecycle(): void {
            this.dispose();
        }
    }
}
