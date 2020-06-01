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
    var PKRankItem = (function (_super) {
        __extends(PKRankItem, _super);
        function PKRankItem() {
            return _super.call(this) || this;
        }
        PKRankItem.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
        };
        PKRankItem.prototype.dataChanged = function () {
            var data = this.data;
            this.gamerInfo.data = data;
            this.txt_gold.text = data.gold;
            this.txt_nRank.text = data.nRank;
            this.txt_time.text = data.time;
            this.txt_nLevel.text = data.nLevel;
        };
        return PKRankItem;
    }(eui.ItemRenderer));
    game.PKRankItem = PKRankItem;
    __reflect(PKRankItem.prototype, "game.PKRankItem");
})(game || (game = {}));
