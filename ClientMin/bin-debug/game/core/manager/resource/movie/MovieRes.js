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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var game;
(function (game) {
    /**
     * 序列帧动画资源
     * @author wizardc
     */
    var MovieRes = (function (_super) {
        __extends(MovieRes, _super);
        function MovieRes() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this._status = 0 /* noload */;
            _this._usingCount = 0;
            return _this;
        }
        Object.defineProperty(MovieRes.prototype, "url", {
            get: function () {
                return this._jsonUrl;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MovieRes.prototype, "status", {
            get: function () {
                return this._status;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MovieRes.prototype, "usingCount", {
            get: function () {
                return this._usingCount;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MovieRes.prototype, "lastUseTime", {
            get: function () {
                return this._lastUseTime;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MovieRes.prototype, "liveTime", {
            get: function () {
                return this._liveTime;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MovieRes.prototype, "data", {
            get: function () {
                var mcdf = new egret.MovieClipDataFactory(this._jsonData, this._imageData);
                return new egret.MovieClip(mcdf.generateMovieClipData(this._url));
            },
            enumerable: true,
            configurable: true
        });
        MovieRes.prototype.init = function (url, liveTime) {
            this._inConfig = RES.hasRes(url + "_json");
            this._url = url;
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
        MovieRes.prototype.addUsing = function () {
            ++this._usingCount;
        };
        MovieRes.prototype.subtractUsing = function () {
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
        MovieRes.prototype.load = function () {
            if (this._status == 1 /* loading */) {
                return;
            }
            if (this._status == 0 /* noload */ || this._status == 3 /* destroy */) {
                this._status = 1 /* loading */;
                this.loadData();
            }
        };
        MovieRes.prototype.loadData = function () {
            return __awaiter(this, void 0, void 0, function () {
                var json, image;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!this._inConfig) return [3 /*break*/, 3];
                            return [4 /*yield*/, game.RESP.getResAsyncAsync(this._jsonUrl, 2 /* effect */)];
                        case 1:
                            json = _a.sent();
                            return [4 /*yield*/, game.RESP.getResAsyncAsync(this._pngUrl, 2 /* effect */)];
                        case 2:
                            image = _a.sent();
                            return [3 /*break*/, 6];
                        case 3: return [4 /*yield*/, game.RESP.getResByUrlAsync(this._jsonUrl, RES.ResourceItem.TYPE_JSON, 2 /* effect */)];
                        case 4:
                            json = _a.sent();
                            return [4 /*yield*/, game.RESP.getResByUrlAsync(this._pngUrl, RES.ResourceItem.TYPE_IMAGE, 2 /* effect */)];
                        case 5:
                            image = _a.sent();
                            _a.label = 6;
                        case 6:
                            this._status = 2 /* loaded */;
                            this._jsonData = json;
                            this._imageData = image;
                            this.dispatch(egret.Event.COMPLETE);
                            return [2 /*return*/];
                    }
                });
            });
        };
        MovieRes.prototype.destroy = function () {
            if (true) {
                if (this._usingCount > 0) {
                    console.warn("\u8D44\u6E90\"" + this._jsonUrl + "\"\u4F7F\u7528\u6B21\u6570\u4E3A " + this._usingCount + " \u65F6\u5C31\u88AB\u9500\u6BC1\u4E86\uFF01");
                }
            }
            if (this._status == 2 /* loaded */) {
                this._status = 3 /* destroy */;
                this._jsonData = undefined;
                this._imageData = undefined;
                RES.destroyRes(this._jsonUrl);
                RES.destroyRes(this._pngUrl);
                this.dispatch(egret.Event.REMOVED);
                return true;
            }
            return false;
        };
        MovieRes.prototype.dispose = function () {
            this._usingCount = 0;
            this._status = 0 /* noload */;
            this._inConfig = undefined;
            this._jsonUrl = undefined;
            this._pngUrl = undefined;
            this._jsonData = undefined;
            this._imageData = undefined;
        };
        MovieRes.prototype.onRecycle = function () {
            this.dispose();
        };
        return MovieRes;
    }(egret.EventDispatcher));
    game.MovieRes = MovieRes;
    __reflect(MovieRes.prototype, "game.MovieRes", ["game.IRes", "game.IDestroy"]);
})(game || (game = {}));
