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
     * 序列帧画剪辑
     * @author wizardc
     */
    var EffectClip = (function (_super) {
        __extends(EffectClip, _super);
        function EffectClip() {
            var _this = _super.call(this) || this;
            _this._playing = false;
            _this._autoStop = true;
            _this._resMgr = game.$singlon(game.MovieResMgr);
            return _this;
        }
        Object.defineProperty(EffectClip.prototype, "autoStop", {
            get: function () {
                return this._autoStop;
            },
            set: function (value) {
                this._autoStop = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EffectClip.prototype, "frameRate", {
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
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 设定路径, 设定后需要重新调用 play 播放
         */
        EffectClip.prototype.setPath = function (url) {
            this._url = url;
        };
        EffectClip.prototype.play = function (times, completeHandler, thisObj) {
            if (times === void 0) { times = 1; }
            var args = [];
            for (var _i = 3; _i < arguments.length; _i++) {
                args[_i - 3] = arguments[_i];
            }
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
        };
        EffectClip.prototype.$play = function () {
            if (this._url) {
                this._res = this._resMgr.getRes(this._url);
                if (this.stage) {
                    this._res.addUsing();
                }
                if (this._res.status == 2 /* loaded */) {
                    this.onLoaded();
                }
                else {
                    this._res.on(egret.Event.COMPLETE, this.onLoaded, this);
                    this._res.on(egret.Event.REMOVED, this.onDispose, this);
                    this._res.load();
                }
            }
        };
        EffectClip.prototype.onLoaded = function (event) {
            var _this = this;
            this._data = this._res.data;
            this.addChild(this._data);
            if (this._playing) {
                this._data.play(this._times);
                this._data.on(egret.Event.COMPLETE, function () {
                    game.EffectManager.recycle(_this);
                    var completeHandler = _this._completeHandler;
                    var thisObj = _this._thisObj;
                    var args = _this._args;
                    if (completeHandler) {
                        completeHandler.call.apply(completeHandler, [thisObj, _this].concat(args));
                    }
                }, this._thisObj);
            }
        };
        EffectClip.prototype.onDispose = function (event) {
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
        };
        EffectClip.prototype.resume = function () {
            if (!this._playing && this._data) {
                this._playing = true;
                this._data.play();
            }
        };
        EffectClip.prototype.stop = function () {
            if (this._playing && this._data) {
                this._playing = false;
                this._data.stop();
            }
        };
        EffectClip.prototype.dispose = function () {
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
        };
        return EffectClip;
    }(egret.DisplayObjectContainer));
    game.EffectClip = EffectClip;
    __reflect(EffectClip.prototype, "game.EffectClip", ["game.IDispose"]);
})(game || (game = {}));
