var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var game;
(function (game) {
    /**
     * 全局配置
     * @author wizardc
     */
    var GlobalConfig = (function () {
        function GlobalConfig() {
        }
        Object.defineProperty(GlobalConfig, "useFilter", {
            get: function () {
                if (egret.Capabilities.renderMode == "canvas") {
                    return false;
                }
                return this._useFilter;
            },
            set: function (value) {
                this._useFilter = value;
            },
            enumerable: true,
            configurable: true
        });
        GlobalConfig._useFilter = true;
        return GlobalConfig;
    }());
    game.GlobalConfig = GlobalConfig;
    __reflect(GlobalConfig.prototype, "game.GlobalConfig");
})(game || (game = {}));
