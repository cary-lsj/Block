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
    var StarsItem = (function (_super) {
        __extends(StarsItem, _super);
        function StarsItem() {
            return _super.call(this) || this;
        }
        StarsItem.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
        };
        StarsItem.prototype.dataChanged = function () {
            var state = this.data;
            switch (state) {
                case 0 /* owen */:
                    this.currentState = "owen";
                    break;
                case 1 /* unowen */:
                    this.currentState = "unowen";
                    break;
            }
        };
        return StarsItem;
    }(eui.ItemRenderer));
    game.StarsItem = StarsItem;
    __reflect(StarsItem.prototype, "game.StarsItem");
})(game || (game = {}));
