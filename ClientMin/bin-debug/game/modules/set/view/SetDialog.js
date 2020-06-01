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
     * 设置 界面弹窗
     */
    var SetDialog = (function (_super) {
        __extends(SetDialog, _super);
        function SetDialog() {
            var _this = _super.call(this, "gameSkin.SetSkin") || this;
            _this.btn_soundTab.touchEnabled = false;
            _this.btn_musicTab.touchEnabled = false;
            _this.sound = game.SoundManager.getInstance();
            return _this;
        }
        SetDialog.prototype.createComponent = function () {
            return undefined;
        };
        SetDialog.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
            this.init();
            this.btn_close.on(egret.TouchEvent.TOUCH_TAP, this.onCloseClick, this);
            this.btn_music.on(egret.TouchEvent.TOUCH_TAP, this.onMusicClick, this);
            this.btn_sound.on(egret.TouchEvent.TOUCH_TAP, this.isEffect, this);
        };
        SetDialog.prototype.init = function () {
            this.btn_music.currentState = game.SoundManager.getInstance().isMusic ? "up" : "down";
            this.btn_musicTab.currentState = this.btn_music.currentState;
            this.btn_sound.currentState = game.SoundManager.getInstance().isEffect ? "up" : "down";
            this.btn_soundTab.currentState = this.btn_sound.currentState;
        };
        SetDialog.prototype.onCloseClick = function (e) {
            this.dispatch(0 /* click */, true);
        };
        /** 按钮音效设置 */
        SetDialog.prototype.isEffect = function (e) {
            game.SoundManager.getInstance().PlaySound(game.SoundManager.mClickAudioUrl);
            // SoundManager.getInstance().playClick();
            if (game.SoundManager.getInstance().isEffect) {
                game.SoundManager.getInstance().isEffect = false;
                this.btn_sound.currentState = "down";
                this.btn_soundTab.currentState = "down";
            }
            else {
                game.SoundManager.getInstance().isEffect = true;
                this.btn_sound.currentState = "up";
                this.btn_soundTab.currentState = "up";
            }
        };
        /** 背景音乐设置 */
        SetDialog.prototype.onMusicClick = function (e) {
            game.SoundManager.getInstance().PlaySound(game.SoundManager.mClickAudioUrl);
            // SoundManager.getInstance().playClick();
            if (game.SoundManager.getInstance().isMusic) {
                game.SoundManager.getInstance().isMusic = false;
                this.btn_music.currentState = "down";
                this.btn_musicTab.currentState = "down";
            }
            else {
                game.SoundManager.getInstance().isMusic = true;
                this.btn_music.currentState = "up";
                this.btn_musicTab.currentState = "up";
            }
        };
        return SetDialog;
    }(game.DialogBase));
    game.SetDialog = SetDialog;
    __reflect(SetDialog.prototype, "game.SetDialog");
})(game || (game = {}));
