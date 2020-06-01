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
    /**
     * 地图 边框
     */
    var BorderItem = (function (_super) {
        __extends(BorderItem, _super);
        function BorderItem() {
            return _super.call(this) || this;
        }
        BorderItem.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
        };
        BorderItem.prototype.dataChanged = function () {
            this.currentState = this.data;
        };
        return BorderItem;
    }(eui.ItemRenderer));
    game.BorderItem = BorderItem;
    __reflect(BorderItem.prototype, "game.BorderItem");
})(game || (game = {}));
