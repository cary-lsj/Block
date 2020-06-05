namespace game {
    /**
     * 动画资源
     * @author cary
     */
    @DeployPool(500)
    export class AnimationRes extends egret.EventDispatcher implements IRes, IDispose, ICacheable {
        private _inConfig: boolean;
        private _jsonUrl: string;
        private _pngUrl: string;
        private _status: LoadStatus = LoadStatus.noload;
        private _usingCount: number = 0;
        private _lastUseTime: number;
        private _liveTime: number;
        private _data: AnimationData = new AnimationData();

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

        public get data(): AnimationData {
            return this._data;
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
                if (this._inConfig) {
                    RESP.getResAsync(this._jsonUrl, this.onJsonLoaded, this, LoadPriority.avatar);
                } else {
                    RESP.getResByUrl(this._jsonUrl, this.onJsonLoaded, this, RES.ResourceItem.TYPE_JSON, LoadPriority.avatar);
                }
            }
        }

        private onJsonLoaded(data: any, url: string): void {
            if (!data) {
                console.error(`"${url}"加载失败！`);
                return;
            }
            this._data.data = data;
            if (this._inConfig) {
                RESP.getResAsync(this._pngUrl, this.onImageLoaded, this, LoadPriority.avatar);
            } else {
                RESP.getResByUrl(this._pngUrl, this.onImageLoaded, this, RES.ResourceItem.TYPE_IMAGE, LoadPriority.avatar);
            }
        }

        private onImageLoaded(data: any, url: string): void {
            if (!data) {
                console.error(`"${url}"加载失败！`);
                return;
            }
            this._status = LoadStatus.loaded;
            this._data.texture = data;
            this._data.parse();
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
                this._data.clear();
                RES.destroyRes(this._jsonUrl);
                RES.destroyRes(this._pngUrl);
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
            this._data.clear();
        }

        public onRecycle(): void {
            this.dispose();
        }
    }
}
