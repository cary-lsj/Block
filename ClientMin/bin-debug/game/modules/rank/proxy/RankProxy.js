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
     * 排行榜代理
     */
    var RankProxy = (function (_super) {
        __extends(RankProxy, _super);
        function RankProxy() {
            return _super.call(this, 4 /* rank */) || this;
        }
        RankProxy.prototype.reqRank = function () {
            this._senderHttp.send_Rank();
        };
        /** 监听 返回请求 */
        RankProxy.prototype.rankresponse = function (e) {
            var data = e.data;
            var dataArr = data.response.rankDatas;
            this._dataArr = dataArr;
            game.$facade.dispatch(13 /* rankUpdate */);
        };
        RankProxy.prototype.getDataArr = function () {
            return this._dataArr;
        };
        __decorate([
            game.InterestMessage(gameMsg.EnumMsg.rankresponse)
        ], RankProxy.prototype, "rankresponse", null);
        return RankProxy;
    }(game.ProxyBase));
    game.RankProxy = RankProxy;
    __reflect(RankProxy.prototype, "game.RankProxy");
})(game || (game = {}));
