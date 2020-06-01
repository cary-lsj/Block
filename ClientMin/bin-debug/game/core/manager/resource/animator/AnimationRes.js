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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var game;
(function (game) {
    /**
     * 动画资源
     * @author wizardc
     */
    var AnimationRes = (function (_super) {
        __extends(AnimationRes, _super);
        function AnimationRes() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this._status = 0 /* noload */;
            _this._usingCount = 0;
            _this._data = new game.AnimationData();
            return _this;
        }
        Object.defineProperty(AnimationRes.prototype, "url", {
            get: function () {
                return this._jsonUrl;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AnimationRes.prototype, "status", {
            get: function () {
                return this._status;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AnimationRes.prototype, "usingCount", {
            get: function () {
                return this._usingCount;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AnimationRes.prototype, "lastUseTime", {
            get: function () {
                return this._lastUseTime;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AnimationRes.prototype, "liveTime", {
            get: function () {
                return this._liveTime;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AnimationRes.prototype, "data", {
            get: function () {
                return this._data;
            },
            enumerable: true,
            configurable: true
        });
        AnimationRes.prototype.init = function (url, liveTime) {
            this._inConfig = RES.hasRes(url + "_json");
            if (this._inConfig) {
                this._jsonUrl = url + "_json";
                this._pngUrl = url + "_png";
            }
            else {
                this._jsonUrl = game.RESVersion.getRealUrl(url + ".json");
                this._pngUrl = game.RESVersion.getRealUrl(url + ".png");
            }
            this._liveTime = liveTime;
        };
        AnimationRes.prototype.addUsing = function () {
            ++this._usingCount;
        };
        AnimationRes.prototype.subtractUsing = function () {
            --this._usingCount;
            if (this._usingCount <= 0) {
                this._lastUseTime = game.GameTime.timer;
            }
            if (true) {
                if (this._usingCount < 0) {
                    console.trace("\u8D44\u6E90\"" + this._jsonUrl + "\"\u4F7F\u7528\u6B21\u6570\u7EDF\u8BA1\u5F02\u5E38\uFF0C\u5F53\u524D\u4E3A " + this._usingCount);
                }
            }
        };
        AnimationRes.prototype.load = function () {
            if (this._status == 1 /* loading */) {
                return;
            }
            if (this._status == 0 /* noload */ || this._status == 3 /* destroy */) {
                this._status = 1 /* loading */;
                if (this._inConfig) {
                    game.RESP.getResAsync(this._jsonUrl, this.onJsonLoaded, this, 5 /* avatar */);
                }
                else {
                    game.RESP.getResByUrl(this._jsonUrl, this.onJsonLoaded, this, RES.ResourceItem.TYPE_JSON, 5 /* avatar */);
                }
            }
        };
        AnimationRes.prototype.onJsonLoaded = function (data, url) {
            if (!data) {
                console.error("\"" + url + "\"\u52A0\u8F7D\u5931\u8D25\uFF01");
                return;
            }
            this._data.data = data;
            if (this._inConfig) {
                game.RESP.getResAsync(this._pngUrl, this.onImageLoaded, this, 5 /* avatar */);
            }
            else {
                game.RESP.getResByUrl(this._pngUrl, this.onImageLoaded, this, RES.ResourceItem.TYPE_IMAGE, 5 /* avatar */);
            }
        };
        AnimationRes.prototype.onImageLoaded = function (data, url) {
            if (!data) {
                console.error("\"" + url + "\"\u52A0\u8F7D\u5931\u8D25\uFF01");
                return;
            }
            this._status = 2 /* loaded */;
            this._data.texture = data;
            this._data.parse();
            this.dispatch(egret.Event.COMPLETE);
        };
        AnimationRes.prototype.destroy = function () {
            if (true) {
                if (this._usingCount > 0) {
                    console.warn("\u8D44\u6E90\"" + this._jsonUrl + "\"\u4F7F\u7528\u6B21\u6570\u4E3A " + this._usingCount + " \u65F6\u5C31\u88AB\u9500\u6BC1\u4E86\uFF01");
                }
            }
            if (this._status == 2 /* loaded */) {
                this._status = 3 /* destroy */;
                this._data.clear();
                RES.destroyRes(this._jsonUrl);
                RES.destroyRes(this._pngUrl);
                return true;
            }
            return false;
        };
        AnimationRes.prototype.dispose = function () {
            this._usingCount = 0;
            this._status = 0 /* noload */;
            this._inConfig = undefined;
            this._jsonUrl = undefined;
            this._pngUrl = undefined;
            this._data.clear();
        };
        AnimationRes.prototype.onRecycle = function () {
            this.dispose();
        };
        AnimationRes = __decorate([
            game.DeployPool(500)
        ], AnimationRes);
        return AnimationRes;
    }(egret.EventDispatcher));
    game.AnimationRes = AnimationRes;
    __reflect(AnimationRes.prototype, "game.AnimationRes", ["game.IRes", "game.IDestroy", "game.IDispose", "game.ICacheable"]);
})(game || (game = {}));
