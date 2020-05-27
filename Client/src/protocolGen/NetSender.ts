namespace game {
	export class NetSender {
		private _send: (netVO: any) => void;

		public constructor(connect: ServerConnect) {
			this._send = connect.send.bind(connect);
		}
		//创建房间
		public send_CreateRoom(): void {
			let req = new gameMsg.CreateRoomRequest();
			req.sID = GlobalInfo.account;
			let data = new gameMsg.Request();
			data.createRoomRequest = req;
			this.send_Msg(gameMsg.EnumMsg.createroomrequest, data);
		}
		//加入房间
		public send_JoinRoom(id: string): void {
			let req = new gameMsg.JoinRoomRequest();
			req.sRoomID = id;
			req.sID = GlobalInfo.account;
			let data = new gameMsg.Request();
			data.joinRoomRequest = req;
			this.send_Msg(gameMsg.EnumMsg.joinroomrequest, data);
		}
		//离开房间
		public send_LeaveRoom(id: string): void {
			let req = new gameMsg.LeaveRoomRequest();
			req.sID = GlobalInfo.account;
			req.sRoomID = id;
			let data = new gameMsg.Request();
			data.leaveRoomRequest = req;
			this.send_Msg(gameMsg.EnumMsg.leaveroomrequest, data);
		}
		//游戏结束
		public send_EndGame(id: string): void {
			let req = new gameMsg.EndGameRequest();
			req.sID = GlobalInfo.account;
			req.sRoomID = id;
			let data = new gameMsg.Request();
			data.endGameRequest = req;
			this.send_Msg(gameMsg.EnumMsg.endgamerequest, data);
		}
		//游戏开始
		public send_StarPkGame(id:string):void{
			let req = new gameMsg.StartGameRequest();
			req.sID = GlobalInfo.account;
			req.sRoomID = id;
			let data = new gameMsg.Request();
			data.startGameRequest = req;
			this.send_Msg(gameMsg.EnumMsg.startgamerequest, data);
		}
		//自动匹配
		public send_MatchGame(id:string):void{
			let req = new gameMsg.MatchGameRequest();
			req.sID = GlobalInfo.account;
			req.sRoomID = id;
			let data = new gameMsg.Request();
			data.matchGameRequest = req;
			this.send_Msg(gameMsg.EnumMsg.matchgamerequest, data);
		}
		//使用道具
		public send_UseTool(id:number):void{
			let req = new gameMsg.UseToolRequest();
			req.sID = GlobalInfo.account;
			req.goodID = id.toString();
			req.sRoomID = $userData.pkRoomVO.id;
			req.sDID = $userData.pkRoomVO.opponentID;
			let data = new gameMsg.Request();
			data.useToolRequest = req;
			this.send_Msg(gameMsg.EnumMsg.usetoolrequest, data);
		}
		//放木块
		public send_AddBlock(portID):void{
			let req = new gameMsg.PlayBlockAddRequest();
			req.sID = GlobalInfo.account;
			req.sRoomID = $userData.pkRoomVO.id;
			req.gateID = portID;
			let data = new gameMsg.Request();
			data.playBlockAddRequest = req;
			this.send_Msg(gameMsg.EnumMsg.playblockaddrequest, data);
		}
		//取消木块
		public send_DeleteBlock(portID):void{
			let req = new gameMsg.PlayBlockDeleteRequest();
			req.sID = GlobalInfo.account;
			req.sRoomID = $userData.pkRoomVO.id;
			req.gateID = portID;
			let data = new gameMsg.Request();
			data.playBlockDeleteRequest = req;
			this.send_Msg(gameMsg.EnumMsg.playblockdeleterequest, data);
		}
		private send_Msg(id: gameMsg.EnumMsg, req: gameMsg.Request) {
			let msg = new gameMsg.Msg();
			msg.type = id;
			msg.request = req;
			this._send(msg);
		}
	}
}