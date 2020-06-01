var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var game;
(function (game) {
    /**
     * 龙骨资源管理
     * @author wizardc
     */
    var DragonBonesResMgr = (function () {
        function DragonBonesResMgr() {
            this._checkTime = 10000;
            this._defaultLiveTime = 10000;
            this._resMap = {};
        }
        Object.defineProperty(DragonBonesResMgr.prototype, "checkTime", {
            get: function () {
                return this._checkTime;
            },
            set: function (value) {
                this._checkTime = value;
            },
            enumerable: true,
            configurable: true
        });
        DragonBonesResMgr.prototype.getRes = function (url, liveTime) {
            if (isNaN(liveTime)) {
                liveTime = this._defaultLiveTime;
            }
            var res;
            if (this._resMap[url]) {
                res = this._resMap[url];
            }
            else {
                res = new game.DragonBonesRes();
                this._resMap[url] = res;
            }
            res.init(url, liveTime);
            return this._resMap[url];
        };
        DragonBonesResMgr.prototype.clearRes = function (now) {
            for (var url in this._resMap) {
                var res = this._resMap[url];
                if (res.status == 2 /* loaded */ && res.usingCount <= 0 && res.lastUseTime + res.liveTime <= now) {
                    res.destroy();
                }
            }
        };
        DragonBonesResMgr.prototype.forceClear = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (!args || args.length == 0) {
                return undefined;
            }
            if (args.length == 1) {
                return this.destroyRes(args[0]);
            }
            var result = [];
            for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
                var url = args_1[_a];
                result.push(this.destroyRes(url));
            }
            return result;
        };
        DragonBonesResMgr.prototype.destroyRes = function (url) {
            var res = this._resMap[url];
            if (!res || res.status != 2 /* loaded */ || res.usingCount > 0) {
                return false;
            }
            var result = res.destroy();
            return result;
        };
        return DragonBonesResMgr;
    }());
    game.DragonBonesResMgr = DragonBonesResMgr;
    __reflect(DragonBonesResMgr.prototype, "game.DragonBonesResMgr");
})(game || (game = {}));
