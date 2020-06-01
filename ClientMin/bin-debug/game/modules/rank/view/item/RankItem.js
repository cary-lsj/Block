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
     * 排行榜排名
     */
    var RankItem = (function (_super) {
        __extends(RankItem, _super);
        function RankItem() {
            return _super.call(this) || this;
        }
        RankItem.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
        };
        RankItem.prototype.dataChanged = function () {
            var that = this;
            var data = that.data;
            that.txt_rank.text = data.nRank + 1;
            that.txt_starNum.text = data.starNum;
        };
        return RankItem;
    }(eui.ItemRenderer));
    game.RankItem = RankItem;
    __reflect(RankItem.prototype, "game.RankItem");
})(game || (game = {}));
