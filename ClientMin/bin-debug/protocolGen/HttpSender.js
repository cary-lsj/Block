var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var game;
(function (game) {
    var HttpSender = (function () {
        function HttpSender(connect) {
            this._send = connect.send.bind(connect);
        }
        HttpSender.prototype.send_CLogin_Login = function () {
            var req = { sID: "", sHeadimg: "", sNick: "" };
            req.sID = game.GlobalInfo.account;
            req.sHeadimg = js_userInfo.avatarUrl;
            req.sNick = js_userInfo.nickName;
            this.send_Msg(gameMsg.EnumMsg.loginrequest, req, game.Route.loginwx);
        };
        HttpSender.prototype.send_Play_Begin = function (id) {
            var req = { sID: "", gateID: id };
            req.sID = game.$userData.account.userid + "";
            this.send_Msg(gameMsg.EnumMsg.playbeginrequest, req, game.Route.palybegin);
        };
        HttpSender.prototype.send_Play_End = function (id) {
            var req = { sID: "", gateID: id };
            req.sID = game.$userData.account.userid + "";
            this.send_Msg(gameMsg.EnumMsg.playendrequest, req, game.Route.palyend);
        };
        HttpSender.prototype.send_See_Ad = function (id) {
            var req = { sID: "", adID: id };
            req.sID = game.$userData.account.userid + "";
            this.send_Msg(gameMsg.EnumMsg.seeadrequest, req, game.Route.seead);
        };
        HttpSender.prototype.send_Use_Prompt = function () {
            var req = { sID: "" };
            req.sID = game.$userData.account.userid + "";
            this.send_Msg(gameMsg.EnumMsg.usepromptrequest, req, game.Route.useprompt);
        };
        HttpSender.prototype.send_Rank = function () {
            var req = { sID: "" };
            req.sID = game.$userData.account.userid + "";
            this.send_Msg(gameMsg.EnumMsg.rankrequest, req, game.Route.rank);
        };
        //购买道具
        HttpSender.prototype.send_BuyTool = function (goods) {
            var req = { goods: [], nUserID: "" };
            req.goods = goods;
            req.nUserID = game.$userData.account.userid;
            this.send_Msg(gameMsg.EnumMsg.buyrequest, req, game.Route.buy);
        };
        HttpSender.prototype.send_Msg = function (id, req, route) {
            var msg = { type: id, request: {} };
            msg["request"] = req;
            this._send(msg, route);
        };
        return HttpSender;
    }());
    game.HttpSender = HttpSender;
    __reflect(HttpSender.prototype, "game.HttpSender");
})(game || (game = {}));
