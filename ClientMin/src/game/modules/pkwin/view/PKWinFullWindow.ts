namespace game {


    export class PKWinFullWindow extends FullWindowBase<any> implements IModuleView {

        public group_pkNRank:eui.Group;        
        public btn_leave:game.ScaleButton;
        public btn_more:game.ScaleButton;
        public btn_headImg:eui.Image;
        public btn_time:eui.Label;
        public btn_score:eui.Label;
        public btn_gold:eui.Label;
        public btn_gold1:eui.BitmapLabel;

        public group_pklevel:eui.Group;
        public balance_rank:eui.List;
        public balance_scroller:eui.Scroller;
        public btn_lookRank:game.ScaleButton;
        public group_countDown:eui.Group;
        public countDown_num:eui.BitmapLabel;
        public countDown_txt:eui.Label;
        public gamerInfo:game.GamerInfo;


        private _listData:eui.ArrayCollection;

        public constructor() {
            super("gameSkin.PKWinSkin");
            this._listData = new eui.ArrayCollection();
        }
        protected createComponent(): any {
            return undefined;
        }
        public _initView():void{
            this.group_pkNRank.visible = false;
            this.group_pklevel.visible = false;
            this.group_countDown.visible = true;
        }

        protected childrenCreated(): void {
            super.childrenCreated();
            this.balance_rank.dataProvider = this._listData;
            this.balance_rank.itemRenderer = PKRankItem;

            this.btn_leave.on(egret.TouchEvent.TOUCH_TAP,this.onLeaveClick,this)
            this.btn_more.on(egret.TouchEvent.TOUCH_TAP, this.onMoreClick,this);
            this.btn_lookRank.on(egret.TouchEvent.TOUCH_TAP, this.onSeeRankClick,this);
        }

        private onLeaveClick(e:egret.TouchEvent):void{
            SoundManager.getInstance().PlaySound(SoundManager.mClickAudioUrl);
            this.dispatch(PKWinEvent.clickLeave,true)
        }

        private onMoreClick(e: egret.TouchEvent): void{
             SoundManager.getInstance().PlaySound(SoundManager.mClickAudioUrl);
             this.dispatch(PKWinEvent.clickMore,true);
        }
        private onSeeRankClick(){
            SoundManager.getInstance().PlaySound(SoundManager.mClickAudioUrl);
            this.dispatch(PKWinEvent.clickSeeRank,true);
        }

       /** 排行榜展示 */
        public analysisBalanceData(listDataArr:any[]):void{
            
            this.group_pklevel.visible = true;
            this.group_pkNRank.visible = false;
            this.updateBalanceRankData(listDataArr);
        }
        /** 个人信息展示 */
        public analysisInfo(personInfo):void{
            this.group_pklevel.visible = false;
            this.group_pkNRank.visible = true;
            this.btn_headImg.source = $userData.account.avatarUrl;
            this.btn_gold.text = '第     名'
            this.btn_gold1.text =  personInfo.Info;
            this.countDown_txt.text = '倒计时：';
            let id = $userData.account.userid.toString();
            let userData = $userData.pkRoomVO.getGamer(id);
            this.gamerInfo.data = userData;
        }
        public updateBalanceRankData(data){
            this._listData.source = data;
            this._listData.refresh();
        }

    }

}
