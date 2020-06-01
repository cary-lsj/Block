var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var game;
(function (game) {
    /**
     * 当前游戏 地图数据
     * @author wizardc
     */
    var GameMapVO = (function () {
        function GameMapVO() {
        }
        GameMapVO.prototype.init = function (rowGrids, colGrids) {
            this.map = new game.MapVO;
            this.map.rowGrids = rowGrids;
            this.map.colGrids = colGrids;
            this.map.initMap();
            this.mapData = new game.MapVO;
            this.mapData.rowGrids = rowGrids + 2;
            this.mapData.colGrids = colGrids + 2;
            this.mapData.initMap();
        };
        GameMapVO.prototype.update = function (vo) {
            this.updateMap(vo);
            this.updateDataMap(vo);
        };
        GameMapVO.prototype.updateMap = function (vo) {
            var map = vo.data;
            for (var i = 0; i < map.length; i++) {
                var rowLine = map[i];
                for (var j = 0; j < rowLine.length; j++) {
                    var data = rowLine[j];
                    if (data == 1) {
                        this.map.data[i][j] = 3 /* null */;
                    }
                }
            }
        };
        GameMapVO.prototype.updateDataMap = function (vo) {
            var map = vo.data;
            for (var i = 0; i < vo.rowGrids; i++) {
                var rowLine = map[i];
                for (var j = 0; j < vo.colGrids; j++) {
                    var data = rowLine[j];
                    this.mapData.data[i + 1][j + 1] = data;
                }
            }
        };
        GameMapVO.prototype.addMood = function (vo) {
            this.map.addMood(vo);
        };
        GameMapVO.prototype.removeMood = function (vo) {
            this.map.removeMood(vo);
        };
        return GameMapVO;
    }());
    game.GameMapVO = GameMapVO;
    __reflect(GameMapVO.prototype, "game.GameMapVO");
})(game || (game = {}));
