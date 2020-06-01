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
    var WinMediator = (function (_super) {
        __extends(WinMediator, _super);
        function WinMediator() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.seeAdFlage = false;
            return _this;
        }
        WinMediator.prototype.onRegister = function () {
            _super.prototype.onRegister.call(this);
            this.resetStar();
            this.updatePortSart();
        };
        /** 监听 关闭按钮 */
        WinMediator.prototype.clickClose = function (e) {
            this._view.goOne.play(0);
            setTimeout(function () {
                game.$facade.removeModule(game.ModuleID.win);
            }, 250);
        };
        /** 监听 下一关按钮 */
        WinMediator.prototype.clickNext = function (e) {
            game.$facade.removeModule(game.ModuleID.win);
            var portId = game.$userData.gamePortVO.playProId;
            if (portId < game.$userData.portList.portList.length) {
                game.$facade.dispatch(15 /* gameNext */);
            }
        };
        /** 监听 再来一次按钮 */
        WinMediator.prototype.clickAgain = function (e) {
            // console.log('clickAgain');
            game.$facade.removeModule(game.ModuleID.win);
            game.$facade.dispatch(14 /* gameAgain */);
        };
        /** 监听 排行榜按钮 */
        WinMediator.prototype.clickRank = function (e) {
            // console.log('clickRank');
            game.$facade.addModule(game.ModuleID.rank);
        };
        /** 监听 看广告按钮 */
        WinMediator.prototype.clickAd = function (e) {
            // console.log('clickAd');
            if (!this.seeAdFlage) {
                this.model.senSeeAd();
                this.seeAdFlage = true;
            }
            else {
                console.log('请进行下一关');
            }
            // this._view.seeAd.play(0);
        };
        WinMediator.prototype.resetStar = function () {
            this._view.image0.alpha = this._view.image1.alpha = this._view.image2.alpha = 0;
            this._view.image0.x = this._view.image1.x = this._view.image2.x = 246;
            this._view.image0.y = this._view.image1.y = this._view.image2.y = 211;
        };
        /** 监听 关卡星星数据 */
        WinMediator.prototype.updatePortSart = function () {
            this.seeAdFlage = false;
            var portId = game.$userData.gamePortVO.playProId;
            var port = game.$userData.portList.getPort(portId);
            var StarNum = port.starNum;
            this._view.refreshViewData(StarNum);
            this._view.animationPlay(this._view);
        };
        __decorate([
            game.InjectProxy(3 /* win */)
        ], WinMediator.prototype, "model", void 0);
        __decorate([
            game.InterestEvent(1 /* clickClose */)
        ], WinMediator.prototype, "clickClose", null);
        __decorate([
            game.InterestEvent(2 /* clickNext */)
        ], WinMediator.prototype, "clickNext", null);
        __decorate([
            game.InterestEvent(3 /* clickAgain */)
        ], WinMediator.prototype, "clickAgain", null);
        __decorate([
            game.InterestEvent(4 /* clickRank */)
        ], WinMediator.prototype, "clickRank", null);
        __decorate([
            game.InterestEvent(6 /* clickAd */)
        ], WinMediator.prototype, "clickAd", null);
        __decorate([
            game.InterestNotify(11 /* updatePortSart */)
        ], WinMediator.prototype, "updatePortSart", null);
        return WinMediator;
    }(game.MediatorBase));
    game.WinMediator = WinMediator;
    __reflect(WinMediator.prototype, "game.WinMediator");
})(game || (game = {}));
