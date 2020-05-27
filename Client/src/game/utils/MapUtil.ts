/**
 * 地图工具类
 * @author wizardc
 */
namespace game.MapUtil {
    export const mapTileWidth: number = 50;
    export const mapTileHeight: number = 50;

    export const mapGridWidth: number = 50;
    export const mapGridHeight: number = 50;

    // 格子和坐标均以左上角为起点，坐标起点为（0,0）格子起点为（1,1）
    //

    /**
     * 格子转像素
     * @param result 空则表示直接修改 position 参数
     */
    export function getPixel(position: Point, result?: Point): Point {
        if (!result) {
            result = position;
        }
        position.x -= 1;
        position.y -= 1;
        MapUtil.getMoodPixel(position, result);
        return result;
    }

    export function getPixelPoint(position: Point): Recyclable<egret.Point> {
        let point = recyclable(egret.Point);
        point.x = position.x;
        point.y = position.y;
        getPixel(point);
        return point;
    }

    /**
     * 格子转像素(木块)
     * @param result 空则表示直接修改 position 参数
     */
    export function getMoodPixel(position: Point, result?: Point): Point {
        if (!result) {
            result = position;
        }
        //格子是规整的，转换成坐标直接相乘即可
        result.x = position.x * mapGridWidth;
        result.y = position.y * mapGridHeight;
        return result;
    }

    export function getMoodPixelPoint(position: Point): Recyclable<egret.Point> {
        let point = recyclable(egret.Point);
        point.x = position.x;
        point.y = position.y;
        getPixel(point);
        return point;
    }

    /**
     * 像素转格子
     * @param result 空则表示直接修改 position 参数
     */
    export function getGrid(position: Point, result?: Point): Point {
        if (!result) {
            result = position;
        }
        //为更好地适配格子，按占比大小判断所适配的格子
        //因可能出现负数，负数与正数取值方式不太一样
        if (position.x >= 0) {
            result.x = (position.x % mapGridWidth) / mapGridWidth > 0.5 ? Math.ceil(position.x / mapGridWidth) : Math.floor(position.x / mapGridWidth);
        } else {
            result.x = (position.x % mapGridWidth) / mapGridWidth > 0.5 ? Math.floor(position.x / mapGridWidth) : Math.ceil(position.x / mapGridWidth);
        }
        if (position.y >= 0) {
            result.y = (position.y % mapGridHeight) / mapGridHeight > 0.5 ? Math.ceil(position.y / mapGridHeight) : Math.floor(position.y / mapGridHeight);
        } else {
            result.y = (position.y % mapGridHeight) / mapGridHeight > 0.5 ? Math.floor(position.y / mapGridHeight) : Math.ceil(position.y / mapGridHeight);
        }
        return result;
    }

    export function getGridPoint(position: Point): Recyclable<egret.Point> {
        let point = recyclable(egret.Point);
        point.x = position.x;
        point.y = position.y;
        getGrid(point);
        return point;
    }

}

