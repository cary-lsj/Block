var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var game;
(function (game) {
    /**
     * 用户数据管理类
     * @author wizardc
     */
    var UserData = (function () {
        function UserData() {
        }
        Object.defineProperty(UserData, "instance", {
            get: function () {
                return UserData._instance || (UserData._instance = new UserData());
            },
            enumerable: true,
            configurable: true
        });
        return UserData;
    }());
    game.UserData = UserData;
    __reflect(UserData.prototype, "game.UserData");
})(game || (game = {}));
