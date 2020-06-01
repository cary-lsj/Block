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
     * 登录时需要请求的方法
     * @author wizardc
     */
    var LoginRequests = (function (_super) {
        __extends(LoginRequests, _super);
        function LoginRequests() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        LoginRequests.prototype.start = function () {
            this._list = [];
            this.requestOnce();
        };
        LoginRequests.prototype.requestOnce = function () {
            if (this._list.length > 0) {
                var func = this._list.shift();
                func.call(this);
                egret.callLater(this.requestOnce, this);
            }
        };
        return LoginRequests;
    }(game.Notifier));
    game.LoginRequests = LoginRequests;
    __reflect(LoginRequests.prototype, "game.LoginRequests");
})(game || (game = {}));
