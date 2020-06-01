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
     * 广告 中介
     */
    var AdMediator = (function (_super) {
        __extends(AdMediator, _super);
        function AdMediator() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        AdMediator.prototype.onRegister = function () {
            _super.prototype.onRegister.call(this);
        };
        AdMediator.prototype.click = function (e) {
            game.SoundManager.getInstance().PlaySound(game.SoundManager.mClickAudioUrl);
            // SoundManager.getInstance().playClick();
            game.$facade.removeModule(game.ModuleID.ad);
        };
        __decorate([
            game.InterestEvent(0 /* click */)
        ], AdMediator.prototype, "click", null);
        return AdMediator;
    }(game.MediatorBase));
    game.AdMediator = AdMediator;
    __reflect(AdMediator.prototype, "game.AdMediator");
})(game || (game = {}));
