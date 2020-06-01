var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 资源版本控制管理器
 * @author wizardc
 */
var game;
(function (game) {
    var RESVersion;
    (function (RESVersion) {
        function init(data) {
            impl.init(data);
        }
        RESVersion.init = init;
        function getRealUrl(url) {
            return impl.getRealUrl(url);
        }
        RESVersion.getRealUrl = getRealUrl;
        var Impl = (function () {
            function Impl() {
            }
            Impl.prototype.init = function (data) {
                this._map = data;
            };
            Impl.prototype.getRealUrl = function (url) {
                if (this._map[url]) {
                    return this._map[url];
                }
                return url;
            };
            return Impl;
        }());
        __reflect(Impl.prototype, "Impl");
        var impl = new Impl();
    })(RESVersion = game.RESVersion || (game.RESVersion = {}));
})(game || (game = {}));
