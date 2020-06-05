namespace game {
    /**
     * 登录代理
     * @author cary
     */
    export class LoginProxy extends ProxyBase {
        public constructor() {
            super(ProxyID.login);
        }

        public reqLogin(): void {
            LogUtil.enterGame();
            this._senderHttp.send_CLogin_Login();
            // this.loginresponse();

            let port = getItem("port");
            $userData.portList.setPort(port);
            let data = {
                gates: [],
                nTotalGate: 0,
                nTotalStar: 0,
                nUserID: "123",
                sNick: "嗷嗷嗷",
                gold: 123,
                money: 123,
                sHeadimg: ""
            }
            this.updatePlayer(data);
            $facade.addModule(ModuleID.menu);
        }

        // @InterestMessage(gameMsg.EnumMsg.loginresponse)
        private loginresponse(e?: egret.Event) {
            let msg = e.data as gameMsg.Msg;
            let data = msg.response.loginResponse
            $userData.portList.updatePorts(data.gates, data.nTotalGate);
            $userData.portList.updateStarNum(data.nTotalStar);
            this.updatePlayer(data);
            $facade.addModule(ModuleID.menu);
        }

        private updatePlayer(data: gameMsg.ILoginResponse) {

            let player = $userData.playerVO;

            player.sID = GlobalInfo.account;
            player.sNick = js_userInfo.nickName;
            player.sHeadImg = js_userInfo.avatarUrl;
            player.nGold = 0;
            player.nMoney = 0;
            player.nTotalGate = data.nTotalGate;
            player.nTotalStar = data.nTotalStar;
            let tools = player.toolList = []
            let toolMap = player.toolMap = []

            let toolList = $singlon(GoodsCFG).getGoodList();
            for (let tool of toolList) {
                let vo = new ToolVO();
                vo.id = tool.id;
                tools.push(vo);
                toolMap[vo.id] = vo;
            }
            // player.updateTool(data.goods);
        }
    }
}
