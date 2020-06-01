var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var game;
(function (game) {
    /**
     * 代理 MVC 中所有处理方法
     * @author wizardc
     */
    var Facade = (function () {
        function Facade() {
            this._controller = game.Controller.instance;
            this._provider = game.Provider.instance;
            this._modelManager = game.ModelManager.instance;
            this._viewManager = game.ViewManager.instance;
        }
        Object.defineProperty(Facade, "instance", {
            get: function () {
                return Facade._instance || (Facade._instance = new Facade());
            },
            enumerable: true,
            configurable: true
        });
        Facade.prototype.dispatch = function (notifyName) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            (_a = this._controller).executeCommand.apply(_a, [notifyName].concat(args));
            (_b = this._provider).dispatch.apply(_b, [notifyName].concat(args));
            var _a, _b;
        };
        Facade.prototype.registerCommand = function (notifyName, commandClass) {
            this._controller.registerCommand(notifyName, commandClass);
        };
        Facade.prototype.hasCommand = function (notifyName) {
            return this._controller.hasCommand(notifyName);
        };
        Facade.prototype.removeCommand = function (notifyName) {
            this._controller.removeCommand(notifyName);
        };
        Facade.prototype.addListener = function (notifyName, callback, thisObj) {
            this._provider.addListener(notifyName, callback, thisObj);
        };
        Facade.prototype.removeListener = function (notifyName, callback, thisObj) {
            this._provider.removeListener(notifyName, callback, thisObj);
        };
        Facade.prototype.registerProxy = function (proxy) {
            this._modelManager.registerProxy(proxy);
        };
        Facade.prototype.hasProxy = function (proxyName) {
            return this._modelManager.hasProxy(proxyName);
        };
        Facade.prototype.getProxy = function (proxyName) {
            return this._modelManager.getProxy(proxyName);
        };
        Facade.prototype.removeProxy = function (proxyName) {
            return this._modelManager.removeProxy(proxyName);
        };
        Object.defineProperty(Facade.prototype, "contextView", {
            get: function () {
                return this._viewManager.contextView;
            },
            set: function (value) {
                this._viewManager.contextView = value;
            },
            enumerable: true,
            configurable: true
        });
        Facade.prototype.registerMediator = function (viewClass, mediatorClass) {
            this._viewManager.registerMediator(viewClass, mediatorClass);
        };
        Facade.prototype.hasMediator = function (viewClass) {
            return this._viewManager.hasMediator(viewClass);
        };
        Facade.prototype.getMediator = function (viewObject) {
            return this._viewManager.getMediator(viewObject);
        };
        Facade.prototype.removeMediator = function (viewClass, mediatorClass) {
            this._viewManager.removeMediator(viewClass, mediatorClass);
        };
        return Facade;
    }());
    game.Facade = Facade;
    __reflect(Facade.prototype, "game.Facade");
})(game || (game = {}));
