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
     * 关卡中介
     */
    var PortMediator = (function (_super) {
        __extends(PortMediator, _super);
        function PortMediator() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        PortMediator.prototype.onRegister = function () {
            _super.prototype.onRegister.call(this);
            this._view.update(game.$userData.portList.portList);
            this._view.bml_starNum.text = game.$userData.portList.starNum;
        };
        PortMediator.prototype.clickSet = function (e) {
            game.SoundManager.getInstance().PlaySound(game.SoundManager.mClickAudioUrl);
            // SoundManager.getInstance().playClick();
            game.$facade.addModule(game.ModuleID.menu);
        };
        PortMediator.prototype.clickStart = function (e) {
            game.SoundManager.getInstance().PlaySound(game.SoundManager.mClickAudioUrl);
            // SoundManager.getInstance().playClick();
            var id = e.data;
            this.gmStart(id);
        };
        PortMediator.prototype.clickExit = function (e) {
            game.SoundManager.getInstance().PlaySound(game.SoundManager.mClickAudioUrl);
            game.$facade.addModule(game.ModuleID.menu);
        };
        PortMediator.prototype.gmStart = function (id) {
            var port = game.$userData.portList.getPort(id);
            var gamePortVO = game.$userData.gamePortVO = new game.GamePortVO();
            gamePortVO.update(port);
            gamePortVO.playProId = id;
            game.$facade.addModule(game.ModuleID.main);
        };
        PortMediator.prototype.updatePortSart = function (e) {
            game.$facade.addModule(game.ModuleID.main);
        };
        __decorate([
            game.InjectProxy(2 /* port */)
        ], PortMediator.prototype, "model", void 0);
        __decorate([
            game.InterestEvent(2 /* clickBack */)
        ], PortMediator.prototype, "clickSet", null);
        __decorate([
            game.InterestEvent(1 /* clickStart */)
        ], PortMediator.prototype, "clickStart", null);
        __decorate([
            game.InterestEvent(4 /* clickExit */)
        ], PortMediator.prototype, "clickExit", null);
        __decorate([
            game.InterestNotify(11 /* updatePortSart */)
        ], PortMediator.prototype, "updatePortSart", null);
        return PortMediator;
    }(game.MediatorBase));
    game.PortMediator = PortMediator;
    __reflect(PortMediator.prototype, "game.PortMediator");
})(game || (game = {}));
