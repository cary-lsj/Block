var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var game;
(function (game) {
    var SoundManager = (function () {
        function SoundManager() {
        }
        SoundManager.getInstance = function () {
            if (!this._instance) {
                this._instance = new game.SoundManager();
                this._instance.InitSoundManager();
            }
            return this._instance;
        };
        SoundManager.prototype.InitSoundManager = function () {
            this.mBGAudio = new egret.Sound();
            this.mBGAudio.load(SoundManager.mBGAudioUrl);
            this.mPKAudio = new egret.Sound();
            this.mPKAudio.load(SoundManager.mPKAudioUrl);
            if (egret.Capabilities.os == "iOS") {
                this.mBGAudio.on(egret.Event.COMPLETE, this.PlayMusicIOS, this);
            }
            else {
                this.mBGAudio.on(egret.Event.COMPLETE, this.playBgMusic, this);
            }
        };
        SoundManager.prototype.playPKMusic = function () {
            if (this.mPKAudio && this.isMusic) {
                this.mSoundChanne2 = this.mPKAudio.play(0, 0);
            }
        };
        SoundManager.prototype.stopPKMusic = function () {
            if (this.mSoundChanne2) {
                this.mSoundChanne2.stop();
                this.mSoundChanne2 = null;
            }
        };
        SoundManager.prototype.playBgMusic = function () {
            if (this.mBGAudio && this.isMusic) {
                this.mSoundChannel = this.mBGAudio.play(0, 0);
            }
        };
        SoundManager.prototype.stopBgMusic = function () {
            if (this.mSoundChannel) {
                this.mSoundChannel.stop();
                this.mSoundChannel = null;
            }
        };
        SoundManager.prototype.PlayMusicIOS = function (url) {
            var _this = this;
            window.addEventListener("touchstart", function () {
                _this.playBgMusic();
                _this.playPKMusic();
            });
        };
        SoundManager.prototype.PlaySound = function (soundUrl) {
            if (this.isEffect) {
                var sound_1 = new egret.Sound();
                sound_1.load(soundUrl);
                sound_1.on(egret.Event.COMPLETE, function () { sound_1.play(0, 1); }, this);
            }
        };
        Object.defineProperty(SoundManager.prototype, "isMusic", {
            /** 设置是否播放背景音乐 */
            get: function () {
                var ret = egret.localStorage.getItem("isMusic");
                if (ret == "" || ret == null) {
                    return true;
                }
                else {
                    return ret == "1";
                }
            },
            /** 获取背景音乐是否播放 */
            set: function (val) {
                if (val) {
                    egret.localStorage.setItem("isMusic", "1");
                    this.playBgMusic();
                }
                else {
                    egret.localStorage.setItem("isMusic", "0");
                    this.stopBgMusic();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SoundManager.prototype, "isEffect", {
            get: function () {
                var ret = egret.localStorage.getItem("isSound");
                if (ret == null || ret == "") {
                    return true;
                }
                else {
                    return ret == "1";
                }
            },
            set: function (val) {
                if (val) {
                    egret.localStorage.setItem("isSound", "1");
                }
                else {
                    egret.localStorage.setItem("isSound", "0");
                }
            },
            enumerable: true,
            configurable: true
        });
        SoundManager.mBGAudioUrl = "resource/sound/bg_music_test.mp3";
        SoundManager.mClickAudioUrl = "resource/sound/click_test.mp3";
        SoundManager.mDropAudioUrl = "resource/sound/block_drop.mp3";
        SoundManager.mWinAudioUrl = "resource/sound/win.mp3";
        SoundManager.mPKAudioUrl = "resource/sound/pk_music_50s.mp3";
        SoundManager.mClockAudioUrl = "resource/sound/clock1.mp3";
        SoundManager.mShorterAudioUrl = "resource/sound/shorter_time.mp3";
        SoundManager.mLongerAudioUrl = "resource/sound/longer_time.mp3";
        SoundManager.mBlastingAudioUrl = "resource/sound/shorter_time.mp3";
        SoundManager.mSmogAudioUrl = "resource/sound/longer_time.mp3";
        return SoundManager;
    }());
    game.SoundManager = SoundManager;
    __reflect(SoundManager.prototype, "game.SoundManager");
})(game || (game = {}));
