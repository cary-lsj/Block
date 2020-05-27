namespace game {
	/**
	 * 
	 * 好友对战游戏主场景
	 */
	export class PKMainFullWindow extends MainFullWindow implements IModuleView {

		public map:game.MapMainItem;
		public grp_mood:eui.Group;
		public btn_menu:game.ScaleButton;
		public map_rect:eui.Rect;
		public btn_key:game.ScaleButton;
		public keynum:eui.BitmapLabel;
		public btn_setup:game.SetView;
		public timebar:eui.BitmapLabel;
		public btn_refresh:game.ScaleButton;

		public sc_gamerinfo:eui.Scroller;
		public list_GamerInfo:eui.List;
		public GamerHeadImg:eui.Image;
		public gamerSituation_label:eui.Label;

		public btn_tool_other:game.ToolView;
		public btn_tool_addtime:game.ScaleButton;
		public addTime_Num:eui.BitmapLabel;
		public reduceTime_Num:eui.BitmapLabel;

		public animationGroup:eui.Group;


		public deleteTime:eui.Rect;
		public gamer_list:eui.List;

		private _grptimerbarW: number = 0;
		private _listData: eui.ArrayCollection;
		private _Mc:egret.MovieClip;
		public _GamerInfo = $singlon(GamerInfoCFG);
		public constructor() {
			super("gameSkin.PKMainSkin");
			this._listData = new eui.ArrayCollection();
			this.btn_tool_addtime.on(egret.TouchEvent.TOUCH_TAP,this.onAddTimeClick,this);
			this.btn_tool_other.on(egret.TouchEvent.TOUCH_TAP,this.onDeleteTimeClick,this);	
		}
		protected childrenCreated(): void {
            super.childrenCreated();
            this.gamer_list.dataProvider = this._listData;
            this.gamer_list.itemRenderer = GamerInfo;
        }
		public init(): void {
			// this._grptimerbarW = this.grp_timebar.width;
			// this.timerbarstar();			
		}
		public update(data) {
            this._listData.source = data;
            this._listData.refresh();
        }
		protected onMenuClick(): void {
			console.log('clickmenu');
			this.dispatch(PKMainEvent.clickMenu, true)
		}
		protected onRefreshClick(): void {
			console.log('clickre');
			this.dispatch(PKMainEvent.clickRefresh, true)
		}
		protected onKeyClick(): void {
			console.log('clickkey');
			this.dispatch(PKMainEvent.clickKey, true)
		}
		//时间进度条开始
		public timerbarstar(): void {
			// this.grp_timebar.width = this._grptimerbarW;
			// let timer: egret.Timer = new egret.Timer(1000, 0);
			// timer.addEventListener(egret.TimerEvent.TIMER, this.timerRun, this);
			// //开始计时
			// timer.start();
		}
		private timerRun(e: egret.Event): void {
			// if (this.grp_timebar.width < 5) {
			// 	//停止
			// 	let timer = e.target as egret.Timer
			// 	timer.stop();
			// 	console.log("时间结束")
			// 	//对战结束
			// 	this.dispatch(PKMainEvent.endpkgame,true);
			// }
			// this.grp_timebar.width -= 5;
		}
		
		

		public onAddTimeClick(){
			SoundManager.getInstance().PlaySound(SoundManager.mClickAudioUrl);
            this.dispatch(PKMainEvent.clickAddTimeTool,true)
		}
		public onDeleteTimeClick(){
			$facade.addModule(ModuleID.tool);
		}
		//显示玩家头像
		public showGamerInfo():void{
			let _thiss = this;
			this.gamerSituation_label.text = '';	
            let data = $userData.pkRoomVO.gamerList;
			this.update(data);
			this.updateToolNum();
			this.showPercent();
		}
		public updateToolNum(){
			this.addTime_Num.text = $userData.playerVO.toolMap[0].count.toString();
            this.reduceTime_Num.text = $userData.playerVO.toolMap[1].count.toString();
		}
		public showPercent(){
			let data = $userData.pkRoomVO.gamerList;
			let data_percent = [];
			for(let item in data){
				let a = {
					'sNick':data[item].sNick,
					'sID':data[item].sID,
					'sHeadImg':data[item].sHeadImg,
					'nRankLevel':data[item].nRankLevel,
					'percent':0,
					'animation':false
				};
				data_percent.push(a);
			}
			this.update(data_percent);
		}
		public updateGamerPercent(sID:string,flage:boolean,action:string){
			let data = this._listData;
			let data_percent = [];
			for(let item of this._listData.source){
				if(action === 'percent'){
					if(item.sID === sID){
						if(flage){
							item.percent = item.percent + 1 >= $userData.pkRoomVO.playProtMoodNum ? $userData.pkRoomVO.playProtMoodNum : item.percent + 1;
						}else{
							item.percent = item.percent - 1 <= 0 ? 0 : item.percent - 1;
						}
						item.animation = false;
					}
				}
				if(action === 'animation'){
					if(item.sID === sID){
						item.animation = true;
					}	
				}
				
				let a = item;
				data_percent.push(a);
			}
			this.update(data_percent);
		}
		public timePrompt(){
			var tw = egret.Tween.get( this.timebar, { loop:false} );
			tw.to( {scaleX: 2, scaleY: 2}, 300 ).call( function(){ SoundManager.getInstance().PlaySound(SoundManager.mClockAudioUrl); } ).wait( 400 )
			.to( {scaleX: 1, scaleY: 1}, 100 ).wait( 200 )
		}
		public showToolEffect(){
			this.animationGroup.visible = true;
			this.animationGroup.scaleY = 1.9;
			this.animationGroup.scaleX = 1.4;
			SoundManager.getInstance().PlaySound(SoundManager.mBlastingAudioUrl);
			game.EffectManager.play('blast',this.animationGroup,0,0,1,60,this.clearToolEffect,this);
		}
		public clearToolEffect(){
			this.animationGroup.visible = false;
		}
	}
}
