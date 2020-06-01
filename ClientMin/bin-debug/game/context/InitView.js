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
     * 视图初始化
     * @author wizardc
     */
    var InitView = (function (_super) {
        __extends(InitView, _super);
        function InitView() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        InitView.prototype.execute = function (notifyName) {
            game.ViewManager.instance.contextView = game.$stage;
            var registerMediator = game.$facade.registerMediator.bind(game.$facade);
            var registerModule = function (moduleID, viewClass, mediatorClass) {
                registerMediator(viewClass, mediatorClass);
                game.ModuleManager.mapModule(moduleID, viewClass);
            };
            registerMediator(game.GameView, game.GameMediator);
            registerModule(game.ModuleID.scene, game.SceneView, game.SceneMediator);
            registerModule(game.ModuleID.test, game.TestView, game.TestMediator);
            registerModule(game.ModuleID.menu, game.MenuFullWindow, game.MenuMediator);
            registerModule(game.ModuleID.main, game.MainFullWindow, game.MainMediator);
            registerModule(game.ModuleID.port, game.PortFullWindow, game.PortMediator);
            registerMediator(game.SetView, game.SetMediator);
            registerModule(game.ModuleID.win, game.WinDialog, game.WinMediator);
            registerModule(game.ModuleID.rank, game.RankDialog, game.RankMediator);
            registerModule(game.ModuleID.humor, game.HumorDialog, game.HumorMediator);
            registerModule(game.ModuleID.ad, game.AdDialog, game.AdMediator);
            registerModule(game.ModuleID.room, game.RoomFullWindow, game.RoomMediator);
            registerModule(game.ModuleID.pkmain, game.PKMainFullWindow, game.PKMainMediator);
            registerModule(game.ModuleID.pkwin, game.PKWinFullWindow, game.PKWinMediator);
            registerModule(game.ModuleID.pklose, game.PkLoseView, game.PkLoseMediator);
            registerModule(game.ModuleID.shop, game.ShopView, game.ShopMediator);
            registerModule(game.ModuleID.tool, game.ToolView, game.ToolMediator);
            registerModule(game.ModuleID.login, game.LoginFullWindow, game.LoginMediator);
            registerModule(game.ModuleID.msg, game.MsgDialog, game.MsgMediator);
        };
        return InitView;
    }(game.Command));
    game.InitView = InitView;
    __reflect(InitView.prototype, "game.InitView");
})(game || (game = {}));
