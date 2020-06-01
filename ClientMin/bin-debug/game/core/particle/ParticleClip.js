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
     * 粒子动画剪辑
     * @author wizardc
     */
    var ParticleClip = (function (_super) {
        __extends(ParticleClip, _super);
        function ParticleClip() {
            var _this = _super.call(this) || this;
            _this._playing = false;
            _this._autoStop = true;
            _this._resMgr = game.$singlon(game.ParticleResMgr);
            _this.on(egret.Event.ADDED_TO_STAGE, _this.onAddedToStage, _this);
            _this.on(egret.Event.REMOVED_FROM_STAGE, _this.onRemovedFromStage, _this);
            return _this;
        }
        Object.defineProperty(ParticleClip.prototype, "autoStop", {
            get: function () {
                return this._autoStop;
            },
            set: function (value) {
                this._autoStop = value;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 设定路径, 设定后需要重新调用 play 播放
         */
        ParticleClip.prototype.setPath = function (url) {
            this._url = url;
        };
        ParticleClip.prototype.play = function () {
            if (this._data) {
                this._data.removeSelf();
                this._data.stop(true);
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
            this._playing = true;
            this.$play();
        };
        ParticleClip.prototype.$play = function () {
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
        ParticleClip.prototype.onLoaded = function (event) {
            this._data = this._res.data;
            this.addChild(this._data);
            if (this._playing) {
                this._data.start();
            }
        };
        ParticleClip.prototype.onDispose = function (event) {
            if (this._data) {
                this._data.removeSelf();
                this._data.stop(true);
                this._data = undefined;
            }
            if (this._res) {
                this._res.off(egret.Event.COMPLETE, this.onLoaded, this);
                this._res.off(egret.Event.REMOVED, this.onDispose, this);
                this._res = undefined;
            }
        };
        ParticleClip.prototype.resume = function () {
            if (!this._playing && this._data) {
                this._playing = true;
                this._data.start();
            }
        };
        ParticleClip.prototype.stop = function (clear) {
            if (this._playing && this._data) {
                this._playing = false;
                this._data.stop(clear);
            }
        };
        ParticleClip.prototype.onAddedToStage = function (event) {
            if (this._res) {
                this._res.addUsing();
                if (this._res.status == 2 /* loaded */) {
                    this.onLoaded();
                }
                if (this._autoStop) {
                    this.resume();
                }
            }
            else if (this._url) {
                this.$play();
            }
        };
        ParticleClip.prototype.onRemovedFromStage = function (event) {
            if (this._res) {
                this._res.subtractUsing();
            }
            if (this._autoStop) {
                this.stop();
            }
        };
        ParticleClip.prototype.dispose = function () {
            if (this._data) {
                this._data.removeSelf();
                this._data.stop(true);
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
        return ParticleClip;
    }(egret.DisplayObjectContainer));
    game.ParticleClip = ParticleClip;
    __reflect(ParticleClip.prototype, "game.ParticleClip", ["game.IDispose"]);
})(game || (game = {}));
