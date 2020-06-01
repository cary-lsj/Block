var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var game;
(function (game) {
    /**
     * 登录代理
     * @author wizardc
     */
    var LoginProxy = (function (_super) {
        __extends(LoginProxy, _super);
        function LoginProxy() {
            return _super.call(this, 1 /* login */) || this;
        }
        LoginProxy.prototype.reqLogin = function () {
            // this._senderHttp.send_CLogin_Login();
            this.loginresponse();
        };
        LoginProxy.prototype.loginresponse = function (e) {
            var data = {
                gates: [],
                nTotalGate: 0,
                nTotalStar: 0,
                nUserID: "123",
                sNick: "嗷嗷嗷",
                gold: 123,
                money: 123,
                sHeadimg: ""
            };
            game.$userData.portList.updatePorts(data.gates, data.nTotalGate);
            game.$userData.portList.updateStarNum(data.nTotalStar);
            this.updatePlayer(data);
            game.$facade.addModule(game.ModuleID.menu);
            var port = game.getItem("port");
            game.$userData.portList.setPort(port);
        };
        LoginProxy.prototype.updatePlayer = function (data) {
            var player = game.$userData.playerVO = new game.PlayerVO();
            player.sID = data.nUserID;
            player.sNick = data.sNick;
            player.sHeadImg = data.sHeadimg;
            player.nGold = data.gold;
            player.nMoney = data.money;
            player.nTotalGate = data.nTotalGate;
            player.nTotalStar = data.nTotalStar;
            var tools = player.toolList = [];
            var toolMap = player.toolMap = [];
            var toolList = game.$singlon(game.GoodsCFG).getGoodList();
            for (var _i = 0, toolList_1 = toolList; _i < toolList_1.length; _i++) {
                var tool = toolList_1[_i];
                var vo = new game.ToolVO();
                vo.id = tool.id;
                tools.push(vo);
                toolMap[vo.id] = vo;
            }
            player.updateTool(data.goods);
        };
        __decorate([
            game.InterestMessage(gameMsg.EnumMsg.loginresponse)
        ], LoginProxy.prototype, "loginresponse", null);
        return LoginProxy;
    }(game.ProxyBase));
    game.LoginProxy = LoginProxy;
    __reflect(LoginProxy.prototype, "game.LoginProxy");
})(game || (game = {}));
