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
    var Container = egret.DisplayObjectContainer;
    var Group = eui.Group;
    /**
     * 游戏容器
     * @author wizardc
     */
    var GameView = (function (_super) {
        __extends(GameView, _super);
        function GameView() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        GameView.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
            this.sceneLayer = new Container();
            this.sceneLayer.touchEnabled = false;
            this.sceneLayer.touchChildren = true;
            this.addChild(this.sceneLayer);
            this.weatherLayer = new Group();
            this.weatherLayer.percentWidth = this.weatherLayer.percentHeight = 100;
            this.weatherLayer.touchEnabled = this.weatherLayer.touchChildren = false;
            this.weatherLayer.touchThrough = true;
            this.addChild(this.weatherLayer);
            this.bottomLayer = new Group();
            this.bottomLayer.percentWidth = this.bottomLayer.percentHeight = 100;
            this.bottomLayer.touchThrough = true;
            this.addChild(this.bottomLayer);
            this.bottomUILayer = new Group();
            this.bottomUILayer.percentWidth = this.bottomUILayer.percentHeight = 100;
            this.bottomUILayer.touchThrough = true;
            this.addChild(this.bottomUILayer);
            this.fullWindowLayer = new Group();
            this.fullWindowLayer.percentWidth = this.fullWindowLayer.percentHeight = 100;
            this.fullWindowLayer.touchThrough = true;
            this.addChild(this.fullWindowLayer);
            this.mainUILayer = new Group();
            this.mainUILayer.percentWidth = this.mainUILayer.percentHeight = 100;
            this.mainUILayer.touchThrough = true;
            this.addChild(this.mainUILayer);
            this.dialogLayer = new Group();
            this.dialogLayer.percentWidth = this.dialogLayer.percentHeight = 100;
            this.dialogLayer.touchThrough = true;
            this.addChild(this.dialogLayer);
            this.popLayer = new Group();
            this.popLayer.percentWidth = this.popLayer.percentHeight = 100;
            this.popLayer.touchThrough = true;
            this.addChild(this.popLayer);
            this.alertLayer = new Group();
            this.alertLayer.percentWidth = this.alertLayer.percentHeight = 100;
            this.alertLayer.touchThrough = true;
            this.addChild(this.alertLayer);
            this.guideLayer = new Group();
            this.guideLayer.percentWidth = this.guideLayer.percentHeight = 100;
            this.guideLayer.touchThrough = true;
            this.addChild(this.guideLayer);
            this.messageLayer = new Group();
            this.messageLayer.percentWidth = this.messageLayer.percentHeight = 100;
            this.messageLayer.touchEnabled = this.messageLayer.touchChildren = false;
            this.messageLayer.touchThrough = true;
            this.addChild(this.messageLayer);
            this.topLayer = new Group();
            this.topLayer.percentWidth = this.topLayer.percentHeight = 100;
            this.topLayer.touchThrough = true;
            this.addChild(this.topLayer);
        };
        return GameView;
    }(eui.UILayer));
    game.GameView = GameView;
    __reflect(GameView.prototype, "game.GameView", ["game.IModuleContainer"]);
})(game || (game = {}));
