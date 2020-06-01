var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 配置管理器
 * @author wizardc
 */
var game;
(function (game) {
    var ConfigManager;
    (function (ConfigManager) {
        function init(data) {
            impl.init(data);
        }
        ConfigManager.init = init;
        function getMoodInfo(name) {
            return impl.getMoodInfo(name);
        }
        ConfigManager.getMoodInfo = getMoodInfo;
        var Impl = (function () {
            function Impl() {
                this._moodData = {};
                this._mapData = {};
            }
            Impl.prototype.getMoodInfo = function (name) {
                return this._moodData[name];
            };
            Impl.prototype.init = function (data) {
                this._moodData = data["mood"];
            };
            return Impl;
        }());
        __reflect(Impl.prototype, "Impl");
        var impl = new Impl();
    })(ConfigManager = game.ConfigManager || (game.ConfigManager = {}));
})(game || (game = {}));
