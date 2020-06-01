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
    var PkLoseMediator = (function (_super) {
        __extends(PkLoseMediator, _super);
        function PkLoseMediator() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        PkLoseMediator.prototype.clickNext = function (e) {
            game.$facade.removeModule(game.ModuleID.win);
            var portId = game.$userData.gamePortVO.playProId;
            if (portId < game.$userData.portList.portList.length) {
                game.$facade.dispatch(15 /* gameNext */);
            }
        };
        __decorate([
            game.InterestEvent(2 /* clickNext */)
        ], PkLoseMediator.prototype, "clickNext", null);
        return PkLoseMediator;
    }(game.MediatorBase));
    game.PkLoseMediator = PkLoseMediator;
    __reflect(PkLoseMediator.prototype, "game.PkLoseMediator");
})(game || (game = {}));
