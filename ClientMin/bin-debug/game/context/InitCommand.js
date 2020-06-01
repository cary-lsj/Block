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
     * 命令初始化
     * @author wizardc
     */
    var InitCommand = (function (_super) {
        __extends(InitCommand, _super);
        function InitCommand() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        InitCommand.prototype.execute = function (notifyName) {
            var registerCommand = game.$facade.registerCommand.bind(game.$facade);
            registerCommand(3 /* gameStartup */, game.GameStartupCommand);
        };
        return InitCommand;
    }(game.Command));
    game.InitCommand = InitCommand;
    __reflect(InitCommand.prototype, "game.InitCommand");
})(game || (game = {}));
