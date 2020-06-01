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
     * 商店中介
     */
    var ShopMediator = (function (_super) {
        __extends(ShopMediator, _super);
        function ShopMediator() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ShopMediator.prototype.onRegister = function () {
            _super.prototype.onRegister.call(this);
            this._view.getListData();
        };
        ShopMediator.prototype.click = function (e) {
            game.SoundManager.getInstance().PlaySound(game.SoundManager.mClickAudioUrl);
            // SoundManager.getInstance().playClick();
        };
        ShopMediator.prototype.clickBack = function (e) {
            game.SoundManager.getInstance().PlaySound(game.SoundManager.mClickAudioUrl);
            game.$facade.addModule(game.ModuleID.menu);
        };
        ShopMediator.prototype.clickToolBuy = function (e) {
            game.SoundManager.getInstance().PlaySound(game.SoundManager.mClickAudioUrl);
            if (this._view.isToolCheckedFlage) {
                var index = this._view._toolBuyIndex;
                var data = this._view._SetMealCFG.getSetMealCFG(index);
                var dataObj = {
                    "nID": data.toolId,
                    "nCount": data.num
                };
                var dataArr = [];
                dataArr.push(dataObj);
                this.model.reqToolBuy(dataArr);
            }
            else {
                game.$facade.addModule(game.ModuleID.msg, undefined, '请选择要购买的套餐');
            }
            // $facade.addModule(ModuleID.shoppop);
        };
        ShopMediator.prototype.clickDiamondBuy = function (e) {
            game.SoundManager.getInstance().PlaySound(game.SoundManager.mClickAudioUrl);
            if (this._view.isDiamondCheckedFlage) {
                var index = this._view._diamondBuyIndex;
                var data = this._view._SetMealCFG.getDiamondCFG(index);
            }
            else {
                game.$facade.addModule(game.ModuleID.msg, undefined, '请选择要购买的个数');
            }
        };
        ShopMediator.prototype.buyToolSuccess = function () {
            this._view.getListData();
            this._view.total_money.text = '0';
        };
        __decorate([
            game.InjectProxy(10 /* shop */)
        ], ShopMediator.prototype, "model", void 0);
        __decorate([
            game.InterestEvent(0 /* click */)
        ], ShopMediator.prototype, "click", null);
        __decorate([
            game.InterestEvent(3 /* clickBack */)
        ], ShopMediator.prototype, "clickBack", null);
        __decorate([
            game.InterestEvent(1 /* clickToolBuy */)
        ], ShopMediator.prototype, "clickToolBuy", null);
        __decorate([
            game.InterestEvent(2 /* clickDiamondBuy */)
        ], ShopMediator.prototype, "clickDiamondBuy", null);
        __decorate([
            game.InterestNotify(28 /* buyToolSuccess */)
        ], ShopMediator.prototype, "buyToolSuccess", null);
        return ShopMediator;
    }(game.MediatorBase));
    game.ShopMediator = ShopMediator;
    __reflect(ShopMediator.prototype, "game.ShopMediator");
})(game || (game = {}));
