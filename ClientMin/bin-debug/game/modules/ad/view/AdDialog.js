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
     * 广告 界面弹窗
     */
    var AdDialog = (function (_super) {
        __extends(AdDialog, _super);
        function AdDialog() {
            return _super.call(this, "gameSkin.AdSkin") || this;
        }
        AdDialog.prototype.createComponent = function () {
            return undefined;
        };
        AdDialog.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
            this.btn_close.on(egret.TouchEvent.TOUCH_TAP, this.onCloseClick, this);
        };
        AdDialog.prototype.onCloseClick = function (e) {
            this.dispatch(0 /* click */, true);
        };
        return AdDialog;
    }(game.DialogBase));
    game.AdDialog = AdDialog;
    __reflect(AdDialog.prototype, "game.AdDialog");
})(game || (game = {}));
