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
     * 游戏主地图 item
     */
    var MapMainItem = (function (_super) {
        __extends(MapMainItem, _super);
        function MapMainItem() {
            return _super.call(this) || this;
        }
        MapMainItem.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
        };
        MapMainItem.prototype.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var vo = this.data;
            var map = vo.data;
            for (var i = 0; i < map.length - 1; i++) {
                var rowLine = map[i];
                for (var j = 0; j < rowLine.length - 1; j++) {
                    var data = rowLine[j];
                    this.createBorder(i, j);
                }
            }
        };
        MapMainItem.prototype.createBorder = function (row, col) {
            var type = game.MapBorderUtil.getBorderType(row, col);
            if (type == "") {
                return;
            }
            var border = new game.BorderItem();
            var posisint = { x: col, y: row };
            game.MapBorderUtil.getMapBorderPixel(posisint, border);
            border.data = type;
            this.addChild(border);
        };
        return MapMainItem;
    }(game.MapBaseItem));
    game.MapMainItem = MapMainItem;
    __reflect(MapMainItem.prototype, "game.MapMainItem");
})(game || (game = {}));
