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
     * 排行榜 界面弹窗
     */
    var RankDialog = (function (_super) {
        __extends(RankDialog, _super);
        function RankDialog() {
            var _this = _super.call(this, "gameSkin.RankSkin") || this;
            _this._listData = new eui.ArrayCollection();
            return _this;
        }
        RankDialog.prototype.createComponent = function () {
            return undefined;
        };
        RankDialog.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
            // this.visible = false;
            this.btn_close.on(egret.TouchEvent.TOUCH_TAP, this.onCloseClick, this);
            this.list_rank.dataProvider = this._listData;
            this.list_rank.itemRenderer = game.RankItem;
        };
        /** 排行榜展示 */
        RankDialog.prototype.refreshList = function (list) {
            this._listData.source = list;
            this._listData.refresh();
        };
        RankDialog.prototype.onCloseClick = function (e) {
            this.dispatch(0 /* click */, true);
        };
        return RankDialog;
    }(game.DialogBase));
    game.RankDialog = RankDialog;
    __reflect(RankDialog.prototype, "game.RankDialog");
})(game || (game = {}));
