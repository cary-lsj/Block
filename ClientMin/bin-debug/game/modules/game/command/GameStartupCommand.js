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
     * 游戏启动
     * @author wizardc
     */
    var GameStartupCommand = (function (_super) {
        __extends(GameStartupCommand, _super);
        function GameStartupCommand() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        GameStartupCommand.prototype.execute = function (notifyName, mapID) {
        };
        return GameStartupCommand;
    }(game.Command));
    game.GameStartupCommand = GameStartupCommand;
    __reflect(GameStartupCommand.prototype, "game.GameStartupCommand");
})(game || (game = {}));
