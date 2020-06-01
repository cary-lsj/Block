/**
 * 地图工具类
 * @author wizardc
 */
var game;
(function (game) {
    var MapUtil;
    (function (MapUtil) {
        MapUtil.mapTileWidth = 50;
        MapUtil.mapTileHeight = 50;
        MapUtil.mapGridWidth = 50;
        MapUtil.mapGridHeight = 50;
        // 格子和坐标均以左上角为起点，坐标起点为（0,0）格子起点为（1,1）
        //
        /**
         * 格子转像素
         * @param result 空则表示直接修改 position 参数
         */
        function getPixel(position, result) {
            if (!result) {
                result = position;
            }
            position.x -= 1;
            position.y -= 1;
            MapUtil.getMoodPixel(position, result);
            return result;
        }
        MapUtil.getPixel = getPixel;
        function getPixelPoint(position) {
            var point = game.recyclable(egret.Point);
            point.x = position.x;
            point.y = position.y;
            getPixel(point);
            return point;
        }
        MapUtil.getPixelPoint = getPixelPoint;
        /**
         * 格子转像素(木块)
         * @param result 空则表示直接修改 position 参数
         */
        function getMoodPixel(position, result) {
            if (!result) {
                result = position;
            }
            //格子是规整的，转换成坐标直接相乘即可
            result.x = position.x * MapUtil.mapGridWidth;
            result.y = position.y * MapUtil.mapGridHeight;
            return result;
        }
        MapUtil.getMoodPixel = getMoodPixel;
        function getMoodPixelPoint(position) {
            var point = game.recyclable(egret.Point);
            point.x = position.x;
            point.y = position.y;
            getPixel(point);
            return point;
        }
        MapUtil.getMoodPixelPoint = getMoodPixelPoint;
        /**
         * 像素转格子
         * @param result 空则表示直接修改 position 参数
         */
        function getGrid(position, result) {
            if (!result) {
                result = position;
            }
            //为更好地适配格子，按占比大小判断所适配的格子
            //因可能出现负数，负数与正数取值方式不太一样
            if (position.x >= 0) {
                result.x = (position.x % MapUtil.mapGridWidth) / MapUtil.mapGridWidth > 0.5 ? Math.ceil(position.x / MapUtil.mapGridWidth) : Math.floor(position.x / MapUtil.mapGridWidth);
            }
            else {
                result.x = (position.x % MapUtil.mapGridWidth) / MapUtil.mapGridWidth > 0.5 ? Math.floor(position.x / MapUtil.mapGridWidth) : Math.ceil(position.x / MapUtil.mapGridWidth);
            }
            if (position.y >= 0) {
                result.y = (position.y % MapUtil.mapGridHeight) / MapUtil.mapGridHeight > 0.5 ? Math.ceil(position.y / MapUtil.mapGridHeight) : Math.floor(position.y / MapUtil.mapGridHeight);
            }
            else {
                result.y = (position.y % MapUtil.mapGridHeight) / MapUtil.mapGridHeight > 0.5 ? Math.floor(position.y / MapUtil.mapGridHeight) : Math.ceil(position.y / MapUtil.mapGridHeight);
            }
            return result;
        }
        MapUtil.getGrid = getGrid;
        function getGridPoint(position) {
            var point = game.recyclable(egret.Point);
            point.x = position.x;
            point.y = position.y;
            getGrid(point);
            return point;
        }
        MapUtil.getGridPoint = getGridPoint;
    })(MapUtil = game.MapUtil || (game.MapUtil = {}));
})(game || (game = {}));
