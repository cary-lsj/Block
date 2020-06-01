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
     * 游戏模块
     * @author wizardc
     */
    var GameMediator = (function (_super) {
        __extends(GameMediator, _super);
        function GameMediator() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        GameMediator.prototype.onRegister = function () {
            _super.prototype.onRegister.call(this);
            game.ModuleManager.init(this._view);
            game.FullWindowManager.init(this._view.fullWindowLayer);
            game.DialogManager.init(this._view.dialogLayer);
            game.Notice.init(this._view.messageLayer);
        };
        return GameMediator;
    }(game.MediatorBase));
    game.GameMediator = GameMediator;
    __reflect(GameMediator.prototype, "game.GameMediator");
})(game || (game = {}));
