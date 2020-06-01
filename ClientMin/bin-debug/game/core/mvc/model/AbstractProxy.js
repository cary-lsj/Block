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
var game;
(function (game) {
    /**
     * 代理基类
     * @author wizardc
     */
    var AbstractProxy = (function (_super) {
        __extends(AbstractProxy, _super);
        function AbstractProxy(name) {
            var _this = _super.call(this) || this;
            _this._facade = game.Facade.instance;
            _this._name = name;
            return _this;
        }
        Object.defineProperty(AbstractProxy.prototype, "name", {
            get: function () {
                return this._name;
            },
            enumerable: true,
            configurable: true
        });
        AbstractProxy.prototype.onRegister = function () {
        };
        AbstractProxy.prototype.onRemove = function () {
        };
        return AbstractProxy;
    }(game.Notifier));
    game.AbstractProxy = AbstractProxy;
    __reflect(AbstractProxy.prototype, "game.AbstractProxy", ["game.IProxy"]);
    function InjectProxy(proxyName) {
        var p = String(proxyName);
        return function (target, propertyKey) {
            if (!target.__injectProxyMap) {
                target.__injectProxyMap = {};
            }
            var map = target.__injectProxyMap;
            if (!map[p]) {
                map[p] = [];
            }
            var list = map[p];
            if (list.indexOf(propertyKey) == -1) {
                list.push(propertyKey);
            }
        };
    }
    game.InjectProxy = InjectProxy;
})(game || (game = {}));
