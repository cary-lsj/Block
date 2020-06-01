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
     * 模型初始化
     * @author wizardc
     */
    var InitModel = (function (_super) {
        __extends(InitModel, _super);
        function InitModel() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        InitModel.prototype.execute = function (notifyName) {
            var registerProxy = game.$facade.registerProxy.bind(game.$facade);
            registerProxy(new game.TestProxy());
            registerProxy(new game.LoginProxy());
            registerProxy(new game.PortProxy());
            registerProxy(new game.RankProxy());
            registerProxy(new game.WinProxy());
            registerProxy(new game.MainProxy());
            registerProxy(new game.RoomProxy());
            registerProxy(new game.MenuProxy());
            registerProxy(new game.PkMainproxy());
            registerProxy(new game.ShopProxy());
            registerProxy(new game.PKWinproxy());
        };
        return InitModel;
    }(game.Command));
    game.InitModel = InitModel;
    __reflect(InitModel.prototype, "game.InitModel");
})(game || (game = {}));
