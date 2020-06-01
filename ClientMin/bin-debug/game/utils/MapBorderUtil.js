var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 地图工具类
 * @author wizardc
 */
var game;
(function (game) {
    var MapBorderUtil;
    (function (MapBorderUtil) {
        /** 计算地图边界位置 */
        function getMapBorderPixel(position, result) {
            if (!result) {
                result = position;
            }
            game.MapUtil.getMoodPixel(position, result);
            result.x -= game.MapUtil.mapGridHeight / 2;
            result.y -= game.MapUtil.mapGridWidth / 2;
            return result;
        }
        MapBorderUtil.getMapBorderPixel = getMapBorderPixel;
        /** 计算边框类型 */
        function getBorderType(row, col) {
            var map = game.$userData.gamePortVO.GameMapVO.mapData;
            return check.checkMap(row, col, map.data);
        }
        MapBorderUtil.getBorderType = getBorderType;
        var CheckMap = (function () {
            function CheckMap() {
            }
            CheckMap.prototype.checkMap = function (row, col, map) {
                this._row = row;
                this._col = col;
                this._map = map;
                if (this.checkCenter() && this.checkRight() && this.checkBottom() && this.checkRightBottom()) {
                    return "";
                }
                if (!this.checkCenter() && !this.checkRight() && !this.checkBottom() && !this.checkRightBottom()) {
                    return "";
                }
                //上
                if (this.checkCenter() && this.checkRight() && !this.checkBottom() && !this.checkRightBottom()) {
                    return "top";
                }
                //下
                if (!this.checkCenter() && !this.checkRight() && this.checkBottom() && this.checkRightBottom()) {
                    return "bottom";
                }
                //左
                if (this.checkCenter() && !this.checkRight() && this.checkBottom() && !this.checkRightBottom()) {
                    return "left";
                }
                //右
                if (!this.checkCenter() && this.checkRight() && !this.checkBottom() && this.checkRightBottom()) {
                    return "right";
                }
                //左上
                if (!this.checkCenter() && !this.checkRight() && !this.checkBottom() && this.checkRightBottom()) {
                    return "leftTopMax";
                }
                if (!this.checkCenter() && this.checkRight() && this.checkBottom() && this.checkRightBottom()) {
                    return "leftTopMin";
                }
                //右上
                if (!this.checkCenter() && !this.checkRight() && this.checkBottom() && !this.checkRightBottom()) {
                    return "rightTopMax";
                }
                if (this.checkCenter() && !this.checkRight() && this.checkBottom() && this.checkRightBottom()) {
                    return "rightTopMin";
                }
                //左下
                if (!this.checkCenter() && this.checkRight() && !this.checkBottom() && !this.checkRightBottom()) {
                    return "leftBottomMax";
                }
                if (this.checkCenter() && this.checkRight() && !this.checkBottom() && this.checkRightBottom()) {
                    return "leftBottomMin";
                }
                //右下
                if (this.checkCenter() && !this.checkRight() && !this.checkBottom() && !this.checkRightBottom()) {
                    return "rightBottomMax";
                }
                if (this.checkCenter() && this.checkRight() && this.checkBottom() && !this.checkRightBottom()) {
                    return "rightBottomMin";
                }
                return "";
            };
            CheckMap.prototype.checkCenter = function () {
                return !!this._map[this._row][this._col];
            };
            // private checkTop(): boolean {
            //     if (this._row == 0) {
            //         return false;
            //     }
            //     return !!this._map[this._row - 1][this._col];
            // }
            CheckMap.prototype.checkBottom = function () {
                // if (this._row == this._map.length - 1) {
                //     return false
                // }
                return !!this._map[this._row + 1][this._col];
            };
            // private checkLeft(): boolean {
            //     if (this._col == 0) {
            //         return false;
            //     }
            //     return !!this._map[this._row][this._col - 1];
            // }
            CheckMap.prototype.checkRight = function () {
                // if (this._col == this._map[0].length - 1) {
                //     return false;
                // }
                return !!this._map[this._row][this._col + 1];
            };
            // private checkLeftTop(): boolean {
            //     if (this._row == 0) {
            //         return false;
            //     }
            //     if (this._col == 0) {
            //         return false;
            //     }
            //     return !!this._map[this._row - 1][this._col - 1];
            // }
            // private checkRightTop(): boolean {
            //     if (this._col == this._map[0].length - 1) {
            //         return false;
            //     }
            //     if (this._row == 0) {
            //         return false;
            //     }
            //     return !!this._map[this._row - 1][this._col + 1];
            // }
            // private checkLeftBottom(): boolean {
            //     if (this._col == 0) {
            //         return false;
            //     }
            //     if (this._row == this._map.length - 1) {
            //         return false
            //     }
            //     return !!this._map[this._row + 1][this._col - 1];
            // }
            CheckMap.prototype.checkRightBottom = function () {
                if (this._col == this._map[0].length - 1) {
                    return false;
                }
                if (this._row == this._map.length - 1) {
                    return false;
                }
                return !!this._map[this._row + 1][this._col + 1];
            };
            return CheckMap;
        }());
        __reflect(CheckMap.prototype, "CheckMap");
        var check = new CheckMap();
    })(MapBorderUtil = game.MapBorderUtil || (game.MapBorderUtil = {}));
})(game || (game = {}));
