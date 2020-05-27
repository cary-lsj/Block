namespace game {
    /**
     * 设置 界面弹窗
     */
    export class ToolView extends DialogBase<any> {
        public grp_tool:eui.Group;
        public sc_tool:eui.Scroller;
        public gamerHead_list:eui.List;
        public btn_tool:game.ScaleButton;
        public reduceTime_num:eui.BitmapLabel;


        private _listData:eui.ArrayCollection;
        public constructor() {
            super("gameSkin.ToolSkin");
            this._listData = new eui.ArrayCollection();
        }
        protected createComponent(): any {
            return undefined;
        }
        protected childrenCreated(): void {
            super.childrenCreated();
            this.gamerHead_list.dataProvider = this._listData;
            this.gamerHead_list.itemRenderer = GamerHeadItem;
            this.gamerHead_list.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onItemTapHandler, this); 
            this.btn_tool.on(egret.TouchEvent.TOUCH_TAP,this.onRemove,this);        
        }

        public onToolClick(){
            SoundManager.getInstance().PlaySound(SoundManager.mClickAudioUrl);
            if(this.grp_tool.visible){
                this.grp_tool.visible = false;
            }else{
                this.grp_tool.visible = true;
            }
        }

        public showGamerInfo(){
			let dataInfo:any[] = [
				// {
				// 	sHeadImg:'https://wx.qlogo.cn/mmopen/vi_32/DR4kWgpzu25U6k1392Dib6icT8xBge8EDD0nARFpLkMbsxYDkHglvxCK6K3oBiajH8pykNsyNxOFVkAFib2d6AlnXA/132',
				// 	sNick:'小A',
                //     sID:'1536452032681',
				// },
				// {
				// 	sHeadImg:'https://wx.qlogo.cn/mmopen/vi_32/DR4kWgpzu25U6k1392Dib6icT8xBge8EDD0nARFpLkMbsxYDkHglvxCK6K3oBiajH8pykNsyNxOFVkAFib2d6AlnXA/132',
				// 	sNick:'小B',
                //     sID:'1536452032634',
				// },
				// {
				// 	sHeadImg:'https://wx.qlogo.cn/mmopen/vi_32/DR4kWgpzu25U6k1392Dib6icT8xBge8EDD0nARFpLkMbsxYDkHglvxCK6K3oBiajH8pykNsyNxOFVkAFib2d6AlnXA/132',
				// 	sNick:'小C',
                //     sID:'1536452032656',
				// }
			];
			let data = $userData.pkRoomVO.gamerList;
			for(let i = 0;i < data.length;i++){
				let id = $userData.account.userid;
				if(data[i].sID !== id.toString())
					dataInfo.push(data[i]);							
			}
			console.log(dataInfo);

            this._listData.source = dataInfo;
            this._listData.refresh();

            this.reduceTime_num.text = $userData.playerVO.toolMap[1].count.toString();
        }
        public onItemTapHandler(e:eui.ItemTapEvent){
            let index = e.itemIndex;
            let opponentID = this._listData.source[index].sID;
            $userData.pkRoomVO.opponentID = opponentID;
            $userData.pkRoomVO.toolID = 1;
            $facade.removeModule(ModuleID.tool);
            $facade.dispatch(NotifyConst.useMinusTimeTool);
        }
        public onRemove(){
            $facade.removeModule(ModuleID.tool);
        }
    }
}
