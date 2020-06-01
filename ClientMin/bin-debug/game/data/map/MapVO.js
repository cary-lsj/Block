var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var game;
(function (game) {
    /**
     * 地图数据
     * @author wizardc
     */
    var MapVO = (function () {
        function MapVO() {
        }
        MapVO.prototype.init = function (port) {
            this.rowGrids = port["row"];
            this.colGrids = port["col"];
            this.initMap();
            if (port["point"]) {
                for (var _i = 0, _a = port["point"]; _i < _a.length; _i++) {
                    var point = _a[_i];
                    var row = point["row"] - 1;
                    var col = point["col"] - 1;
                    this.data[row][col] = 2 /* obstacles */;
                }
            }
        };
        MapVO.prototype.initMap = function () {
            this.data = [];
            for (var i = 0; i < this.rowGrids; i++) {
                var rowLine = [];
                for (var j = 0; j < this.colGrids; j++) {
                    rowLine.push(0 /* beyond */);
                }
                this.data.push(rowLine);
            }
        };
        MapVO.prototype.initPos = function () {
            this.col = -1;
            this.row = -1;
        };
        MapVO.prototype.update = function (data) {
            this.row = parseInt(data["row"]);
            this.col = parseInt(data["col"]);
            this.data = game.ConfigManager.getMoodInfo(data["moodId"]); //获取木块数据（二维数组）
            this.rowGrids = this.data.length;
            this.colGrids = this.data[0].length;
        };
        MapVO.prototype.addMood = function (vo) {
            this.addMap(vo.row, vo.col, vo.data);
        };
        MapVO.prototype.addMap = function (row, col, map) {
            for (var i = 0; i < map.length; i++) {
                var rowLine = map[i];
                for (var j = 0; j < rowLine.length; j++) {
                    var data = rowLine[j];
                    if (data == 1 /* full */) {
                        var n = i + row - 1;
                        var m = j + col - 1;
                        this.data[n][m] = 1 /* full */;
                    }
                }
            }
        };
        MapVO.prototype.removeMood = function (vo) {
            var map = vo.data;
            for (var i = 0; i < map.length; i++) {
                var rowLine = map[i];
                for (var j = 0; j < rowLine.length; j++) {
                    var data = rowLine[j];
                    if (data == 1 /* full */) {
                        var n = i + vo.row - 1;
                        var m = j + vo.col - 1;
                        this.data[n][m] = 3 /* null */;
                    }
                }
            }
        };
        return MapVO;
    }());
    game.MapVO = MapVO;
    __reflect(MapVO.prototype, "game.MapVO");
})(game || (game = {}));
