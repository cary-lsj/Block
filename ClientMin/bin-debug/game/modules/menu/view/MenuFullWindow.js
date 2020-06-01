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
     * 菜单界面
     */
    var MenuFullWindow = (function (_super) {
        __extends(MenuFullWindow, _super);
        function MenuFullWindow() {
            var _this = _super.call(this, "gameSkin.MenuSkin") || this;
            game.SoundManager.getInstance(); //播放背景音乐
            return _this;
        }
        MenuFullWindow.prototype.createComponent = function () {
            return undefined;
        };
        MenuFullWindow.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
            // this.grp_dw.y = this.stage.height/4.65;
            this.btn_start.on(egret.TouchEvent.TOUCH_TAP, this.onStartClick, this);
            this.btn_rank.on(egret.TouchEvent.TOUCH_TAP, this.onRankClick, this);
            this.btn_fight.on(egret.TouchEvent.TOUCH_TAP, this.onFightClick, this);
            this.btn_continue.on(egret.TouchEvent.TOUCH_TAP, this.onContinueClick, this);
            this.btn_shop.on(egret.TouchEvent.TOUCH_TAP, this.onShopClick, this);
            this.updateAssets();
        };
        MenuFullWindow.prototype.onFightClick = function (e) {
            this.dispatch(3 /* clickFight */, true);
        };
        MenuFullWindow.prototype.onContinueClick = function (e) {
            this.dispatch(4 /* clickContinue */, true);
        };
        MenuFullWindow.prototype.onStartClick = function (e) {
            this.dispatch(1 /* clickStart */, true);
        };
        MenuFullWindow.prototype.onRankClick = function (e) {
            this.dispatch(2 /* clickRank */, true);
        };
        MenuFullWindow.prototype.onShopClick = function (e) {
            this.dispatch(5 /* clickShop */, true);
        };
        MenuFullWindow.prototype.updateAssets = function () {
            this.DiamondText.text = '0';
            this.GoldText.text = '0';
            if (game.$userData.playerVO.nMoney !== undefined)
                this.DiamondText.text = game.$userData.playerVO.nMoney.toString();
            if (game.$userData.playerVO.nGold !== undefined)
                this.GoldText.text = game.$userData.playerVO.nGold.toString();
        };
        return MenuFullWindow;
    }(game.FullWindowBase));
    game.MenuFullWindow = MenuFullWindow;
    __reflect(MenuFullWindow.prototype, "game.MenuFullWindow");
})(game || (game = {}));
