var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var game;
(function (game) {
    /**
     * 模块资源
     * @author wizardc
     */
    var ModuleRes = (function () {
        function ModuleRes() {
            this._using = false;
        }
        Object.defineProperty(ModuleRes.prototype, "moduleID", {
            get: function () {
                return this._moduleID;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ModuleRes.prototype, "using", {
            get: function () {
                return this._using;
            },
            set: function (value) {
                this._using = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ModuleRes.prototype, "lastUseTime", {
            get: function () {
                return this._lastUseTime;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ModuleRes.prototype, "liveTime", {
            get: function () {
                return this._liveTime;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ModuleRes.prototype, "view", {
            get: function () {
                return this._view;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ModuleRes.prototype, "resNames", {
            get: function () {
                return this._resNames;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ModuleRes.prototype, "resPolicy", {
            get: function () {
                return this._resPolicy;
            },
            enumerable: true,
            configurable: true
        });
        ModuleRes.prototype.init = function (moduleID, viewClass, liveTime) {
            this._moduleID = moduleID;
            this._view = new viewClass();
            var resList = this._view.constructor.__releaseResList;
            if (resList && resList.length > 0) {
                this._resNames = resList.concat();
            }
            this._resPolicy = this._view.constructor.__resPolicy || 0 /* never */;
            if (this._resPolicy == 1 /* smart */) {
                this._liveTime = liveTime;
            }
        };
        ModuleRes.prototype.recordLastUseTime = function () {
            this._lastUseTime = game.GameTime.timer;
        };
        ModuleRes.prototype.dispose = function () {
            if (this._resPolicy != 0 /* never */) {
                this._view = undefined;
            }
        };
        ModuleRes.prototype.destroy = function () {
            if (this._resPolicy == 0 /* never */) {
                return;
            }
            if (this._resNames) {
                for (var i = 0; i < this._resNames.length; i++) {
                    if (RES.destroyRes(this._resNames[i])) {
                        this._resNames.splice(i, 1);
                        --i;
                    }
                }
            }
            return !this._resNames || this._resNames.length == 0;
        };
        return ModuleRes;
    }());
    game.ModuleRes = ModuleRes;
    __reflect(ModuleRes.prototype, "game.ModuleRes");
})(game || (game = {}));
