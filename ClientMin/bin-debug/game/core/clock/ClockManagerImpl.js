var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var game;
(function (game) {
    /**
     * 时钟管理器
     * @author wizardc
     */
    var ClockManagerImpl = (function () {
        function ClockManagerImpl() {
            this._initialized = false;
            this._paused = false;
            this._runningRate = 1;
            this._lastTime = 0;
        }
        Object.defineProperty(ClockManagerImpl.prototype, "paused", {
            get: function () {
                return this._paused;
            },
            set: function (value) {
                this._paused = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ClockManagerImpl.prototype, "runningRate", {
            get: function () {
                return this._runningRate;
            },
            set: function (value) {
                if (value < 0 || isNaN(value)) {
                    value = 0;
                }
                this._runningRate = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ClockManagerImpl.prototype, "time", {
            get: function () {
                return this._lastTime;
            },
            enumerable: true,
            configurable: true
        });
        ClockManagerImpl.prototype.addClockClient = function (client) {
            if (!this._initialized) {
                this.initialize();
                this._initialized = true;
            }
            if (client && this._clientList.indexOf(client) == -1) {
                this._clientList.push(client);
            }
        };
        ClockManagerImpl.prototype.initialize = function () {
            this._lastTime = egret.getTimer();
            this._clientList = [];
            egret.startTick(this.update, this);
        };
        ClockManagerImpl.prototype.update = function (timeStamp) {
            if (this._paused) {
                return;
            }
            var passedTime = timeStamp - this._lastTime;
            this._lastTime = timeStamp;
            var length = this._clientList.length;
            if (length == 0) {
                return;
            }
            passedTime *= this._runningRate;
            var currentIndex = 0;
            for (var i = 0; i < length; i++) {
                var client = this._clientList[i];
                if (client) {
                    if (currentIndex != i) {
                        this._clientList[currentIndex] = client;
                        this._clientList[i] = undefined;
                    }
                    client.update(passedTime);
                    currentIndex++;
                }
            }
            if (currentIndex != i) {
                length = this._clientList.length;
                while (i < length) {
                    this._clientList[currentIndex++] = this._clientList[i++];
                }
                this._clientList.length = currentIndex;
            }
            return false;
        };
        ClockManagerImpl.prototype.hasClockClient = function (client) {
            return this._clientList.indexOf(client) != -1;
        };
        ClockManagerImpl.prototype.removeClockClient = function (client) {
            var index = this._clientList.indexOf(client);
            if (index != -1) {
                this._clientList[index] = undefined;
            }
        };
        ClockManagerImpl.prototype.clear = function () {
            this._clientList.length = 0;
        };
        return ClockManagerImpl;
    }());
    game.ClockManagerImpl = ClockManagerImpl;
    __reflect(ClockManagerImpl.prototype, "game.ClockManagerImpl", ["game.IClockManager"]);
})(game || (game = {}));
