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
     * 多个命令顺序执行的命令列表类
     * @author wizardc
     */
    var CommandQueue = (function (_super) {
        __extends(CommandQueue, _super);
        function CommandQueue() {
            var _this = _super.call(this) || this;
            _this._subCommands = [];
            _this.initializeCommands();
            return _this;
        }
        CommandQueue.prototype.addSubCommand = function (commandClass) {
            this._subCommands.push(commandClass);
        };
        CommandQueue.prototype.execute = function (notifyName) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            while (this._subCommands.length != 0) {
                var commandClass = this._subCommands.shift();
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
        };
        return CommandQueue;
    }(game.Command));
    game.CommandQueue = CommandQueue;
    __reflect(CommandQueue.prototype, "game.CommandQueue");
})(game || (game = {}));
