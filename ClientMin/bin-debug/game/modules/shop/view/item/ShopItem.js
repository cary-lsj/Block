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
var game;
(function (game) {
    var ShopItem = (function (_super) {
        __extends(ShopItem, _super);
        function ShopItem() {
            return _super.call(this) || this;
        }
        ShopItem.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
            // this.on(egret.TouchEvent.TOUCH_TAP, this.onChecked,this);
        };
        ShopItem.prototype.dataChanged = function () {
            var data = this.data;
            this.updateState(data);
            if (data.check) {
                this.currentState = 'selected';
            }
            else {
                this.currentState = 'normal';
            }
            this.item_num.text = data.num;
            if (data.money === 0) {
                this.item_money.text = data.gold;
                this.flage_gold.visible = true;
            }
            else {
                this.item_money.text = data.money;
                this.flage_money.visible = true;
            }
        };
        ShopItem.prototype.updateState = function (data) {
            switch (data.toolId) {
                case 0:
                    this.add_time.visible = true;
                case 1:
                    this.reduce_time.visible = true;
            }
        };
        return ShopItem;
    }(eui.ItemRenderer));
    game.ShopItem = ShopItem;
    __reflect(ShopItem.prototype, "game.ShopItem");
})(game || (game = {}));
