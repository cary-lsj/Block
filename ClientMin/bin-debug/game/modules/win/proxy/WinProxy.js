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
     * 胜利代理
     */
    var WinProxy = (function (_super) {
        __extends(WinProxy, _super);
        function WinProxy() {
            return _super.call(this, 3 /* win */) || this;
        }
        WinProxy.prototype.senSeeAd = function () {
            this._senderHttp.send_See_Ad(1);
        };
        WinProxy.prototype.seeadresponse = function (e) {
            var data = e.data;
            // console.log(data)
            game.$userData.portList.updateKeyNum(data.response.nPrompt);
            game.$facade.addModule(game.ModuleID.ad);
        };
        __decorate([
            game.InterestMessage(gameMsg.EnumMsg.seeadresponse)
        ], WinProxy.prototype, "seeadresponse", null);
        return WinProxy;
    }(game.ProxyBase));
    game.WinProxy = WinProxy;
    __reflect(WinProxy.prototype, "game.WinProxy");
})(game || (game = {}));
