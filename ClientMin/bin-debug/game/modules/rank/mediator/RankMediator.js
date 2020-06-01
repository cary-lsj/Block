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
     * 排行榜中介
     */
    var RankMediator = (function (_super) {
        __extends(RankMediator, _super);
        function RankMediator() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        RankMediator.prototype.onRegister = function () {
            _super.prototype.onRegister.call(this);
            this.sendRankReq();
        };
        /** 关闭 */
        RankMediator.prototype.click = function (e) {
            game.SoundManager.getInstance().PlaySound(game.SoundManager.mClickAudioUrl);
            // SoundManager.getInstance().playClick();
            this._view.goOne.play(0);
            setTimeout(function () {
                game.$facade.removeModule(game.ModuleID.rank);
            }, 250);
        };
        RankMediator.prototype.sendRankReq = function () {
            this.model.reqRank();
        };
        /** 监听 排行榜数据改变 */
        RankMediator.prototype.rankUpdate = function () {
            var data = this.model.getDataArr();
            //展示排行榜
            this._view.visible = true;
            this._view.comOne.play(0);
            this._view.refreshList(data);
        };
        __decorate([
            game.InjectProxy(4 /* rank */)
        ], RankMediator.prototype, "model", void 0);
        __decorate([
            game.InterestEvent(0 /* click */)
        ], RankMediator.prototype, "click", null);
        __decorate([
            game.InterestNotify(13 /* rankUpdate */)
        ], RankMediator.prototype, "rankUpdate", null);
        return RankMediator;
    }(game.MediatorBase));
    game.RankMediator = RankMediator;
    __reflect(RankMediator.prototype, "game.RankMediator");
})(game || (game = {}));
