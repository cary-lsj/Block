namespace game {
    /**
     * 龙骨资源
     * @author wizardc
     */
    export class DragonBonesRes extends egret.EventDispatcher implements IRes {
        private _inConfig: boolean;
        private _dataUrl: string;
        private _texDataUrl: string;
        private _texPngUrl: string;
        private _status: LoadStatus = LoadStatus.noload;
        private _usingCount: number = 0;
        private _lastUseTime: number;
        private _liveTime: number;
        private _hasBonesData: boolean = false;
        private _data: dragonBones.EgretFactory;
        private _atlasName: string;
        private _armatureList: dragonBones.EgretArmatureDisplay[];

        public constructor() {
            super();
            this._armatureList = [];
        }

        public get url(): string {
            return this._dataUrl;
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

        public get data(): dragonBones.EgretFactory {
            return this._data;
        }

        public init(url: string, liveTime: number): void {
            this._inConfig = RES.hasRes(url + "_ske_dbbin");
            if (this._inConfig) {
                this._dataUrl = url + "_ske_dbbin";
                this._texDataUrl = url + "_tex_json";
                this._texPngUrl = url + "_tex_png";
            } else {
                this._dataUrl = RESVersion.getRealUrl(url + "_ske.dbbin");
                this._texDataUrl = RESVersion.getRealUrl(url + "_tex.json");
                this._texPngUrl = RESVersion.getRealUrl(url + "_tex.png");
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
                    console.trace(`资源"${this._dataUrl}"使用次数统计异常，当前为 ${this._usingCount}`);
                }
            }
        }

        public load(): void {
            if (this._status == LoadStatus.loading) {
                return;
            }
            if (this._status == LoadStatus.noload || this._status == LoadStatus.destroy) {
                this._status = LoadStatus.loading;
                if (this._hasBonesData) {
                    this.loadTexture();
                } else {
                    this.loadData();
                }
            }
        }

        private loadData(): void {
            if (this._inConfig) {
                RESP.getResAsync(this._dataUrl, this.onDataLoaded, this, LoadPriority.ui);
            } else {
                RESP.getResByUrl(this._dataUrl, this.onDataLoaded, this, RES.ResourceItem.TYPE_JSON, LoadPriority.ui);
            }
        }

        private onDataLoaded(data: any, url: string): void {
            if (!data) {
                console.error(`"${url}"加载失败！`);
                return;
            }
            this._hasBonesData = true;
            this._data = new dragonBones.EgretFactory();
            this._data.parseDragonBonesData(data);
            this.loadTexture();
        }

        private async loadTexture(): Promise<any> {
            let json, image;
            if (this._inConfig) {
                json = await RESP.getResAsyncAsync(this._texDataUrl, LoadPriority.ui);
                image = await RESP.getResAsyncAsync(this._texPngUrl, LoadPriority.ui);
            } else {
                json = await RESP.getResByUrlAsync(this._texDataUrl, RES.ResourceItem.TYPE_JSON, LoadPriority.ui);
                image = await RESP.getResByUrlAsync(this._texPngUrl, RES.ResourceItem.TYPE_IMAGE, LoadPriority.ui);
            }
            this._status = LoadStatus.loaded;
            this._atlasName = this._data.parseTextureAtlasData(json, image).name;
            this.dispatch(egret.Event.COMPLETE);
        }

        public takeArmatureDisplay(armatureName: string): dragonBones.EgretArmatureDisplay {
            if (this._status == LoadStatus.loaded) {
                let armature = this._data.buildArmatureDisplay(armatureName);
                this._armatureList.push(armature);
                return armature;
            }
            return undefined;
        }

        public disposeArmatureDisplay(armatureDisplay: dragonBones.EgretArmatureDisplay): void {
            this._armatureList.remove(armatureDisplay);
            armatureDisplay.removeSelf();
            armatureDisplay.dispose();
        }

        public destroy(): boolean {
            if (DEBUG) {
                if (this._usingCount > 0) {
                    console.warn(`资源"${this._dataUrl}"使用次数为 ${this._usingCount} 时就被销毁了！`);
                }
            }
            if (this._status == LoadStatus.loaded) {
                this._status = LoadStatus.destroy;
                for (let armature of this._armatureList) {
                    armature.removeSelf();
                    armature.dispose();
                }
                this._armatureList.length = 0;
                this._data.removeTextureAtlasData(this._atlasName, true);
                RES.destroyRes(this._texDataUrl);
                RES.destroyRes(this._texPngUrl);
                this._hasBonesData = false;
                this._data = undefined;
                this._atlasName = undefined;
                this.dispatch(egret.Event.REMOVED);
                return true;
            }
            return false;
        }
    }
}
