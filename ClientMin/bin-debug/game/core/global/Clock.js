var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var game;
(function (game) {
    /**
     * 游戏时钟
     * @author wizardc
     */
    var Clock = (function () {
        function Clock() {
            this._commonClock = new game.ClockManagerImpl();
            this._fightClock = new game.ClockManagerImpl();
        }
        Object.defineProperty(Clock, "instance", {
            get: function () {
                return Clock._instance || (Clock._instance = new Clock());
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Clock.prototype, "commonClock", {
            /**
             * 通用时钟
             */
            get: function () {
                return this._commonClock;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Clock.prototype, "fightClock", {
            /**
             * 战斗时钟
             */
            get: function () {
                return this._fightClock;
            },
            enumerable: true,
            configurable: true
        });
        return Clock;
    }());
    game.Clock = Clock;
    __reflect(Clock.prototype, "game.Clock");
})(game || (game = {}));
