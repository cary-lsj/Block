// TypeScript file
namespace game {
    export class RoomFullWindow extends FullWindowBase<any> implements IModuleView {
        
        public group_create_room:eui.Group;
        public group_create:eui.Group;
        public text_roomID:eui.EditableText;
        public btn_create:game.ScaleButton;
        public btn_join:game.ScaleButton;
        public btn_menu:game.ScaleButton;
        public btn_rank:game.ScaleButton;
        public group_invite:eui.Group;
        public btn_invite:game.ScaleButton;
        public show_roomID:eui.EditableText;
        public btn_match:eui.Image;
        public group_wait:eui.Group;
        public btn_return:game.ScaleButton;
        public btn_strGame:game.ScaleButton;
        public addTime_Num:eui.BitmapLabel;
        public reduceTime_Num:eui.BitmapLabel;


        public gamer_list:eui.List;
        public sc_gamer:eui.Scroller;



        public clickNum = 0;
        private _listData:eui.ArrayCollection;
        public constructor() {
            super("gameSkin.RoomSkin");
            this._listData = new eui.ArrayCollection();
        }
        protected createComponent(): any {
            return undefined;
        }

        protected childrenCreated(): void {
            super.childrenCreated();
            this.gamer_list.dataProvider = this._listData;
            this.gamer_list.itemRenderer = GamerInfo;
            
            this.btn_menu.on(egret.TouchEvent.TOUCH_TAP, this.GoMenuClick, this);
            this.btn_rank.on(egret.TouchEvent.TOUCH_TAP, this.GoRankClick, this);
            this.btn_return.on(egret.TouchEvent.TOUCH_TAP, this.onBackClick, this);
            this.btn_invite.on(egret.TouchEvent.TOUCH_TAP,this.onInviteClick,this);
            //创建房间 
            this.btn_create.on(egret.TouchEvent.TOUCH_TAP, this.onCreateClick, this);
            this.btn_match.on(egret.TouchEvent.TOUCH_TAP, this.onMatchingClick, this);

            this.btn_join.on(egret.TouchEvent.TOUCH_TAP, this.onJionRoomClick, this); 
            this.btn_strGame.on(egret.TouchEvent.TOUCH_TAP, this.onStarGameClick, this);              
        }

        public _initView():void{
            this.group_create_room.visible = true;
            this.group_create.visible = true;
            this.group_invite.visible = false;
            this.group_wait.visible = false;
            this.text_roomID.text = '';
            this.show_roomID.text = '';
            this.updateTool();
        }

        public onInviteClick():void{
            
            if(this.clickNum === 0){
                this.show_roomID.text = $userData.pkRoomVO.id;
                this.clickNum = 1;
            }else{
                this.group_create_room.visible = false;
                this.group_wait.visible = true;
                this.clickNum = 0;
            }
            
        }

        public onBackClick(): void {
            this.dispatch(RoomEvent.clickBack, true);
        }
        public onStartClick(): void {
            this.dispatch(RoomEvent.clickStart, true);
        }

        public onCreateClick():void{
            SoundManager.getInstance().PlaySound(SoundManager.mClickAudioUrl);
            this.dispatch(RoomEvent.clickCreateRoom,true);
        }
        public onMatchingClick():void{
            SoundManager.getInstance().PlaySound(SoundManager.mClickAudioUrl);
            this.dispatch(RoomEvent.clickMatching,true);
        }
        public onJionRoomClick():void{
            SoundManager.getInstance().PlaySound(SoundManager.mClickAudioUrl);
            if(this.text_roomID.visible){
                this.dispatch(RoomEvent.clickJionRoom, true);
                this.text_roomID.visible = false;
            }else{
                this.text_roomID.visible = true;
            }
            
        }

        public GoMenuClick():void{
            $facade.removeModule(ModuleID.room);
            $facade.addModule(ModuleID.menu);
        }

        public GoRankClick():void{
            // $facade.removeModule(ModuleID.room);
            $facade.addModule(ModuleID.rank);
        }
        public onStarGameClick():void{
            if(this.btn_strGame.currentState === 'disabled'){
                $facade.addModule(ModuleID.msg,undefined,'等待好友加入......');
                return;
            }
            this.dispatch(RoomEvent.clickStarGame,true);
        }

        public updateGamer(data):void{
            if(data.length <= 2){
                this.sc_gamer.y = this.sc_gamer.y <= 215  ? this.sc_gamer.y*3/2 : this.sc_gamer.y;
            }else{
                this.sc_gamer.y = this.sc_gamer.y >= 215  ? this.sc_gamer.y/2 : this.sc_gamer.y;
            }
            this._listData.source = data;
            this._listData.refresh();
        }
        public showWait(){
            if($userData.account.userid.toString() === $userData.pkRoomVO.bossID){
                this.btn_return.visible = true;
                this.btn_strGame.visible = true;
                if($userData.pkRoomVO.gamerList.length === 1){
                    this.btn_strGame.currentState = "disabled";
                }else{
                    this.btn_strGame.currentState = "up";
                }
            }
            this.group_wait.visible = true;
            this.group_create_room.visible = false;
        }
        public updateTool(){
            this.addTime_Num.text = $userData.playerVO.toolMap[0].count.toString();
            this.reduceTime_Num.text = $userData.playerVO.toolMap[1].count.toString();
        }
    }
}