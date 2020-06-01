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
    var GamerHeadItem = (function (_super) {
        __extends(GamerHeadItem, _super);
        function GamerHeadItem() {
            return _super.call(this) || this;
        }
        GamerHeadItem.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
            this.drawMask(this.headImg_item0);
        };
        GamerHeadItem.prototype.drawMask = function (headImg_0) {
            var circle_one = new egret.Shape();
            circle_one.graphics.beginFill(0x0000ff);
            circle_one.graphics.drawCircle(28, 28, 25);
            circle_one.graphics.endFill();
            this.addChild(circle_one);
            headImg_0.mask = circle_one;
        };
        return GamerHeadItem;
    }(eui.ItemRenderer));
    game.GamerHeadItem = GamerHeadItem;
    __reflect(GamerHeadItem.prototype, "game.GamerHeadItem");
})(game || (game = {}));
