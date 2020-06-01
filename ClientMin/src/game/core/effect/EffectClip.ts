namespace game {
    /**
     * 序列帧画剪辑
     * @author wizardc
     */
    export class EffectClip extends egret.DisplayObjectContainer implements IDispose {
        private _resMgr: MovieResMgr;
        private _res: MovieRes;
        private _frameRate: number;
        private _url: string;
        private _playing: boolean = false;
        private _autoStop: boolean = true;
        private _times: number;
        private _completeHandler: (clip: AnimationClip) => void;
        private _thisObj: any;
        private _args: any[];

        private _data: egret.MovieClip;

        public constructor() {
            super();

            this._resMgr = $singlon(MovieResMgr);
        }

        public set autoStop(value: boolean) {
            this._autoStop = value;
        }
        public get autoStop(): boolean {
            return this._autoStop;
        }

        /**
        * 设定帧率后当前动画按设定的帧率播放, 默认或设定 undefined 后按配置文件设定的帧率播放
        */
        public set frameRate(value: number) {
            if (this._frameRate == value) {
                return;
            }
            this._frameRate = value;

        }
        public get frameRate(): number {
            return this._frameRate;
        }

        /**
         * 设定路径, 设定后需要重新调用 play 播放
         */
        public setPath(url: string): void {
            this._url = url;
        }

        public play(times: number = 1, completeHandler?: (clip: AnimationClip) => void, thisObj?: any, ...args): void {
            if (this._data) {
                this._data.removeSelf();
                this._data.stop();
                this._data = undefined;
            }
            if (this._res) {
                if (this.stage) {
                    this._res.subtractUsing();
                }
                this._res.off(egret.Event.COMPLETE, this.onLoaded, this);
                this._res.off(egret.Event.REMOVED, this.onDispose, this);
                this._res = undefined;
            }
            this._times = times;
            this._completeHandler = completeHandler;
            this._thisObj = thisObj;
            this._args = args;

            this._playing = true;

            this.$play();
        }

        private $play(): void {
            if (this._url) {
                this._res = this._resMgr.getRes(this._url);
                if (this.stage) {
                    this._res.addUsing();
                }
                if (this._res.status == LoadStatus.loaded) {
                    this.onLoaded();
                } else {
                    this._res.on(egret.Event.COMPLETE, this.onLoaded, this);
                    this._res.on(egret.Event.REMOVED, this.onDispose, this);
                    this._res.load();
                }
            }
        }

        private onLoaded(event?: egret.Event): void {
            this._data = this._res.data;
            this.addChild(this._data);
            if (this._playing) {
                this._data.play(this._times);
                this._data.on(egret.Event.COMPLETE, () => {
                    game.EffectManager.recycle(this);
                    let completeHandler = this._completeHandler;
                    let thisObj = this._thisObj;
                    let args = this._args;
                    if (completeHandler) {
                        completeHandler.call(thisObj, this, ...args);
                    }
                }, this._thisObj);
            }
        }
        private onDispose(event: egret.Event): void {
            if (this._data) {
                this._data.removeSelf();
                this._data.stop();
                this._data = undefined;
            }
            if (this._res) {
                this._res.off(egret.Event.COMPLETE, this.onLoaded, this);
                this._res.off(egret.Event.REMOVED, this.onDispose, this);
                this._res = undefined;
            }
        }

        public resume(): void {
            if (!this._playing && this._data) {
                this._playing = true;
                this._data.play();
            }
        }

        public stop(): void {
            if (this._playing && this._data) {
                this._playing = false;
                this._data.stop();
            }
        }
        public dispose(): void {
            if (this._data) {
                this._data.removeSelf();
                this._data.stop();
                this._data = undefined;
            }
            if (this._res) {
                if (this.stage) {
                    this._res.subtractUsing();
                }
                this._res.off(egret.Event.COMPLETE, this.onLoaded, this);
                this._res.off(egret.Event.REMOVED, this.onDispose, this);
                this._res = undefined;
            }
            this._url = undefined;
            this._playing = false;
            this._autoStop = true;
        }
    }
}
