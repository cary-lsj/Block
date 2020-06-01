var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var game;
(function (game) {
    /**
     * 全局数据
     * @author wizardc
     */
    var GlobalInfo = (function () {
        function GlobalInfo() {
        }
        Object.defineProperty(GlobalInfo, "account", {
            get: function () {
                return this._account;
            },
            enumerable: true,
            configurable: true
        });
        GlobalInfo.init = function () {
        };
        GlobalInfo.initUserinfo = function (info) {
            js_userInfo = info;
        };
        GlobalInfo.initAccount = function (data) {
            var userdata = game.$userData.account = new game.AccountVO();
            userdata.userid = this._account = data;
        };
        return GlobalInfo;
    }());
    game.GlobalInfo = GlobalInfo;
    __reflect(GlobalInfo.prototype, "game.GlobalInfo");
})(game || (game = {}));
