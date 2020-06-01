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
     * 入口类
     * @author wizardc
     */
    var GameApp = (function (_super) {
        __extends(GameApp, _super);
        function GameApp() {
            var _this = _super.call(this) || this;
            _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
            return _this;
        }
        GameApp.prototype.onAddToStage = function (event) {
            this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
            game.Global.init(this.stage);
            if (!egret.Capabilities.isMobile) {
            }
            egret.ImageLoader.crossOrigin = "anonymous";
            egret.TextField.default_fontFamily = "SimHei";
            egret.registerImplementation("eui.IAssetAdapter", new AssetAdapter());
            egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());
            var maxLoading = 2;
            RES.setMaxLoadingThread(maxLoading);
            game.RESP.setMaxLoadingThread(maxLoading);
            game.SoundManager.getInstance();
            game.$facade.registerCommand(2 /* contextInit */, game.ContextInitCommand);
            game.$facade.dispatch(2 /* contextInit */);
        };
        return GameApp;
    }(egret.DisplayObjectContainer));
    game.GameApp = GameApp;
    __reflect(GameApp.prototype, "game.GameApp");
})(game || (game = {}));
window["game"] = game;
