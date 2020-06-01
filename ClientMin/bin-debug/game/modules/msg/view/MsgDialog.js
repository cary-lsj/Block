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
     *
     * 购买成功场景
     */
    var MsgDialog = (function (_super) {
        __extends(MsgDialog, _super);
        function MsgDialog() {
            return _super.call(this, "gameSkin.msgSkin") || this;
        }
        MsgDialog.prototype.createComponent = function () {
            return undefined;
        };
        MsgDialog.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
            this.btn_close.on(egret.TouchEvent.TOUCH_TAP, this.onBackClick, this);
        };
        MsgDialog.prototype.onBackClick = function (e) {
            this.dispatch(2 /* clickBack */, true);
        };
        return MsgDialog;
    }(game.DialogBase));
    game.MsgDialog = MsgDialog;
    __reflect(MsgDialog.prototype, "game.MsgDialog");
})(game || (game = {}));
