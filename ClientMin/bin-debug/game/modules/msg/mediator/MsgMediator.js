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
     * 胜利中介
     */
    var MsgMediator = (function (_super) {
        __extends(MsgMediator, _super);
        function MsgMediator() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MsgMediator.prototype.onRegister = function () {
            _super.prototype.onRegister.call(this);
        };
        MsgMediator.prototype.setModuleData = function (msg) {
            console.log(msg);
            this._view.msg_txt.text = msg;
        };
        MsgMediator.prototype.clickSet = function (e) {
            game.SoundManager.getInstance().PlaySound(game.SoundManager.mClickAudioUrl);
            game.$facade.removeModule(game.ModuleID.msg);
        };
        __decorate([
            game.InterestEvent(2 /* clickBack */)
        ], MsgMediator.prototype, "clickSet", null);
        return MsgMediator;
    }(game.MediatorBase));
    game.MsgMediator = MsgMediator;
    __reflect(MsgMediator.prototype, "game.MsgMediator");
})(game || (game = {}));
