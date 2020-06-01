var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var game;
(function (game) {
    /**
     * 当前游戏 关卡数据
     * @author wizardc
     */
    var GamePortVO = (function () {
        function GamePortVO() {
        }
        GamePortVO.prototype.update = function (vo) {
            this.curPort = vo;
            this.updateMoods(vo.moodListVO);
            var gamemap = this.GameMapVO = new game.GameMapVO();
            gamemap.map = new game.MapVO();
            gamemap.init(this.curPort.mapVO.rowGrids, this.curPort.mapVO.colGrids);
            gamemap.update(vo.mapVO);
        };
        GamePortVO.prototype.updateMoods = function (list) {
            this.moodListVO = [];
            for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
                var vo = list_1[_i];
                var map = new game.MapVO;
                map.row = -1;
                map.col = -1;
                map.rowGrids = vo.rowGrids;
                map.colGrids = vo.colGrids;
                map.type = vo.type;
                map.initMap();
                map.addMap(1, 1, vo.data);
                this.moodListVO.push(map);
            }
        };
        GamePortVO.prototype.addMood = function () {
        };
        GamePortVO.prototype.removeMood = function () {
        };
        return GamePortVO;
    }());
    game.GamePortVO = GamePortVO;
    __reflect(GamePortVO.prototype, "game.GamePortVO");
})(game || (game = {}));
