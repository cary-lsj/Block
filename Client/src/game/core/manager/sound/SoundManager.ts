namespace game {

	export class SoundManager {
		//  音乐与音效分开
		private mBGAudio: egret.Sound;
		private mSoundChannel: egret.SoundChannel;

		private mPKAudio: egret.Sound;
		private mSoundChanne2: egret.SoundChannel;

		public static readonly mBGAudioUrl: string = "resource/sound/bg_music_test.mp3";
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

			if(egret.Capabilities.os == "iOS") {
				this.mBGAudio.on(egret.Event.COMPLETE,this.PlayMusicIOS,this);
				
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

		public PlayMusicIOS(url:string): void {
			window.addEventListener("touchstart",()=>{
				this.playBgMusic();
				this.playPKMusic();
				// window.removeEventListener("touchstart");
			});
		}

		public PlaySound(soundUrl: string): void {
			if(this.isEffect){
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
	// export class SoundManager{
	// 	/** 背景音乐 */
	// 	private bg_music:egret.Sound;
	// 	/** 点击 */
	// 	private click_sound:egret.Sound;
	// 	/** 木块放下 */
	// 	private block_drop_sound:egret.Sound;
	// 	/** 胜利 */
	// 	private win_sound:egret.Sound;

	// 	private soundChannel:egret.SoundChannel;

	// 	private static shared:game.SoundManager;
	// 	public static getInstance(){
	// 		if(!SoundManager.shared){
	// 			SoundManager.shared=new SoundManager();
	// 		}
	// 		return SoundManager.shared;
	// 	}

	// 	public constructor() {

	// 		this.bg_music = new egret.Sound();
	// 		this.bg_music.load("resource/sound/bg_music.mp3");
	// 		this.bg_music.addEventListener(egret.Event.COMPLETE, this.playBgMusic,this);

	// 		this.click_sound = new egret.Sound();
	// 		this.click_sound.load("resource/sound/click.mp3");

	// 		this.block_drop_sound = new egret.Sound();
	// 		this.block_drop_sound.load("resource/sound/block_drop.mp3");

	// 		this.win_sound = new egret.Sound();
	// 		this.win_sound.load("resource/sound/win.mp3");

	// 	}

	// 	/** 播放背景音乐 */
	// 	public playBgMusic(){
	// 		if(this.bg_music && this.isMusic){
	// 			this.soundChannel=this.bg_music.play(0,0);
	// 		}
	// 	}
	// 	/** 停止bg */
	// 	public stopBgMusic(){
	// 		if(this.soundChannel){
	// 			this.soundChannel.stop();
	// 			this.soundChannel=null;
	// 		}
	// 	}

	// 	/** 播放点击声音 */
	// 	public playClick(){
	// 		if( this.isEffect && this.click_sound){
	// 			this.click_sound.play(0,1);
	// 		}
	// 	}

	// 	/** 播放木块放下声音 */
	// 	public playBlockDrop(){
	// 		if( this.isEffect && this.block_drop_sound){
	// 			this.block_drop_sound.play(0,1);
	// 		}
	// 	}

	// 	/** 播放胜利声音 */
	// 	public playWin(){
	// 		if( this.isEffect && this.win_sound){
	// 			this.win_sound.play(0,1);
	// 		}
	// 	}

	// 	/** 设置是否播放背景音乐 */
	// 	public get isMusic(){
	// 		let ret =egret.localStorage.getItem("isMusic");
	// 		if(ret == "" || ret == null){
	// 			return true;
	// 		}else{
	// 			return ret=="1";
	// 		}

	// 	}

	// 	/** 获取背景音乐是否播放 */
	// 	public set isMusic(val:boolean){
	// 		if(val){
	// 			egret.localStorage.setItem("isMusic","1");
	// 			this.playBgMusic();
	// 		}else{
	// 			egret.localStorage.setItem("isMusic","0");
	// 			this.stopBgMusic();
	// 		}
	// 	}

	// 	public set isEffect(val){
	// 		if(val){
	// 			egret.localStorage.setItem("isSound","1");
	// 		}else{
	// 			egret.localStorage.setItem("isSound","0");
	// 		}
	// 	}

	// 	public get isEffect(){
	// 		let ret = egret.localStorage.getItem("isSound");
	// 		if( ret == null || ret == ""){
	// 			return true;
	// 		}else{
	// 			return ret == "1";
	// 		}
	// 	}

	// }
