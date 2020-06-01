var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var game;
(function (game) {
    /**
     * 道具
     */
    var ToolVO = (function () {
        function ToolVO() {
        }
        return ToolVO;
    }());
    game.ToolVO = ToolVO;
    __reflect(ToolVO.prototype, "game.ToolVO");
})(game || (game = {}));
