namespace game {
    /**
     * 动画剪辑
     * 注意: scaleX 和 scaleY 属性内部特殊处理过, 仅提供 scale 属性控制整体缩放效果, 外部使用 Tween 时,
     * 只能用 scale 属性，否则在发布版中会出现抖动的 bug, 如果 x y 之间的缩放系数不同, 可以将特效嵌套到一
     * 个容器中在控制该容器
     * @author wizardc
     */
    export class AnimationClip extends egret.Bitmap implements IClockClient, IDispose {
        private _resMgr: AnimationResMgr;
        private _res: AnimationRes;

        private _url: string;

        private _frameRate: number;
        private _timeScale: number = 1;

        private _filp: boolean = false;
        private _scale: number = 1;

        private _immediatePlay: boolean = true;

        private _times: number;
        private _completeHandler: (clip: AnimationClip) => void;
        private _thisObj: any;
        private _args: any[];

        private _playing: boolean = false;
        private _data: AnimationData;
        private _resInvalid: boolean;

        private _interval: number;
        private _lastTime: number;
        private _onceTime: number;
        private _nowTimes: number;
        private _nowFrame: number = -1;

        public constructor() {
            super();
            this._resMgr = $singlon(AnimationResMgr);
        }

        public set scale(value: number) {
            if (this._scale == value) {
                return;
            }
            this._scale = value;
            this.updateScale();
        }
        public get scale(): number {
            return this._scale;
        }

        /**
         * 设定帧率后当前动画按设定的帧率播放, 默认或设定 undefined 后按配置文件设定的帧率播放
         */
        public set frameRate(value: number) {
            if (this._frameRate == value) {
                return;
            }
            this._frameRate = value;

            let frameRate = isNaN(this._frameRate) ? this._data.speed : this._frameRate;
            this._interval = 1000 / frameRate;
            if (this._playing && this._data) {
                this._onceTime = this._interval * this._data.frameCount;
            }
        }
        public get frameRate(): number {
            return this._frameRate;
        }

        public set timeScale(value: number) {
            this._timeScale = value;
        }
        public get timeScale(): number {
            return this._timeScale;
        }

        /**
         * true: 立即播放, 加载时间也算在播放时间中, false: 等待加载完成后从第一帧开始播放
         */
        public set immediatePlay(value: boolean) {
            this._immediatePlay = value;
        }
        public get immediatePlay(): boolean {
            return this._immediatePlay;
        }

        public get playing(): boolean {
            return this._playing;
        }

        /**
         * 设定路径, 设定后需要重新调用 play 播放
         */
        public setPath(url: string): void {
            this._url = url;
        }

        /**
         * @param start 从指定时间开始播放
         * @param times 小于等于 0 时表示无限循环播放
         */
        public play(start: number = 0, times: number = 1, completeHandler?: (clip: AnimationClip) => void, thisObj?: any, ...args): void {
            if (this._res) {
                this._res.off(egret.Event.COMPLETE, this.onLoaded, this);
                this._res.subtractUsing();
                this._res = undefined;
            }

            this._playing = true;
            this._data = undefined;

            this._times = times;
            this._completeHandler = completeHandler;
            this._thisObj = thisObj;
            this._args = args;

            this._lastTime = start;

            this.$play();
        }

        private $play(): void {
            this._resInvalid = true;
            let url = this._url;
            this._res = this._resMgr.getRes(url);
            this._res.addUsing();
            if (this._res.status == LoadStatus.loaded) {
                this.onLoaded();
            } else {
                this._res.on(egret.Event.COMPLETE, this.onLoaded, this);
                this._res.load();
            }
        }

        private onLoaded(event?: egret.Event): void {
            this._data = this._res.data;

            let frameRate = isNaN(this._frameRate) ? this._data.speed : this._frameRate;
            this._interval = 1000 / frameRate;

            this._onceTime = this._interval * this._data.frameCount;

            if (event) {
                this._res.off(egret.Event.COMPLETE, this.onLoaded, this);
                let times = 0;
                let frameIndex = 0;
                if (this._immediatePlay) {
                    times = Math.floor(this._lastTime / this._onceTime);
                    frameIndex = Math.floor((this._lastTime % this._onceTime) / this._interval);
                }
                if (this._times <= 0) {
                    this._nowTimes = times;
                    this.showFrame(frameIndex);
                } else if (times >= this._times) {
                    this.showFrame(this._data.frameCount - 1);
                    this.playComplete();
                } else {
                    this._nowTimes = times;
                    this.showFrame(frameIndex);
                }
            } else {
                this._nowTimes = 0;
                this.showFrame(0);
            }
        }

        public update(passedTime: number): void {
            if (this._playing) {
                this._lastTime += passedTime * this._timeScale;
                if (this._data) {
                    while (this._lastTime >= this._onceTime * (this._nowTimes + 1)) {
                        ++this._nowTimes;
                    }
                    if (this._times > 0 && this._nowTimes >= this._times) {
                        this.showFrame(this._data.frameCount - 1);
                        this.playComplete();
                    } else {
                        let frameIndex = Math.floor((this._lastTime % this._onceTime) / this._interval);
                        this.showFrame(frameIndex);
                    }
                }
            }
        }

        private showFrame(index: number): void {
            if (!this._resInvalid && this._nowFrame == index) {
                return;
            }
            this._resInvalid = false;
            this._nowFrame = index;
            let frame = this._data.getFrame(index);
            this.anchorOffsetX = -frame.offsetX;
            this.anchorOffsetY = -frame.offsetY;
            this.texture = frame.texture;
            this.updateScale();
        }

        private updateScale(): void {
            this.scaleX = this._scale * (this._filp ? -1 : 1);
            this.scaleY = this._scale;
        }

        private playComplete(): void {
            let completeHandler = this._completeHandler;
            let thisObj = this._thisObj;
            let args = this._args;
            this.onPlayComplete();
            if (completeHandler) {
                completeHandler.call(thisObj, this, ...args);
            }
        }

        protected onPlayComplete(): void {
        }

        public dispose(): void {
            if (this._res) {
                this._res.off(egret.Event.COMPLETE, this.onLoaded, this);
                this._res.subtractUsing();
                this._res = undefined;
            }
            this._url = undefined;
            this._frameRate = undefined;
            this._filp = false;
            this._scale = 1;
            this._immediatePlay = true
            this._times = undefined;
            this._completeHandler = undefined;
            this._thisObj = undefined;
            this._args = undefined;
            this._playing = false;
            this._data = undefined;
            this._resInvalid = undefined;
            this._interval = undefined;
            this._lastTime = undefined;
            this._onceTime = undefined;
            this._nowTimes = undefined;
            this._nowFrame = -1;
            this.anchorOffsetX = 0;
            this.anchorOffsetY = 0;
            this.texture = undefined;
            this.scaleX = this.scaleY = 1;
            this.alpha = 1;
            this.visible = true;
        }
    }
}
