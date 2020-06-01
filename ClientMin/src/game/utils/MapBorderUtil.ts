/**
 * 地图工具类
 * @author wizardc
 */
namespace game.MapBorderUtil {

    /** 计算地图边界位置 */
    export function getMapBorderPixel(position: Point, result?: Point): Point {
        if (!result) {
            result = position;
        }
        MapUtil.getMoodPixel(position, result);
        result.x -= MapUtil.mapGridHeight / 2;
        result.y -= MapUtil.mapGridWidth / 2;

        return result;
    }

    /** 计算边框类型 */
    export function getBorderType(row: number, col: number): string {
        let map = $userData.gamePortVO.GameMapVO.mapData;
        return check.checkMap(row, col, map.data);
    }
    class CheckMap {
        private _row: number;
        private _col: number;
        private _map: number[][];
        public constructor() {
        }
        public checkMap(row: number, col: number, map: number[][]): string {
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
                return "top"
            }
            //下
            if (!this.checkCenter() && !this.checkRight() && this.checkBottom() && this.checkRightBottom()) {
                return "bottom"
            }
            //左
            if (this.checkCenter() && !this.checkRight() && this.checkBottom() && !this.checkRightBottom()) {
                return "left"
            }
            //右
            if (!this.checkCenter() && this.checkRight() && !this.checkBottom() && this.checkRightBottom()) {
                return "right"
            }

            //左上
            if (!this.checkCenter() && !this.checkRight() && !this.checkBottom() && this.checkRightBottom()) {
                return "leftTopMax"
            }
            if (!this.checkCenter() && this.checkRight() && this.checkBottom() && this.checkRightBottom()) {
                return "leftTopMin"
            }

            //右上
            if (!this.checkCenter() && !this.checkRight() && this.checkBottom() && !this.checkRightBottom()) {
                return "rightTopMax"
            }
            if (this.checkCenter() && !this.checkRight() && this.checkBottom() && this.checkRightBottom()) {
                return "rightTopMin"
            }

            //左下
            if (!this.checkCenter() && this.checkRight() && !this.checkBottom() && !this.checkRightBottom()) {
                return "leftBottomMax"
            }
            if (this.checkCenter() && this.checkRight() && !this.checkBottom() && this.checkRightBottom()) {
                return "leftBottomMin"
            }

            //右下
            if (this.checkCenter() && !this.checkRight() && !this.checkBottom() && !this.checkRightBottom()) {
                return "rightBottomMax"
            }
            if (this.checkCenter() && this.checkRight() && this.checkBottom() && !this.checkRightBottom()) {
                return "rightBottomMin"
            }

            return ""
        }
        private checkCenter(): boolean {
            return !!this._map[this._row][this._col];
        }
        // private checkTop(): boolean {
        //     if (this._row == 0) {
        //         return false;
        //     }
        //     return !!this._map[this._row - 1][this._col];
        // }
        private checkBottom(): boolean {
            // if (this._row == this._map.length - 1) {
            //     return false
            // }
            return !!this._map[this._row + 1][this._col];
        }
        // private checkLeft(): boolean {
        //     if (this._col == 0) {
        //         return false;
        //     }
        //     return !!this._map[this._row][this._col - 1];
        // }
        private checkRight(): boolean {
            // if (this._col == this._map[0].length - 1) {
            //     return false;
            // }
            return !!this._map[this._row][this._col + 1];
        }
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
        private checkRightBottom(): boolean {
            if (this._col == this._map[0].length - 1) {
                return false;
            }
            if (this._row == this._map.length - 1) {
                return false
            }
            return !!this._map[this._row + 1][this._col + 1];
        }
    }
    const check = new CheckMap();
}