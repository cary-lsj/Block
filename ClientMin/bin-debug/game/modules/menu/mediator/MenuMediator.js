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
     * 菜单中介
     */
    var MenuMediator = (function (_super) {
        __extends(MenuMediator, _super);
        function MenuMediator() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MenuMediator.prototype.onRegister = function () {
            _super.prototype.onRegister.call(this);
            this._view.updateAssets();
        };
        MenuMediator.prototype.clickRank = function (e) {
            // SoundManager.getInstance().playClick();
            game.SoundManager.getInstance().PlaySound(game.SoundManager.mClickAudioUrl);
            this.dispatch(10 /* updatePortStart */, true);
            game.$facade.addModule(game.ModuleID.rank);
        };
        MenuMediator.prototype.clickStart = function (e) {
            // SoundManager.getInstance().playClick();
            game.SoundManager.getInstance().PlaySound(game.SoundManager.mClickAudioUrl);
            game.$facade.addModule(game.ModuleID.port);
        };
        MenuMediator.prototype.clickFight = function (e) {
            // SoundManager.getInstance().playClick();
            game.SoundManager.getInstance().PlaySound(game.SoundManager.mClickAudioUrl);
            game.$facade.addModule(game.ModuleID.room);
        };
        MenuMediator.prototype.clickcontinue = function (e) {
            // SoundManager.getInstance().playClick();
            game.SoundManager.getInstance().PlaySound(game.SoundManager.mClickAudioUrl);
            game.$facade.addModule(game.ModuleID.humor, undefined, 2);
        };
        MenuMediator.prototype.clickShop = function (e) {
            // SoundManager.getInstance().playClick();
            game.SoundManager.getInstance().PlaySound(game.SoundManager.mClickAudioUrl);
            game.$facade.addModule(game.ModuleID.shop);
        };
        MenuMediator.prototype.toolUpdate = function () {
            this._view.updateAssets();
        };
        MenuMediator.prototype.updateUserProperty = function () {
            this._view.updateAssets();
        };
        __decorate([
            game.InjectProxy(9 /* menu */)
        ], MenuMediator.prototype, "_model", void 0);
        __decorate([
            game.InterestEvent(2 /* clickRank */)
        ], MenuMediator.prototype, "clickRank", null);
        __decorate([
            game.InterestEvent(1 /* clickStart */)
        ], MenuMediator.prototype, "clickStart", null);
        __decorate([
            game.InterestEvent(3 /* clickFight */)
        ], MenuMediator.prototype, "clickFight", null);
        __decorate([
            game.InterestEvent(4 /* clickContinue */)
        ], MenuMediator.prototype, "clickcontinue", null);
        __decorate([
            game.InterestEvent(5 /* clickShop */)
        ], MenuMediator.prototype, "clickShop", null);
        __decorate([
            game.InterestNotify(27 /* toolUpdate */)
        ], MenuMediator.prototype, "toolUpdate", null);
        __decorate([
            game.InterestNotify(29 /* updateUserProperty */)
        ], MenuMediator.prototype, "updateUserProperty", null);
        return MenuMediator;
    }(game.MediatorBase));
    game.MenuMediator = MenuMediator;
    __reflect(MenuMediator.prototype, "game.MenuMediator");
})(game || (game = {}));
