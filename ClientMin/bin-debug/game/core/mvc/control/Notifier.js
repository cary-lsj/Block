var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var game;
(function (game) {
    /**
     * 简单的消息发送对象
     * @author wizardc
     */
    var Notifier = (function () {
        function Notifier() {
            var injectProxyMap = this.__injectProxyMap;
            for (var proxyName in injectProxyMap) {
                var propertyKeys = injectProxyMap[proxyName];
                for (var i = 0, len = propertyKeys.length; i < len; i++) {
                    var propertyKey = propertyKeys[i];
                    this[propertyKey] = game.ModelManager.instance.getProxy(proxyName);
                }
            }
        }
        Notifier.prototype.dispatch = function (notifyName) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            (_a = game.Controller.instance).executeCommand.apply(_a, [notifyName].concat(args));
            (_b = game.Provider.instance).dispatch.apply(_b, [notifyName].concat(args));
            var _a, _b;
        };
        return Notifier;
    }());
    game.Notifier = Notifier;
    __reflect(Notifier.prototype, "game.Notifier", ["game.INotifier"]);
})(game || (game = {}));
