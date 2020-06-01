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
    var PKWinFullWindow = (function (_super) {
        __extends(PKWinFullWindow, _super);
        function PKWinFullWindow() {
            var _this = _super.call(this, "gameSkin.PKWinSkin") || this;
            _this._listData = new eui.ArrayCollection();
            return _this;
        }
        PKWinFullWindow.prototype.createComponent = function () {
            return undefined;
        };
        PKWinFullWindow.prototype._initView = function () {
            this.group_pkNRank.visible = false;
            this.group_pklevel.visible = false;
            this.group_countDown.visible = true;
        };
        PKWinFullWindow.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
            this.balance_rank.dataProvider = this._listData;
            this.balance_rank.itemRenderer = game.PKRankItem;
            this.btn_leave.on(egret.TouchEvent.TOUCH_TAP, this.onLeaveClick, this);
            this.btn_more.on(egret.TouchEvent.TOUCH_TAP, this.onMoreClick, this);
            this.btn_lookRank.on(egret.TouchEvent.TOUCH_TAP, this.onSeeRankClick, this);
        };
        PKWinFullWindow.prototype.onLeaveClick = function (e) {
            game.SoundManager.getInstance().PlaySound(game.SoundManager.mClickAudioUrl);
            this.dispatch(0 /* clickLeave */, true);
        };
        PKWinFullWindow.prototype.onMoreClick = function (e) {
            game.SoundManager.getInstance().PlaySound(game.SoundManager.mClickAudioUrl);
            this.dispatch(1 /* clickMore */, true);
        };
        PKWinFullWindow.prototype.onSeeRankClick = function () {
            game.SoundManager.getInstance().PlaySound(game.SoundManager.mClickAudioUrl);
            this.dispatch(2 /* clickSeeRank */, true);
        };
        /** 排行榜展示 */
        PKWinFullWindow.prototype.analysisBalanceData = function (listDataArr) {
            this.group_pklevel.visible = true;
            this.group_pkNRank.visible = false;
            this.updateBalanceRankData(listDataArr);
        };
        /** 个人信息展示 */
        PKWinFullWindow.prototype.analysisInfo = function (personInfo) {
            this.group_pklevel.visible = false;
            this.group_pkNRank.visible = true;
            this.btn_headImg.source = game.$userData.account.avatarUrl;
            this.btn_gold.text = '第     名';
            this.btn_gold1.text = personInfo.Info;
            this.countDown_txt.text = '倒计时：';
            var id = game.$userData.account.userid.toString();
            var userData = game.$userData.pkRoomVO.getGamer(id);
            this.gamerInfo.data = userData;
        };
        PKWinFullWindow.prototype.updateBalanceRankData = function (data) {
            this._listData.source = data;
            this._listData.refresh();
        };
        return PKWinFullWindow;
    }(game.FullWindowBase));
    game.PKWinFullWindow = PKWinFullWindow;
    __reflect(PKWinFullWindow.prototype, "game.PKWinFullWindow");
})(game || (game = {}));
