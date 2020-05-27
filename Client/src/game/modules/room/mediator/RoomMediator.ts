namespace game{
    export class RoomMediator extends MediatorBase<RoomFullWindow>{

        @InjectProxy(ProxyID.room)
        public _model:RoomProxy;
        private _GamerInfo = $singlon(GamerInfoCFG);
         
        public onRegister(): void {
            super.onRegister();
            this._view._initView();
            // this.updateGamerInfo();
        }
        public setModuleData(state){
            console.log(state);
            if(state === 'wait'){
                this.updateGamerInfo();
                this._view.group_wait.visible = true;
                this._view.group_create_room.visible = false;
            }
        }
        @InterestEvent(RoomEvent.clickBack)
        private onBackClick(e:egret.Event):void{
            this._model.reqLeaveRoom();
        }
        @InterestEvent(RoomEvent.clickStart)
        private clickStart(e:egret.Event): void {
            this._model.reqStarGame();
        }

        @InterestEvent(RoomEvent.clickInvite)
        private clickInvite(e:egret.Event):void{
              this._view.show_roomID.text = $userData.pkRoomVO.id;
        }

        @InterestEvent(RoomEvent.clickCreateRoom)
        private clickCreateRoom(e:egret.Event):void{
              this.createRoom();
        }
        //创建房间
        private createRoom():void{
            if(DEBUG)
                console.log('createRoom');
            this._view.btn_return.visible = true;
            this._model.reqCreateRoom();
        }

        @InterestEvent(RoomEvent.clickMatching)
        private clickMatching(e:egret.Event):void{
              this.MatchingRoom();
        }
        //匹配
        private MatchingRoom():void{
            if(DEBUG)
                console.log('matchingRoom');
            this._model.reqMatchGame();
        }

        @InterestNotify(NotifyConst.updateRoom)
        public updateRoom():void{
            if(DEBUG)
                console.log('展示等待页面');
            this._view.showWait();
            
            
            this.updateGamerInfo();
        }

         @InterestNotify(NotifyConst.createroom)
        public createroom():void{
            if(DEBUG)
                console.log('展示邀请页面');
            if($userData.account.userid.toString() === $userData.pkRoomVO.bossID){
                this._view.btn_return.visible = true;
                this._view.btn_strGame.visible = true;
            }
            this._view.group_invite.visible = true;
            this._view.group_create.visible = false;
            
            this.updateGamerInfo();
        }

        public updateGamerInfo():void{
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
				// },
                // {
				// 	sHeadImg:'https://wx.qlogo.cn/mmopen/vi_32/DR4kWgpzu25U6k1392Dib6icT8xBge8EDD0nARFpLkMbsxYDkHglvxCK6K3oBiajH8pykNsyNxOFVkAFib2d6AlnXA/132',
				// 	sNick:'小C',
                //     sID:'1536452032656',
				// }
			];
            dataInfo = $userData.pkRoomVO.gamerList;
            this._view.updateGamer(dataInfo);
            if($userData.pkRoomVO.gamerList.length === 1){
                this._view.btn_strGame.currentState = 'disabled';
            }
        }

        //开始游戏通知
        @InterestNotify(NotifyConst.pkGameStart)
        public pkGameStart():void{
            let id = $userData.pkRoomVO.playProtPKId;
            let port = $userData.portList.getPort(id);
            let gamePortVO = $userData.gamePortVO = new GamePortVO();
            gamePortVO.update(port);
            gamePortVO.playProId=id;
            $userData.pkRoomVO.playProtMoodNum = gamePortVO.curPort.moodListVO.length;

            $facade.removeModule(ModuleID.room);
            $facade.addModule(ModuleID.pkmain);
        }

        @InterestEvent(RoomEvent.clickJionRoom)
        private clickJionRoom(e:egret.Event):void{
            let RoomID = this._view.text_roomID.text;
            this._model.reqJoinRoom(RoomID);
        }
         @InterestEvent(RoomEvent.clickStarGame)
        private clickStarGame(e:egret.Event):void{
            this._model.reqStarGame();
           
             SoundManager.getInstance().playPKMusic();
            //  SoundManager.getInstance().PlaySound(SoundManager.mClockAudioUrl);
             SoundManager.getInstance().stopBgMusic();
        }

        @InterestNotify(NotifyConst.updateGamer)
        public updateGamer():void{
            this.updateGamerInfo();
        }
        @InterestNotify(NotifyConst.toolUpdate)
        public toolUpdate():void{
            this._view.updateTool();
        }
    }
}