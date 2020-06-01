namespace game {
	export class HttpSender {
		private _send: (netVO: any, route: string) => void;

		public constructor(connect: HttpRequest) {
			this._send = connect.send.bind(connect);
		}
		public send_CLogin_Login(): void {
			let req = { sID: "", sHeadimg: "", sNick: "" };
			req.sID = GlobalInfo.account;
			req.sHeadimg = js_userInfo.avatarUrl;
			req.sNick = js_userInfo.nickName;

			this.send_Msg(gameMsg.EnumMsg.loginrequest, req, Route.loginwx);
		}

		public send_Play_Begin(id: number): void {
			let req = { sID: "", gateID: id };
			req.sID = $userData.account.userid + "";
			this.send_Msg(gameMsg.EnumMsg.playbeginrequest, req, Route.palybegin);
		}

		public send_Play_End(id: number): void {
			let req = { sID: "", gateID: id };
			req.sID = $userData.account.userid + "";
			this.send_Msg(gameMsg.EnumMsg.playendrequest, req, Route.palyend);
		}

		public send_See_Ad(id: number): void {
			let req = { sID: "", adID: id };
			req.sID = $userData.account.userid + "";
			this.send_Msg(gameMsg.EnumMsg.seeadrequest, req, Route.seead);
		}

		public send_Use_Prompt(): void {
			let req = { sID: "" };
			req.sID = $userData.account.userid + "";
			this.send_Msg(gameMsg.EnumMsg.usepromptrequest, req, Route.useprompt);
		}

		public send_Rank(): void {
			let req = { sID: "" };
			req.sID = $userData.account.userid + "";
			this.send_Msg(gameMsg.EnumMsg.rankrequest, req, Route.rank);
		}
		//购买道具
		public send_BuyTool(goods):void{
			let req = { goods:[], nUserID:""};
			req.goods = goods;
			req.nUserID = $userData.account.userid;
			this.send_Msg(gameMsg.EnumMsg.buyrequest,req,Route.buy);
		}

		private send_Msg(id: gameMsg.EnumMsg, req: {}, route: string) {
			let msg = { type: id, request: {} };
			msg["request"] = req;
			this._send(msg, route);
		}
	}
}