namespace game {

	export class SoundManager {
		//  音乐与音效分开
		private mBGAudio: egret.Sound;
		private mSoundChannel: egret.SoundChannel;

		private mPKAudio: egret.Sound;
		private mSoundChanne2: egret.SoundChannel;

		public static readonly mBGAudioUrl: string = "resource/sound/pk_music_50s.mp3";
		public static readonly mClickAudioUrl: string = "resource/sound/click_test.mp3";
		public static readonly mDropAudioUrl: string = "resource/sound/block_drop.mp3";
		public static readonly mWinAudioUrl: string = "resource/sound/win.mp3";
		public static readonly mPKAudioUrl: string = "resource/sound/pk_music_50s.mp3";
		public static readonly mClockAudioUrl: string = "resource/sound/clock1.mp3";
		public static readonly mShorterAudioUrl: string = "resource/sound/shorter_time.mp3";
		public static readonly mLongerAudioUrl: string = "resource/sound/longer_time.mp3";
		public static readonly mBlastingAudioUrl: string = "resource/sound/shorter_time.mp3";
		public static readonly mSmogAudioUrl: string = "resource/sound/longer_time.mp3";

		private static _instance: game.SoundManager;
		public static getInstance(): game.SoundManager {
			if (!this._instance) {
				this._instance = new game.SoundManager();
				this._instance.InitSoundManager();
			}
			return this._instance;
		}

		public InitSoundManager(): void {
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
		}

		public playPKMusic(): void {
			if (this.mPKAudio && this.isMusic) {
				this.mSoundChanne2 = this.mPKAudio.play(0, 0);
			}
		}

		public stopPKMusic(): void {
			if (this.mSoundChanne2) {
				this.mSoundChanne2.stop();
				this.mSoundChanne2 = null;
			}
		}

		public playBgMusic(): void {
			if (this.mBGAudio && this.isMusic) {
				this.mSoundChannel = this.mBGAudio.play(0, 0);
			}
		}

		public stopBgMusic(): void {
			if (this.mSoundChannel) {
				this.mSoundChannel.stop();
				this.mSoundChannel = null;
			}
		}

		public PlayMusicIOS(url: string): void {
			window.addEventListener("touchstart", () => {
				this.playBgMusic();
				this.playPKMusic();
			});
		}

		public PlaySound(soundUrl: string): void {
			if (this.isEffect) {
				let sound: egret.Sound = new egret.Sound();
				sound.load(soundUrl);
				sound.on(egret.Event.COMPLETE, () => { sound.play(0, 1); }, this);
			}
		}

		/** 设置是否播放背景音乐 */
		public get isMusic(): boolean {
			let ret = egret.localStorage.getItem("isMusic");
			if (ret == "" || ret == null) {
				return true;
			} else {
				return ret == "1";
			}
		}

		/** 获取背景音乐是否播放 */
		public set isMusic(val: boolean) {
			if (val) {
				egret.localStorage.setItem("isMusic", "1");
				this.playBgMusic();

			} else {
				egret.localStorage.setItem("isMusic", "0");
				this.stopBgMusic();

			}
		}

		public set isEffect(val) {
			if (val) {
				egret.localStorage.setItem("isSound", "1");
			} else {
				egret.localStorage.setItem("isSound", "0");
			}
		}

		public get isEffect(): boolean {
			let ret = egret.localStorage.getItem("isSound");
			if (ret == null || ret == "") {
				return true;
			} else {
				return ret == "1";
			}
		}
	}
}

