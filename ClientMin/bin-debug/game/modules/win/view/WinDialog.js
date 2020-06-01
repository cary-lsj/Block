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
     * 胜利 界面弹窗
     */
    var WinDialog = (function (_super) {
        __extends(WinDialog, _super);
        function WinDialog() {
            return _super.call(this, "gameSkin.WinSkin") || this;
        }
        WinDialog.prototype.createComponent = function () {
            return undefined;
        };
        WinDialog.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
            var view = this._component;
            this.btn_close.on(egret.TouchEvent.TOUCH_TAP, this.onCloseClick, this);
            this.btn_next.on(egret.TouchEvent.TOUCH_TAP, this.onNextClick, this);
            this.btn_again.on(egret.TouchEvent.TOUCH_TAP, this.onAgainClick, this);
            this.btn_rank.on(egret.TouchEvent.TOUCH_TAP, this.onRankClick, this);
            this.btn_ad.on(egret.TouchEvent.TOUCH_TAP, this.onAdClick, this);
            this.btn_ad.group.addChild(this.image3);
        };
        WinDialog.prototype.onCloseClick = function (e) {
            game.SoundManager.getInstance().PlaySound(game.SoundManager.mClickAudioUrl);
            // SoundManager.getInstance().playClick()
            this.dispatch(1 /* clickClose */, true);
        };
        WinDialog.prototype.onNextClick = function (e) {
            game.SoundManager.getInstance().PlaySound(game.SoundManager.mClickAudioUrl);
            // SoundManager.getInstance().playClick()
            this.dispatch(2 /* clickNext */, true);
        };
        WinDialog.prototype.onAgainClick = function (e) {
            game.SoundManager.getInstance().PlaySound(game.SoundManager.mClickAudioUrl);
            // SoundManager.getInstance().playClick()
            this.dispatch(3 /* clickAgain */, true);
        };
        WinDialog.prototype.onRankClick = function (e) {
            game.SoundManager.getInstance().PlaySound(game.SoundManager.mClickAudioUrl);
            // SoundManager.getInstance().playClick()
            this.dispatch(4 /* clickRank */, true);
        };
        WinDialog.prototype.onAdClick = function (e) {
            game.SoundManager.getInstance().PlaySound(game.SoundManager.mClickAudioUrl);
            // SoundManager.getInstance().playClick()
            this.dispatch(6 /* clickAd */, true);
        };
        /** 播放动画 */
        WinDialog.prototype.animationPlay = function (e) {
            e.comeOne.play(0);
            switch (this._starNum) {
                case 1:
                    e.starOne.play(0);
                    break;
                case 2:
                    e.starTwo.play(0);
                    break;
                case 3:
                    e.starThree.play(0);
                    break;
            }
        };
        Object.defineProperty(WinDialog.prototype, "getStarNum", {
            /** 获取星星个数 */
            get: function () {
                return this._starNum;
            },
            enumerable: true,
            configurable: true
        });
        /** 修改星星个数 */
        WinDialog.prototype.refreshViewData = function (value) {
            this._starNum = value;
        };
        return WinDialog;
    }(game.DialogBase));
    game.WinDialog = WinDialog;
    __reflect(WinDialog.prototype, "game.WinDialog");
})(game || (game = {}));
