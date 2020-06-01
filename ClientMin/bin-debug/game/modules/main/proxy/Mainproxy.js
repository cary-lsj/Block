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
     * 游戏代理
     */
    var MainProxy = (function (_super) {
        __extends(MainProxy, _super);
        function MainProxy() {
            return _super.call(this, 5 /* main */) || this;
        }
        MainProxy.prototype.gamebegin = function () {
            // this._senderHttp.send_Play_Begin($userData.gamePortVO.playProId);
        };
        MainProxy.prototype.playbeginresponse = function (e) {
            var data = e.data;
            game.$userData.portList.updateKeyNum(data.response.nPrompt);
        };
        MainProxy.prototype.gameend = function () {
            // this._senderHttp.send_Play_End($userData.gamePortVO.playProId);
            this.playendresponse();
        };
        MainProxy.prototype.playendresponse = function (e) {
            // let data = e.data;
            var data = {
                response: {
                    nTotalStar: +game.$userData.portList.starNum + 3,
                    nTopStar: 3
                }
            };
            game.$userData.portList.updateStarNum(data.response.nTotalStar);
            var id = game.$userData.gamePortVO.playProId;
            game.$userData.portList.updatePort(id, data.response.nTopStar);
            // $facade.dispatch(NotifyConst.updatePortSart, true);
            game.$facade.addModule(game.ModuleID.win);
            game.$userData.portList.setPort(id);
        };
        MainProxy.prototype.userprompt = function () {
            this._senderHttp.send_Use_Prompt();
        };
        MainProxy.prototype.usepromptresponse = function (e) {
            var data = e.data;
        };
        __decorate([
            game.InterestMessage(gameMsg.EnumMsg.playbeginresponse)
        ], MainProxy.prototype, "playbeginresponse", null);
        __decorate([
            game.InterestMessage(gameMsg.EnumMsg.playendresponse)
        ], MainProxy.prototype, "playendresponse", null);
        __decorate([
            game.InterestMessage(gameMsg.EnumMsg.usepromptresponse)
        ], MainProxy.prototype, "usepromptresponse", null);
        return MainProxy;
    }(game.ProxyBase));
    game.MainProxy = MainProxy;
    __reflect(MainProxy.prototype, "game.MainProxy");
})(game || (game = {}));
