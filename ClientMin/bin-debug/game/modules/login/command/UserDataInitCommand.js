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
     * 用户数据初始化命令
     * @author wizardc
     */
    var UserDataInitCommand = (function (_super) {
        __extends(UserDataInitCommand, _super);
        function UserDataInitCommand() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        UserDataInitCommand.prototype.execute = function (notifyName, data) {
            game.GameTime.setServerTime(data.serverTime);
        };
        return UserDataInitCommand;
    }(game.Command));
    game.UserDataInitCommand = UserDataInitCommand;
    __reflect(UserDataInitCommand.prototype, "game.UserDataInitCommand");
})(game || (game = {}));
