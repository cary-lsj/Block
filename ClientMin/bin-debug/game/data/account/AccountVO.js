var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var game;
(function (game) {
    /**
     * 账号数据
     * @author wizardc
     */
    var AccountVO = (function () {
        function AccountVO() {
        }
        return AccountVO;
    }());
    game.AccountVO = AccountVO;
    __reflect(AccountVO.prototype, "game.AccountVO");
})(game || (game = {}));
