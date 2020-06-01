var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var game;
(function (game) {
    /**
     * 模块资源管理
     * @author wizardc
     */
    var ModuleResMgr = (function () {
        function ModuleResMgr() {
            this._checkTime = 10000;
            this._smartLiveTime = 60000;
            this._resMap = {};
        }
        Object.defineProperty(ModuleResMgr.prototype, "checkTime", {
            get: function () {
                return this._checkTime;
            },
            set: function (value) {
                this._checkTime = value;
            },
            enumerable: true,
            configurable: true
        });
        ModuleResMgr.prototype.getRes = function (moduleID, viewClass) {
            if (this._resMap[moduleID]) {
                var res_1 = this._resMap[moduleID];
                if (res_1.resPolicy == 0 /* never */ || (res_1.resPolicy == 1 /* smart */ && res_1.view)) {
                    res_1.using = true;
                    return res_1.view;
                }
            }
            var res = new game.ModuleRes();
            res.using = true;
            res.init(moduleID, viewClass, this._smartLiveTime);
            this._resMap[moduleID] = res;
            return res.view;
        };
        ModuleResMgr.prototype.putRes = function (moduleID) {
            if (this._resMap[moduleID]) {
                var res = this._resMap[moduleID];
                res.using = false;
                if (res.resPolicy == 1 /* smart */) {
                    res.recordLastUseTime();
                }
                else if (res.resPolicy == 2 /* immediate */) {
                    res.dispose();
                    if (res.destroy()) {
                        delete this._resMap[moduleID];
                    }
                }
            }
        };
        ModuleResMgr.prototype.clearRes = function (now) {
            for (var url in this._resMap) {
                var res = this._resMap[url];
                if (res.using || res.resPolicy == 0 /* never */) {
                    continue;
                }
                if (res.resPolicy == 1 /* smart */) {
                    if (res.lastUseTime + res.liveTime <= now) {
                        res.dispose();
                    }
                    else {
                        continue;
                    }
                }
                if (res.destroy()) {
                    delete this._resMap[res.moduleID];
                }
            }
        };
        return ModuleResMgr;
    }());
    game.ModuleResMgr = ModuleResMgr;
    __reflect(ModuleResMgr.prototype, "game.ModuleResMgr");
})(game || (game = {}));
