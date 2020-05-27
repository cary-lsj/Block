namespace game {
    /**
     * 游戏代理
     */
    export class PkMainproxy extends ProxyBase {
        private roomId = getItem('roomId');

        public constructor() {
            super(ProxyID.pkmain);
        }
        public Msg = '';
        public sID:string;
        public playBlockIsAdd:boolean;
        public sDID:string;
        public pkgamebegin() {
			//待修改
            // this._sender.send_JoinRoom("$userData.account.accountID");
        }
		//待修改
        // @InterestMessage(gameMsg.EnumMsg.playbeginresponse)
        // private playbeginresponse(e?: egret.Event) {
        //     let data = e.data;
        //     $userData.portList.updateKeyNum(data.response.nPrompt);
        // }

		// //待修改
        // @InterestMessage(gameMsg.EnumMsg.playendresponse)
        // private playendresponse(e?: egret.Event) {
        //     let data = e.data;
        //     $userData.portList.updateStarNum(data.response.nTotalStar);
        //     let id = $userData.gamePortVO.playProId;
        //     $userData.portList.updatePort(id, data.response.nTopStar);
        //     // $facade.dispatch(NotifyConst.updatePortSart, true);
        //     $facade.addModule(ModuleID.win);
                
        // }

        public userprompt(){
            this._senderHttp.send_Use_Prompt();
        }
         @InterestMessage(gameMsg.EnumMsg.usepromptresponse)
        private usepromptresponse(e?: egret.Event) {
            let data = e.data;
        }
        public reqEndGame(){
            let roomId = getItem('roomId');
            console.log(roomId);
            this._sender.send_EndGame($userData.pkRoomVO.id);
        }

        @InterestMessage(gameMsg.EnumMsg.endgameresponse)
        private endgameresponse(e?:egret.Event){
            let data = e.data;
            console.log('游戏结束 响应');
            let balanceInfo = {
                type:1,//个人
                Info:data.endGameResponse.nRank
            }
            $facade.removeModule(ModuleID.pkmain);
            $facade.addModule(ModuleID.pkwin,undefined,balanceInfo);
        }
        // //游戏结束 通知
        // @InterestMessage(gameMsg.EnumMsg.endgamenotify)
        // private endgamenotify(e?:egret.Event){
        //     let data = e.data.endGameNotify;
        //     let balanceInfo = {};
        //     let Info = [];
        //     balanceInfo = {
        //         type:2,//列表
        //         Info:data.rankEndGameDatas
        //     }
        //     console.log('游戏结束 通知');
        //     console.log(data);
        //     $facade.dispatch(NotifyConst.pkGameEnd);
        //     $facade.removeModule(ModuleID.pkmain);
        //     $facade.addModule(ModuleID.pkwin,undefined,balanceInfo);
        // }

        //游戏超时 通知
        @InterestMessage(gameMsg.EnumMsg.overtimenotify)
        private overtimenotify(e?:egret.Event){
            let data = e.data;
            console.log('游戏超时 通知');
            let balanceInfo = {
                type:1,//个人
                Info:data.overTimeNotify.nRank
            }
            $facade.removeModule(ModuleID.pkmain);
            $facade.addModule(ModuleID.pkwin,undefined,balanceInfo);
        }

        //游戏时钟
        @InterestMessage(gameMsg.EnumMsg.gametimeticknotify)
        private gametimeticknotify(e?:egret.Event){
            let data = e.data;
            let Timer = data.gameTimeTickNotify.nLeft;
            $userData.pkRoomVO.updataTimeTick(Timer);
            console.log('时钟启动'+Timer);
        }

        public reqUseTool(id:number){
            this._sender.send_UseTool(id);
        }

        @InterestMessage(gameMsg.EnumMsg.usetoolnotify)
        private usetoolnotify(e?:egret.Event){
            let data = e.data;
            let sID = data.useToolNotify.sID;
            let goodID = data.useToolNotify.goodID;
            let sDID = data.useToolNotify.sDID;
            let GamerList = $userData.pkRoomVO.gamerList;
            let sID_name = '';
            let sDID_name = '';
            let goods = $singlon(GoodsCFG);
            let good = goods.getGoodCFG(goodID);
            let goodName = good.desc;
            let length = GamerList.length;
            for(let i = 0;i < length;i++){
                if(GamerList[i].sID === sID)
                    sID_name = GamerList[i].sNick + sID;
                if(GamerList[i].sID === sDID)
                    sDID_name = GamerList[i].sNick + sDID;
            }
            if(sDID === sID)
                this.Msg = sDID_name+'使用了'+goodName+'道具';
            else{
                if($userData.account.userid === sID)
                    sID_name = '我';
                if($userData.account.userid === sDID)
                    sDID_name = '我';
                console.log(sID_name+'对'+sDID_name+'使用了'+goodName+'道具');
                this.Msg = sID_name+'对'+sDID_name+'使用了'+goodName+'道具';
            }
            this.sDID = sDID;
            $facade.dispatch(NotifyConst.updateGameSituation);
        }
        @InterestMessage(gameMsg.EnumMsg.usetoolresponse)
        private usetoolresponse(e?:egret.Event){
            let data = e.data;
            this.Msg = '使用道具成功';
            let toolNum = $userData.playerVO.toolMap[$userData.pkRoomVO.toolID].count - 1;
            toolNum = toolNum >= 0 ? toolNum : 0;
            let tool = new ToolVO();
            tool.id = $userData.pkRoomVO.toolID;
            tool.count = toolNum;
            $userData.playerVO.updateOneTool(tool);
            this.sDID = $userData.pkRoomVO.opponentID;
            $facade.dispatch(NotifyConst.updateGameSituation);
        }

        public reqPlayBlockAdd(){
            let portID = $userData.pkRoomVO.playProtPKId;
            this._sender.send_AddBlock(portID);
        }
        @InterestMessage(gameMsg.EnumMsg.playblockaddresponse)
        private playblockaddresponse(e?:egret.Event){
            if(DEBUG){
                console.log('add发送成功');
            }
            this.sID = $userData.playerVO.sID;
            this.playBlockIsAdd = true;
            $facade.dispatch(NotifyConst.moveMoodPosition);
        }
        public reqPlayBlockDelete(){
            let portID = $userData.pkRoomVO.playProtPKId;
            this._sender.send_DeleteBlock(portID);
        }
         @InterestMessage(gameMsg.EnumMsg.playblockdeleteresponse)
        private playblockdeleteresponse(e?:egret.Event){
            if(DEBUG){
                console.log('delete发送成功');
            }
            this.sID = $userData.playerVO.sID;
            this.playBlockIsAdd = false;
            $facade.dispatch(NotifyConst.moveMoodPosition);
        }
        

        @InterestMessage(gameMsg.EnumMsg.playblocknotify)
        private playblockdeletenotify(e?:egret.Event){
            let data = e.data;
            let sRoomID = data.playBlockNotify.sRoomID;
            this.sID = data.playBlockNotify.sID;
            this.playBlockIsAdd = data.playBlockNotify.isAdd;
            $facade.dispatch(NotifyConst.moveMoodPosition);

        }
    }
}