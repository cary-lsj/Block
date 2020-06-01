var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var game;
(function (game) {
    /**
     * 关卡列表数据
     * @author wizardc
     */
    var RankListVo = (function () {
        function RankListVo() {
        }
        RankListVo.prototype.updateList = function (data) {
            for (var i = 0; i < data.length; i++) {
                var port = data[i];
                var vo = new game.RankVO();
                vo.rank = port.rank;
                vo.starNum = port.starNum;
                this.rankList.push(vo);
            }
        };
        return RankListVo;
    }());
    game.RankListVo = RankListVo;
    __reflect(RankListVo.prototype, "game.RankListVo");
})(game || (game = {}));
