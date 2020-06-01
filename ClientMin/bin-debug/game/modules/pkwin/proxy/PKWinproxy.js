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
    var PKWinproxy = (function (_super) {
        __extends(PKWinproxy, _super);
        function PKWinproxy() {
            var _this = _super.call(this, 8 /* pkwin */) || this;
            _this.balanceInfo = [];
            return _this;
        }
        PKWinproxy.prototype.reqStarGame = function () {
            var roomID = game.$userData.pkRoomVO.id;
            this._sender.send_StarPkGame(roomID);
        };
        PKWinproxy.prototype.endgamenotify = function (e) {
            var data = e.data.endGameNotify;
            this.balanceInfo = data.rankEndGameDatas;
            game.$facade.dispatch(19 /* pkGameEnd */);
        };
        PKWinproxy.prototype.reqLeaveRoom = function () {
            console.log('离开房间');
            this._sender.send_LeaveRoom(game.$userData.pkRoomVO.id);
        };
        __decorate([
            game.InterestMessage(gameMsg.EnumMsg.endgamenotify)
        ], PKWinproxy.prototype, "endgamenotify", null);
        return PKWinproxy;
    }(game.ProxyBase));
    game.PKWinproxy = PKWinproxy;
    __reflect(PKWinproxy.prototype, "game.PKWinproxy");
})(game || (game = {}));
