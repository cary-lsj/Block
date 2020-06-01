var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
// TypeScript file
var game;
(function (game) {
    var GoodsCFG = (function () {
        function GoodsCFG() {
            var list = this._goodList = [
                { "id": 0, "desc": "加时卡", "type": 0, "gold": 500, "money": 0, "rmb": 0, "extra": 5 },
                { "id": 1, "desc": "减时卡", "type": 0, "gold": 0, "money": 2, "rmb": 0, "extra": -5 },
            ];
            this._goodMap = {};
            for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
                var good = list_1[_i];
                this._goodMap[good.id] = good;
            }
        }
        GoodsCFG.prototype.getGoodCFG = function (id) {
            return this._goodMap[id];
        };
        GoodsCFG.prototype.getGoodList = function () {
            return this._goodList;
        };
        return GoodsCFG;
    }());
    game.GoodsCFG = GoodsCFG;
    __reflect(GoodsCFG.prototype, "game.GoodsCFG");
})(game || (game = {}));
