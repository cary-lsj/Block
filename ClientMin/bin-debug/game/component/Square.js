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
     * 测试 item
     */
    var Square = (function (_super) {
        __extends(Square, _super);
        function Square(type) {
            if (type === void 0) { type = ""; }
            var _this = _super.call(this) || this;
            _this.Type = type;
            _this.init();
            return _this;
        }
        Square.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
        };
        Square.prototype.dataChanged = function () {
        };
        Square.prototype.init = function () {
            this.currentState = this.Type;
        };
        return Square;
    }(eui.ItemRenderer));
    game.Square = Square;
    __reflect(Square.prototype, "game.Square");
})(game || (game = {}));
