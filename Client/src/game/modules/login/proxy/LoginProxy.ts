namespace game {
    /**
     * 登录代理
     * @author wizardc
     */
    export class LoginProxy extends ProxyBase {
        public constructor() {
            super(ProxyID.login);
        }

        public reqLogin(): void {
            // this._senderHttp.send_CLogin_Login();
            this.loginresponse();
        }

        @InterestMessage(gameMsg.EnumMsg.loginresponse)
        private loginresponse(e?: egret.Event) {

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
            // let data = e.data.response;
            $userData.portList.updatePorts(data.gates, data.nTotalGate);
            $userData.portList.updateStarNum(data.nTotalStar);

            //最后激活目录模块
            let port = $userData.portList.getPort(1);
            let gamePortVO = $userData.gamePortVO = new GamePortVO();
            gamePortVO.update(port);

            this.updatePlayer(data)

            $facade.addModule(ModuleID.menu);
        }
        private updatePlayer(data) {
            
            let player = $userData.playerVO = new PlayerVO();
            player.sID = data.nUserID;
            player.sNick = data.sNick;
            player.sHeadImg = data.sHeadimg;
            player.nGold = data.gold;
            player.nMoney = data.money;
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
            player.updateTool(data.goods);
        }
    }
}
