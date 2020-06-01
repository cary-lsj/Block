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
     * 商店代理
     */
    var ShopProxy = (function (_super) {
        __extends(ShopProxy, _super);
        function ShopProxy() {
            return _super.call(this, 10 /* shop */) || this;
        }
        ShopProxy.prototype.reqToolBuy = function (goods) {
            this._senderHttp.send_BuyTool(goods);
        };
        ShopProxy.prototype.buyresponse = function (e) {
            game.$facade.addModule(game.ModuleID.msg, undefined, '购买成功');
            game.$facade.dispatch(28 /* buyToolSuccess */);
            var data = e.data.response;
            game.$userData.playerVO.nMoney = data.newAssets.nMoney;
            game.$userData.playerVO.nGold = data.newAssets.nGold;
            game.$userData.playerVO.updateTool(data.newAssets.sAssets);
        };
        __decorate([
            game.InterestMessage(gameMsg.EnumMsg.buyresponse)
        ], ShopProxy.prototype, "buyresponse", null);
        return ShopProxy;
    }(game.ProxyBase));
    game.ShopProxy = ShopProxy;
    __reflect(ShopProxy.prototype, "game.ShopProxy");
})(game || (game = {}));
