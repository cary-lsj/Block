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
     * 一个简单的命令类
     * @author wizardc
     */
    var Command = (function (_super) {
        __extends(Command, _super);
        function Command() {
            var _this = _super.call(this) || this;
            _this._facade = game.Facade.instance;
            return _this;
        }
        return Command;
    }(game.Notifier));
    game.Command = Command;
    __reflect(Command.prototype, "game.Command", ["game.ICommand"]);
    /**
     * 对于会重复使用的命令可以开启缓存, 避免频繁的创建及销毁
     */
    function CacheCommand(constructor) {
        constructor.__cacheCommand = true;
    }
    game.CacheCommand = CacheCommand;
})(game || (game = {}));
