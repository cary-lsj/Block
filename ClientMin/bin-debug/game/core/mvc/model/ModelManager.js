var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var game;
(function (game) {
    /**
     * 管理程序中使用到的所有代理对象
     * @author wizardc
     */
    var ModelManager = (function () {
        function ModelManager() {
            this._proxyMap = {};
        }
        Object.defineProperty(ModelManager, "instance", {
            get: function () {
                return ModelManager._instance || (ModelManager._instance = new ModelManager());
            },
            enumerable: true,
            configurable: true
        });
        ModelManager.prototype.registerProxy = function (proxy) {
            var p = String(proxy.name);
            if (this.hasProxy(p)) {
                throw new Error("需要注册的代理名称已经存在！");
            }
            this._proxyMap[p] = proxy;
            proxy.onRegister();
        };
        ModelManager.prototype.hasProxy = function (proxyName) {
            return this._proxyMap.hasOwnProperty(String(proxyName));
        };
        ModelManager.prototype.getProxy = function (proxyName) {
            return this._proxyMap[String(proxyName)];
        };
        ModelManager.prototype.removeProxy = function (proxyName) {
            var p = String(proxyName);
            var proxy = this.getProxy(p);
            if (proxy) {
                proxy.onRemove();
                delete this._proxyMap[p];
            }
            return proxy;
        };
        return ModelManager;
    }());
    game.ModelManager = ModelManager;
    __reflect(ModelManager.prototype, "game.ModelManager");
})(game || (game = {}));
