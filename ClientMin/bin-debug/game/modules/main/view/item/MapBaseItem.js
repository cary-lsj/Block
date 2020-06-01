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
     * 地图 基类
     */
    var MapBaseItem = (function (_super) {
        __extends(MapBaseItem, _super);
        function MapBaseItem() {
            return _super.call(this) || this;
        }
        MapBaseItem.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
        };
        MapBaseItem.prototype.dataChanged = function () {
            var vo = this.data;
            var map = vo.data;
            for (var i = 0; i < map.length; i++) {
                var rowLine = map[i];
                for (var j = 0; j < rowLine.length; j++) {
                    var data = rowLine[j];
                    if (data == 1 /* full */) {
                        this.createSquare(i, j);
                    }
                    if (data == 2 /* obstacles */) {
                        this.createSquare(i, j, "8");
                    }
                }
            }
        };
        MapBaseItem.prototype.createSquare = function (row, col, type) {
            if (type === void 0) { type = ""; }
            var square = new game.Square(type);
            var posisint = { x: col, y: row };
            game.MapUtil.getPixel(posisint, square);
            this.addChild(square);
        };
        return MapBaseItem;
    }(eui.ItemRenderer));
    game.MapBaseItem = MapBaseItem;
    __reflect(MapBaseItem.prototype, "game.MapBaseItem");
})(game || (game = {}));
