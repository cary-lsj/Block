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
     * 龙骨资源
     * @author wizardc
     */
    var DragonBonesRes = (function (_super) {
        __extends(DragonBonesRes, _super);
        function DragonBonesRes() {
            var _this = _super.call(this) || this;
            _this._status = 0 /* noload */;
            _this._usingCount = 0;
            _this._hasBonesData = false;
            _this._armatureList = [];
            return _this;
        }
        Object.defineProperty(DragonBonesRes.prototype, "url", {
            get: function () {
                return this._dataUrl;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DragonBonesRes.prototype, "status", {
            get: function () {
                return this._status;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DragonBonesRes.prototype, "usingCount", {
            get: function () {
                return this._usingCount;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DragonBonesRes.prototype, "lastUseTime", {
            get: function () {
                return this._lastUseTime;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DragonBonesRes.prototype, "liveTime", {
            get: function () {
                return this._liveTime;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DragonBonesRes.prototype, "data", {
            get: function () {
                return this._data;
            },
            enumerable: true,
            configurable: true
        });
        DragonBonesRes.prototype.init = function (url, liveTime) {
            this._inConfig = RES.hasRes(url + "_ske_dbbin");
            if (this._inConfig) {
                this._dataUrl = url + "_ske_dbbin";
                this._texDataUrl = url + "_tex_json";
                this._texPngUrl = url + "_tex_png";
            }
            else {
                this._dataUrl = game.RESVersion.getRealUrl(url + "_ske.dbbin");
                this._texDataUrl = game.RESVersion.getRealUrl(url + "_tex.json");
                this._texPngUrl = game.RESVersion.getRealUrl(url + "_tex.png");
            }
            this._liveTime = liveTime;
        };
        DragonBonesRes.prototype.addUsing = function () {
            ++this._usingCount;
        };
        DragonBonesRes.prototype.subtractUsing = function () {
            --this._usingCount;
            if (this._usingCount <= 0) {
                this._lastUseTime = game.GameTime.timer;
            }
            if (true) {
                if (this._usingCount < 0) {
                    console.trace("\u8D44\u6E90\"" + this._dataUrl + "\"\u4F7F\u7528\u6B21\u6570\u7EDF\u8BA1\u5F02\u5E38\uFF0C\u5F53\u524D\u4E3A " + this._usingCount);
                }
            }
        };
        DragonBonesRes.prototype.load = function () {
            if (this._status == 1 /* loading */) {
                return;
            }
            if (this._status == 0 /* noload */ || this._status == 3 /* destroy */) {
                this._status = 1 /* loading */;
                if (this._hasBonesData) {
                    this.loadTexture();
                }
                else {
                    this.loadData();
                }
            }
        };
        DragonBonesRes.prototype.loadData = function () {
            if (this._inConfig) {
                game.RESP.getResAsync(this._dataUrl, this.onDataLoaded, this, 6 /* ui */);
            }
            else {
                game.RESP.getResByUrl(this._dataUrl, this.onDataLoaded, this, RES.ResourceItem.TYPE_JSON, 6 /* ui */);
            }
        };
        DragonBonesRes.prototype.onDataLoaded = function (data, url) {
            if (!data) {
                console.error("\"" + url + "\"\u52A0\u8F7D\u5931\u8D25\uFF01");
                return;
            }
            this._hasBonesData = true;
            this._data = new dragonBones.EgretFactory();
            this._data.parseDragonBonesData(data);
            this.loadTexture();
        };
        DragonBonesRes.prototype.loadTexture = function () {
            return __awaiter(this, void 0, void 0, function () {
                var json, image;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!this._inConfig) return [3 /*break*/, 3];
                            return [4 /*yield*/, game.RESP.getResAsyncAsync(this._texDataUrl, 6 /* ui */)];
                        case 1:
                            json = _a.sent();
                            return [4 /*yield*/, game.RESP.getResAsyncAsync(this._texPngUrl, 6 /* ui */)];
                        case 2:
                            image = _a.sent();
                            return [3 /*break*/, 6];
                        case 3: return [4 /*yield*/, game.RESP.getResByUrlAsync(this._texDataUrl, RES.ResourceItem.TYPE_JSON, 6 /* ui */)];
                        case 4:
                            json = _a.sent();
                            return [4 /*yield*/, game.RESP.getResByUrlAsync(this._texPngUrl, RES.ResourceItem.TYPE_IMAGE, 6 /* ui */)];
                        case 5:
                            image = _a.sent();
                            _a.label = 6;
                        case 6:
                            this._status = 2 /* loaded */;
                            this._atlasName = this._data.parseTextureAtlasData(json, image).name;
                            this.dispatch(egret.Event.COMPLETE);
                            return [2 /*return*/];
                    }
                });
            });
        };
        DragonBonesRes.prototype.takeArmatureDisplay = function (armatureName) {
            if (this._status == 2 /* loaded */) {
                var armature = this._data.buildArmatureDisplay(armatureName);
                this._armatureList.push(armature);
                return armature;
            }
            return undefined;
        };
        DragonBonesRes.prototype.disposeArmatureDisplay = function (armatureDisplay) {
            this._armatureList.remove(armatureDisplay);
            armatureDisplay.removeSelf();
            armatureDisplay.dispose();
        };
        DragonBonesRes.prototype.destroy = function () {
            if (true) {
                if (this._usingCount > 0) {
                    console.warn("\u8D44\u6E90\"" + this._dataUrl + "\"\u4F7F\u7528\u6B21\u6570\u4E3A " + this._usingCount + " \u65F6\u5C31\u88AB\u9500\u6BC1\u4E86\uFF01");
                }
            }
            if (this._status == 2 /* loaded */) {
                this._status = 3 /* destroy */;
                for (var _i = 0, _a = this._armatureList; _i < _a.length; _i++) {
                    var armature = _a[_i];
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
        };
        return DragonBonesRes;
    }(egret.EventDispatcher));
    game.DragonBonesRes = DragonBonesRes;
    __reflect(DragonBonesRes.prototype, "game.DragonBonesRes", ["game.IRes", "game.IDestroy"]);
})(game || (game = {}));
