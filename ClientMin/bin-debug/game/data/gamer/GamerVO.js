var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var game;
(function (game) {
    /**
     * 玩家数据
     */
    var GamerVO = (function () {
        function GamerVO() {
        }
        GamerVO.prototype.update = function (gamer) {
            var that = this;
            that.sID = gamer.sID;
            that.sHeadImg = gamer.sHeadImg;
            that.sNick = gamer.sNick;
            that.nRankLevel = gamer.nRankLevel;
        };
        return GamerVO;
    }());
    game.GamerVO = GamerVO;
    __reflect(GamerVO.prototype, "game.GamerVO");
})(game || (game = {}));
