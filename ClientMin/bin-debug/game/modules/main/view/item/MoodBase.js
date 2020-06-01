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
     * 木块基类
     */
    var MoodBase = (function (_super) {
        __extends(MoodBase, _super);
        function MoodBase() {
            return _super.call(this) || this;
        }
        MoodBase.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
        };
        MoodBase.prototype.dataChanged = function () {
            var vo = this.data;
            var type = vo.type + "";
            var map = vo.data;
            for (var i = 0; i < map.length; i++) {
                var rowLine = map[i];
                for (var j = 0; j < rowLine.length; j++) {
                    var data = rowLine[j];
                    if (data == 1 /* full */) {
                        this._createSquare(i, j, type);
                    }
                }
            }
        };
        MoodBase.prototype._createSquare = function (row, col, type) {
            var square = new game.Square(type);
            var posisint = { x: col, y: row };
            game.MapUtil.getMoodPixel(posisint, square);
            this.addChild(square);
        };
        return MoodBase;
    }(game.MapBaseItem));
    game.MoodBase = MoodBase;
    __reflect(MoodBase.prototype, "game.MoodBase");
})(game || (game = {}));
