var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var game;
(function (game) {
    /**
     * 游戏时间, 毫秒
     * @author wizardc
     */
    var GameTime = (function () {
        function GameTime() {
        }
        Object.defineProperty(GameTime, "timer", {
            get: function () {
                return this._timer;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameTime, "deltaTime", {
            get: function () {
                return this._deltaTime;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameTime, "loginTime", {
            get: function () {
                return this._loginTime;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameTime, "serverTime", {
            get: function () {
                return Date.now() + this._timeDif;
            },
            enumerable: true,
            configurable: true
        });
        GameTime.tick = function () {
            this._timer = egret.getTimer();
            this._deltaTime = this._timer - this._lastTime;
            this._lastTime = this._timer;
        };
        GameTime.setServerTime = function (serverTime) {
            this._loginTime = serverTime;
            this._timeDif = serverTime - Date.now();
        };
        GameTime._lastTime = 0;
        return GameTime;
    }());
    game.GameTime = GameTime;
    __reflect(GameTime.prototype, "game.GameTime");
})(game || (game = {}));
