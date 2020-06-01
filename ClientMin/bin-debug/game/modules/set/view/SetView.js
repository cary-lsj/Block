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
    var SetView = (function (_super) {
        __extends(SetView, _super);
        function SetView() {
            var _this = _super.call(this) || this;
            _this.sound = game.SoundManager.getInstance();
            return _this;
        }
        SetView.prototype.createComponent = function () {
            return undefined;
        };
        SetView.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
            this.grp_dialog.visible = false;
            this.btn_set.on(egret.TouchEvent.TOUCH_TAP, this.onSetClick, this);
            this.grp_music.on(egret.TouchEvent.TOUCH_TAP, this.onMusicClick, this);
            this.grp_sound.on(egret.TouchEvent.TOUCH_TAP, this.onSoundClick, this);
            this.init();
        };
        SetView.prototype.init = function () {
            this.img_music_off.visible = game.SoundManager.getInstance().isMusic ? false : true;
            this.img_sound_off.visible = game.SoundManager.getInstance().isEffect ? false : true;
        };
        SetView.prototype.onSetClick = function () {
            // SoundManager.getInstance().playClick();
            game.SoundManager.getInstance().PlaySound(game.SoundManager.mClickAudioUrl);
            if (this.grp_dialog.visible) {
                this.grp_dialog.visible = false;
            }
            else {
                this.grp_dialog.visible = true;
            }
        };
        /** 按钮音效设置 */
        SetView.prototype.onSoundClick = function (e) {
            // SoundManager.getInstance().playClick();
            game.SoundManager.getInstance().PlaySound(game.SoundManager.mClickAudioUrl);
            if (game.SoundManager.getInstance().isEffect) {
                game.SoundManager.getInstance().isEffect = false;
                this.img_sound_off.visible = true;
            }
            else {
                game.SoundManager.getInstance().isEffect = true;
                this.img_sound_off.visible = false;
            }
        };
        /** 背景音乐设置 */
        SetView.prototype.onMusicClick = function (e) {
            // SoundManager.getInstance().playClick();
            game.SoundManager.getInstance().PlaySound(game.SoundManager.mClickAudioUrl);
            if (game.SoundManager.getInstance().isMusic) {
                game.SoundManager.getInstance().isMusic = false;
                this.img_music_off.visible = true;
            }
            else {
                game.SoundManager.getInstance().isMusic = true;
                this.img_music_off.visible = false;
            }
        };
        return SetView;
    }(eui.Component));
    game.SetView = SetView;
    __reflect(SetView.prototype, "game.SetView");
})(game || (game = {}));
