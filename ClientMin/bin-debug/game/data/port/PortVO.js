var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var game;
(function (game) {
    /**
     * 关卡数据
     * @author wizardc
     */
    var PortVO = (function () {
        function PortVO() {
        }
        PortVO.prototype.update = function (data) {
            for (var i = 0; i < data.length; i++) {
                var mood = data[i];
                var vo = new game.MapVO();
                vo.update(mood);
                vo.type = i + 1;
                this.moodListVO.push(vo);
                this.mapVO.addMood(vo);
            }
        };
        PortVO.prototype.updateStart = function (value) {
            this.starNum = value;
            game.$facade.dispatch(11 /* updatePortSart */);
        };
        return PortVO;
    }());
    game.PortVO = PortVO;
    __reflect(PortVO.prototype, "game.PortVO");
})(game || (game = {}));
