var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var game;
(function (game) {
    var NetSender = (function () {
        function NetSender(connect) {
            this._send = connect.send.bind(connect);
        }
        //创建房间
        NetSender.prototype.send_CreateRoom = function () {
            var req = new gameMsg.CreateRoomRequest();
            req.sID = game.GlobalInfo.account;
            var data = new gameMsg.Request();
            data.createRoomRequest = req;
            this.send_Msg(gameMsg.EnumMsg.createroomrequest, data);
        };
        //加入房间
        NetSender.prototype.send_JoinRoom = function (id) {
            var req = new gameMsg.JoinRoomRequest();
            req.sRoomID = id;
            req.sID = game.GlobalInfo.account;
            var data = new gameMsg.Request();
            data.joinRoomRequest = req;
            this.send_Msg(gameMsg.EnumMsg.joinroomrequest, data);
        };
        //离开房间
        NetSender.prototype.send_LeaveRoom = function (id) {
            var req = new gameMsg.LeaveRoomRequest();
            req.sID = game.GlobalInfo.account;
            req.sRoomID = id;
            var data = new gameMsg.Request();
            data.leaveRoomRequest = req;
            this.send_Msg(gameMsg.EnumMsg.leaveroomrequest, data);
        };
        //游戏结束
        NetSender.prototype.send_EndGame = function (id) {
            var req = new gameMsg.EndGameRequest();
            req.sID = game.GlobalInfo.account;
            req.sRoomID = id;
            var data = new gameMsg.Request();
            data.endGameRequest = req;
            this.send_Msg(gameMsg.EnumMsg.endgamerequest, data);
        };
        //游戏开始
        NetSender.prototype.send_StarPkGame = function (id) {
            var req = new gameMsg.StartGameRequest();
            req.sID = game.GlobalInfo.account;
            req.sRoomID = id;
            var data = new gameMsg.Request();
            data.startGameRequest = req;
            this.send_Msg(gameMsg.EnumMsg.startgamerequest, data);
        };
        //自动匹配
        NetSender.prototype.send_MatchGame = function (id) {
            var req = new gameMsg.MatchGameRequest();
            req.sID = game.GlobalInfo.account;
            req.sRoomID = id;
            var data = new gameMsg.Request();
            data.matchGameRequest = req;
            this.send_Msg(gameMsg.EnumMsg.matchgamerequest, data);
        };
        //使用道具
        NetSender.prototype.send_UseTool = function (id) {
            var req = new gameMsg.UseToolRequest();
            req.sID = game.GlobalInfo.account;
            req.goodID = id.toString();
            req.sRoomID = game.$userData.pkRoomVO.id;
            req.sDID = game.$userData.pkRoomVO.opponentID;
            var data = new gameMsg.Request();
            data.useToolRequest = req;
            this.send_Msg(gameMsg.EnumMsg.usetoolrequest, data);
        };
        //放木块
        NetSender.prototype.send_AddBlock = function (portID) {
            var req = new gameMsg.PlayBlockAddRequest();
            req.sID = game.GlobalInfo.account;
            req.sRoomID = game.$userData.pkRoomVO.id;
            req.gateID = portID;
            var data = new gameMsg.Request();
            data.playBlockAddRequest = req;
            this.send_Msg(gameMsg.EnumMsg.playblockaddrequest, data);
        };
        //取消木块
        NetSender.prototype.send_DeleteBlock = function (portID) {
            var req = new gameMsg.PlayBlockDeleteRequest();
            req.sID = game.GlobalInfo.account;
            req.sRoomID = game.$userData.pkRoomVO.id;
            req.gateID = portID;
            var data = new gameMsg.Request();
            data.playBlockDeleteRequest = req;
            this.send_Msg(gameMsg.EnumMsg.playblockdeleterequest, data);
        };
        NetSender.prototype.send_Msg = function (id, req) {
            var msg = new gameMsg.Msg();
            msg.type = id;
            msg.request = req;
            this._send(msg);
        };
        return NetSender;
    }());
    game.NetSender = NetSender;
    __reflect(NetSender.prototype, "game.NetSender");
})(game || (game = {}));
