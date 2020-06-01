var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var game;
(function (game) {
    /**
     * 资源加载管理基类
     * @author wizardc
     */
    var ResMgrBase = (function () {
        function ResMgrBase() {
            this._checkTime = 10000;
            this._resMap = {};
        }
        Object.defineProperty(ResMgrBase.prototype, "checkTime", {
            get: function () {
                return this._checkTime;
            },
            set: function (value) {
                this._checkTime = value;
            },
            enumerable: true,
            configurable: true
        });
        ResMgrBase.prototype.clearRes = function (now) {
            for (var url in this._resMap) {
                var res = this._resMap[url];
                if (res.status == 2 /* loaded */ && res.usingCount <= 0 && res.lastUseTime + res.liveTime <= now) {
                    res.destroy();
                    res.recycle();
                    delete this._resMap[url];
                }
            }
        };
        ResMgrBase.prototype.forceClear = function () {
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
        ResMgrBase.prototype.destroyRes = function (url) {
            var res = this._resMap[url];
            if (!res || res.status != 2 /* loaded */ || res.usingCount > 0) {
                return false;
            }
            var result = res.destroy();
            res.recycle();
            delete this._resMap[url];
            return result;
        };
        return ResMgrBase;
    }());
    game.ResMgrBase = ResMgrBase;
    __reflect(ResMgrBase.prototype, "game.ResMgrBase");
})(game || (game = {}));
