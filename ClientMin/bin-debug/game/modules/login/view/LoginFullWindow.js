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
     * 登录界面
     */
    var LoginFullWindow = (function (_super) {
        __extends(LoginFullWindow, _super);
        function LoginFullWindow() {
            return _super.call(this, "gameSkin.LoginSkin") || this;
        }
        LoginFullWindow.prototype.createComponent = function () {
            return undefined;
        };
        LoginFullWindow.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
            this.btn_login.on(egret.TouchEvent.TOUCH_TAP, this.onLoginClick, this);
        };
        LoginFullWindow.prototype.onLoginClick = function () {
            game.SoundManager.getInstance().PlaySound(game.SoundManager.mClickAudioUrl);
            this.dispatch(0 /* clickLogin */, true);
        };
        LoginFullWindow.prototype._initView = function () {
            this.text_username.text = '';
        };
        return LoginFullWindow;
    }(game.FullWindowBase));
    game.LoginFullWindow = LoginFullWindow;
    __reflect(LoginFullWindow.prototype, "game.LoginFullWindow");
})(game || (game = {}));
