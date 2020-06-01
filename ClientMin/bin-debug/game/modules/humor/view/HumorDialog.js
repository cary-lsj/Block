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
     * 皮一下 界面弹窗
     */
    var HumorDialog = (function (_super) {
        __extends(HumorDialog, _super);
        function HumorDialog() {
            return _super.call(this, "gameSkin.HumorSkin") || this;
        }
        HumorDialog.prototype.createComponent = function () {
            return undefined;
        };
        HumorDialog.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
            this.btn_close.on(egret.TouchEvent.TOUCH_TAP, this.onCloseClick, this);
            this.edit_text.prompt = "内容不要超过两百字哟";
        };
        HumorDialog.prototype.onPortClick = function () {
            this.dispatch(1 /* PortClick */, true);
        };
        HumorDialog.prototype.onCloseClick = function (e) {
            this.dispatch(0 /* click */, true);
        };
        return HumorDialog;
    }(game.DialogBase));
    game.HumorDialog = HumorDialog;
    __reflect(HumorDialog.prototype, "game.HumorDialog");
})(game || (game = {}));
