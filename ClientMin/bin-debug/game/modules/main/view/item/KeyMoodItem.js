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
    var KeyMoodItem = (function (_super) {
        __extends(KeyMoodItem, _super);
        function KeyMoodItem() {
            return _super.call(this) || this;
        }
        KeyMoodItem.prototype.childrenCreated = function () {
            this.alpha = 0.3;
        };
        KeyMoodItem.prototype.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
        };
        return KeyMoodItem;
    }(game.MoodBase));
    game.KeyMoodItem = KeyMoodItem;
    __reflect(KeyMoodItem.prototype, "game.KeyMoodItem");
})(game || (game = {}));
