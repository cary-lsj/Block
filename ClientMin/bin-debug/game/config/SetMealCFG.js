var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var game;
(function (game) {
    var SetMealCFG = (function () {
        function SetMealCFG() {
            this._MealMap = {
                "0": { "toolId": 0, "num": 5, "gold": 2500, "money": 0, "rmb": 0 },
                "1": { "toolId": 0, "num": 10, "gold": 5000, "money": 0, "rmb": 0 },
                "2": { "toolId": 0, "num": 20, "gold": 10000, "money": 0, "rmb": 0 },
                "3": { "toolId": 1, "num": 5, "gold": 0, "money": 10, "rmb": 0 },
                "4": { "toolId": 1, "num": 10, "gold": 0, "money": 20, "rmb": 0 },
            },
                this._DiamondMap = {
                    "0": { "num": 5, "rmb": 1 },
                    "1": { "num": 10, "rmb": 2 },
                    "2": { "num": 50, "rmb": 5 },
                    "3": { "num": 100, "rmb": 8 },
                };
        }
        SetMealCFG.prototype.getSetMealCFG = function (id) {
            return this._MealMap[id];
        };
        SetMealCFG.prototype.getAllSetMealCFG = function () {
            return this._MealMap;
        };
        SetMealCFG.prototype.getSetMealLength = function () {
            return 5;
        };
        SetMealCFG.prototype.getDiamondCFG = function (id) {
            return this._DiamondMap[id];
        };
        SetMealCFG.prototype.getAllDiamondCFG = function () {
            return this._DiamondMap;
        };
        SetMealCFG.prototype.getDiamondLength = function () {
            return 4;
        };
        return SetMealCFG;
    }());
    game.SetMealCFG = SetMealCFG;
    __reflect(SetMealCFG.prototype, "game.SetMealCFG");
})(game || (game = {}));
