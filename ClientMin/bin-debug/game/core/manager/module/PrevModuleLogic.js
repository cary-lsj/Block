var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var game;
(function (game) {
    /**
     * 模块返回逻辑
     * @author wizardc
     */
    var PrevModuleLogic = (function () {
        function PrevModuleLogic() {
        }
        /**
         * 记录要返回的上一个模块
         */
        PrevModuleLogic.record = function (moduleID, moduleVO) {
            this._prevMap[moduleID] = moduleVO;
        };
        /**
         * 返回上一个模块
         */
        PrevModuleLogic.back = function (moduleID) {
            var prevMap = this._prevMap;
            if (prevMap[moduleID]) {
                var value = prevMap[moduleID];
                delete prevMap[moduleID];
                game.$facade.addModule.apply(game.$facade, [value.prevModuleID, prevMap[value.prevModuleID]].concat(value.prevModuleData));
                return true;
            }
            return false;
        };
        /**
         * 清除
         */
        PrevModuleLogic.clear = function (moduleID) {
            delete this._prevMap[moduleID];
        };
        PrevModuleLogic._prevMap = {};
        return PrevModuleLogic;
    }());
    game.PrevModuleLogic = PrevModuleLogic;
    __reflect(PrevModuleLogic.prototype, "game.PrevModuleLogic");
})(game || (game = {}));
