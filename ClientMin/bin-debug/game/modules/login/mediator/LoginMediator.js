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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var game;
(function (game) {
    /**
     * 登录 中介
     */
    var LoginMediator = (function (_super) {
        __extends(LoginMediator, _super);
        function LoginMediator() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        LoginMediator.prototype.onRegister = function () {
            _super.prototype.onRegister.call(this);
            this._view._initView();
        };
        LoginMediator.prototype.clickLogin = function (e) {
            var id = this._view.text_username.text;
            if (id === '') {
                game.$facade.addModule(game.ModuleID.msg, undefined, '请输入登录信息');
                return;
            }
            game.$userData.account.userid = id;
            this.model.reqLogin();
        };
        __decorate([
            game.InjectProxy(1 /* login */)
        ], LoginMediator.prototype, "model", void 0);
        __decorate([
            game.InterestEvent(0 /* clickLogin */)
        ], LoginMediator.prototype, "clickLogin", null);
        return LoginMediator;
    }(game.MediatorBase));
    game.LoginMediator = LoginMediator;
    __reflect(LoginMediator.prototype, "game.LoginMediator");
})(game || (game = {}));
