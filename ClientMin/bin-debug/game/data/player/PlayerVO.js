var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var game;
(function (game) {
    /**
     * 用户数据
     */
    var PlayerVO = (function () {
        function PlayerVO() {
        }
        PlayerVO.prototype.updateTool = function (data) {
            var that = this;
            for (var _i = 0, _a = that.toolList; _i < _a.length; _i++) {
                var tool = _a[_i];
                tool.count = 0;
            }
            if (data) {
                var goods = data.split(";");
                for (var _b = 0, goods_1 = goods; _b < goods_1.length; _b++) {
                    var good = goods_1[_b];
                    var arr = good.split(":");
                    that.toolMap[arr[0]].count = arr[1];
                }
            }
            game.$facade.dispatch(27 /* toolUpdate */);
        };
        PlayerVO.prototype.updateOneTool = function (toolInfo) {
            var that = this;
            for (var _i = 0, _a = that.toolList; _i < _a.length; _i++) {
                var tool = _a[_i];
                if (tool.id === toolInfo.id)
                    tool.count = toolInfo.count;
            }
            that.toolMap[toolInfo.id].count = toolInfo.count;
            game.$facade.dispatch(27 /* toolUpdate */);
        };
        return PlayerVO;
    }());
    game.PlayerVO = PlayerVO;
    __reflect(PlayerVO.prototype, "game.PlayerVO");
})(game || (game = {}));
