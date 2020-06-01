var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var game;
(function (game) {
    /**
     * 控制者
     * @author wizardc
     */
    var Controller = (function () {
        function Controller() {
            this._commandMap = {};
        }
        Object.defineProperty(Controller, "instance", {
            get: function () {
                return Controller._instance || (Controller._instance = new Controller());
            },
            enumerable: true,
            configurable: true
        });
        Controller.prototype.registerCommand = function (notifyName, commandClass) {
            var n = String(notifyName);
            if (n && commandClass) {
                if (!this.hasCommand(n)) {
                    this._commandMap[n] = [];
                }
                var list = this._commandMap[n];
                if (list.indexOf(commandClass) == -1) {
                    list.push(commandClass);
                }
            }
        };
        Controller.prototype.hasCommand = function (notifyName) {
            return this._commandMap.hasOwnProperty(String(notifyName));
        };
        Controller.prototype.removeCommand = function (notifyName) {
            var n = String(notifyName);
            if (n && this.hasCommand(n)) {
                delete this._commandMap[n];
            }
        };
        Controller.prototype.executeCommand = function (notifyName) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            var n = String(notifyName);
            if (this.hasCommand(n)) {
                var list = this._commandMap[n];
                for (var key in list) {
                    var commandClass = list[key];
                    if (commandClass.prototype.constructor.__cacheCommand) {
                        var commandInstance = game.recyclable(commandClass);
                        commandInstance.execute.apply(commandInstance, [notifyName].concat(args));
                        commandInstance.recycle();
                    }
                    else {
                        var commandInstance = new commandClass();
                        commandInstance.execute.apply(commandInstance, [notifyName].concat(args));
                    }
                }
            }
        };
        return Controller;
    }());
    game.Controller = Controller;
    __reflect(Controller.prototype, "game.Controller");
})(game || (game = {}));
