var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 缓存管理器
 */
var game;
(function (game) {
    //存储数据 name:数据名称 data:数据值
    function setItem(name, data) {
        ilsm.init(name, data);
    }
    game.setItem = setItem;
    //获取数据 name:数据名称
    function getItem(name) {
        return ilsm.getLocalstrageInfo(name);
    }
    game.getItem = getItem;
    var Ilsm = (function () {
        function Ilsm() {
        }
        Ilsm.prototype.getLocalstrageInfo = function (name) {
            return localStorage.getItem(name);
        };
        Ilsm.prototype.init = function (name, data) {
            localStorage.setItem(name, data);
        };
        return Ilsm;
    }());
    __reflect(Ilsm.prototype, "Ilsm");
    var ilsm = new Ilsm();
})(game || (game = {}));
