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
    var DiamondItem = (function (_super) {
        __extends(DiamondItem, _super);
        function DiamondItem() {
            return _super.call(this) || this;
        }
        DiamondItem.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
        };
        DiamondItem.prototype.dataChanged = function () {
            var data = this.data;
            if (data.check) {
                this.currentState = 'selected';
            }
            else {
                this.currentState = 'normal';
            }
            this.item_num.text = data.num;
            this.item_money.text = data.rmb;
        };
        return DiamondItem;
    }(eui.ItemRenderer));
    game.DiamondItem = DiamondItem;
    __reflect(DiamondItem.prototype, "game.DiamondItem");
})(game || (game = {}));
