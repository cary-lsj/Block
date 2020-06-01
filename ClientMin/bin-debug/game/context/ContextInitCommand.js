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
     * 上下文初始化
     * @author wizardc
     */
    var ContextInitCommand = (function (_super) {
        __extends(ContextInitCommand, _super);
        function ContextInitCommand() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ContextInitCommand.prototype.initializeCommands = function () {
            game.$facade.removeCommand(2 /* contextInit */);
            this.addSubCommand(game.InitCommand);
            this.addSubCommand(game.InitModel);
            this.addSubCommand(game.InitView);
            this.addSubCommand(game.GamePreloadCommand);
        };
        return ContextInitCommand;
    }(game.CommandQueue));
    game.ContextInitCommand = ContextInitCommand;
    __reflect(ContextInitCommand.prototype, "game.ContextInitCommand");
})(game || (game = {}));
