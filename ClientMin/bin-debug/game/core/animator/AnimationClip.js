var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var game;
(function (game) {
    /**
     * 动画剪辑
     * 注意: scaleX 和 scaleY 属性内部特殊处理过, 仅提供 scale 属性控制整体缩放效果, 外部使用 Tween 时,
     * 只能用 scale 属性，否则在发布版中会出现抖动的 bug, 如果 x y 之间的缩放系数不同, 可以将特效嵌套到一
     * 个容器中在控制该容器
     * @author wizardc
     */
    var AnimationClip = (function (_super) {
        __extends(AnimationClip, _super);
        function AnimationClip() {
            var _this = _super.call(this) || this;
            _this._timeScale = 1;
            _this._filp = false;
            _this._scale = 1;
            _this._immediatePlay = true;
            _this._playing = false;
            _this._nowFrame = -1;
            _this._resMgr = game.$singlon(game.AnimationResMgr);
            return _this;
        }
        Object.defineProperty(AnimationClip.prototype, "scale", {
            get: function () {
                return this._scale;
            },
            set: function (value) {
                if (this._scale == value) {
                    return;
                }
                this._scale = value;
                this.updateScale();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AnimationClip.prototype, "frameRate", {
            get: function () {
                return this._frameRate;
            },
            /**
             * 设定帧率后当前动画按设定的帧率播放, 默认或设定 undefined 后按配置文件设定的帧率播放
             */
            set: function (value) {
                if (this._frameRate == value) {
                    return;
                }
                this._frameRate = value;
                var frameRate = isNaN(this._frameRate) ? this._data.speed : this._frameRate;
                this._interval = 1000 / frameRate;
                if (this._playing && this._data) {
                    this._onceTime = this._interval * this._data.frameCount;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AnimationClip.prototype, "timeScale", {
            get: function () {
                return this._timeScale;
            },
            set: function (value) {
                this._timeScale = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AnimationClip.prototype, "immediatePlay", {
            get: function () {
                return this._immediatePlay;
            },
            /**
             * true: 立即播放, 加载时间也算在播放时间中, false: 等待加载完成后从第一帧开始播放
             */
            set: function (value) {
                this._immediatePlay = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AnimationClip.prototype, "playing", {
            get: function () {
                return this._playing;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 设定路径, 设定后需要重新调用 play 播放
         */
        AnimationClip.prototype.setPath = function (url) {
            this._url = url;
        };
        /**
         * @param start 从指定时间开始播放
         * @param times 小于等于 0 时表示无限循环播放
         */
        AnimationClip.prototype.play = function (start, times, completeHandler, thisObj) {
            if (start === void 0) { start = 0; }
            if (times === void 0) { times = 1; }
            var args = [];
            for (var _i = 4; _i < arguments.length; _i++) {
                args[_i - 4] = arguments[_i];
            }
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
        };
        AnimationClip.prototype.$play = function () {
            this._resInvalid = true;
            var url = this._url;
            this._res = this._resMgr.getRes(url);
            this._res.addUsing();
            if (this._res.status == 2 /* loaded */) {
                this.onLoaded();
            }
            else {
                this._res.on(egret.Event.COMPLETE, this.onLoaded, this);
                this._res.load();
            }
        };
        AnimationClip.prototype.onLoaded = function (event) {
            this._data = this._res.data;
            var frameRate = isNaN(this._frameRate) ? this._data.speed : this._frameRate;
            this._interval = 1000 / frameRate;
            this._onceTime = this._interval * this._data.frameCount;
            if (event) {
                this._res.off(egret.Event.COMPLETE, this.onLoaded, this);
                var times = 0;
                var frameIndex = 0;
                if (this._immediatePlay) {
                    times = Math.floor(this._lastTime / this._onceTime);
                    frameIndex = Math.floor((this._lastTime % this._onceTime) / this._interval);
                }
                if (this._times <= 0) {
                    this._nowTimes = times;
                    this.showFrame(frameIndex);
                }
                else if (times >= this._times) {
                    this.showFrame(this._data.frameCount - 1);
                    this.playComplete();
                }
                else {
                    this._nowTimes = times;
                    this.showFrame(frameIndex);
                }
            }
            else {
                this._nowTimes = 0;
                this.showFrame(0);
            }
        };
        AnimationClip.prototype.update = function (passedTime) {
            if (this._playing) {
                this._lastTime += passedTime * this._timeScale;
                if (this._data) {
                    while (this._lastTime >= this._onceTime * (this._nowTimes + 1)) {
                        ++this._nowTimes;
                    }
                    if (this._times > 0 && this._nowTimes >= this._times) {
                        this.showFrame(this._data.frameCount - 1);
                        this.playComplete();
                    }
                    else {
                        var frameIndex = Math.floor((this._lastTime % this._onceTime) / this._interval);
                        this.showFrame(frameIndex);
                    }
                }
            }
        };
        AnimationClip.prototype.showFrame = function (index) {
            if (!this._resInvalid && this._nowFrame == index) {
                return;
            }
            this._resInvalid = false;
            this._nowFrame = index;
            var frame = this._data.getFrame(index);
            this.anchorOffsetX = -frame.offsetX;
            this.anchorOffsetY = -frame.offsetY;
            this.texture = frame.texture;
            this.updateScale();
        };
        AnimationClip.prototype.updateScale = function () {
            this.scaleX = this._scale * (this._filp ? -1 : 1);
            this.scaleY = this._scale;
        };
        AnimationClip.prototype.playComplete = function () {
            var completeHandler = this._completeHandler;
            var thisObj = this._thisObj;
            var args = this._args;
            this.onPlayComplete();
            if (completeHandler) {
                completeHandler.call.apply(completeHandler, [thisObj, this].concat(args));
            }
        };
        AnimationClip.prototype.onPlayComplete = function () {
        };
        AnimationClip.prototype.dispose = function () {
            if (this._res) {
                this._res.off(egret.Event.COMPLETE, this.onLoaded, this);
                this._res.subtractUsing();
                this._res = undefined;
            }
            this._url = undefined;
            this._frameRate = undefined;
            this._filp = false;
            this._scale = 1;
            this._immediatePlay = true;
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
        };
        return AnimationClip;
    }(egret.Bitmap));
    game.AnimationClip = AnimationClip;
    __reflect(AnimationClip.prototype, "game.AnimationClip", ["game.IClockClient", "game.IDispose"]);
})(game || (game = {}));
