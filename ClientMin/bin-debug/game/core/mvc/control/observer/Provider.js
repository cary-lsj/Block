var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var game;
(function (game) {
    /**
     * 观察者模式的实现
     * @author wizardc
     */
    var Provider = (function () {
        function Provider() {
            this._callbackMap = {};
        }
        Object.defineProperty(Provider, "instance", {
            get: function () {
                return Provider._instance || (Provider._instance = new Provider());
            },
            enumerable: true,
            configurable: true
        });
        Provider.prototype.addListener = function (notifyName, callback, thisObj) {
            var n = String(notifyName);
            if (!this._callbackMap.hasOwnProperty(n)) {
                this._callbackMap[n] = [];
            }
            var list = this._callbackMap[n];
            for (var i = 0, len = list.length; i < len; i++) {
                var info = list[i];
                if (info && info.callback == callback && info.thisObj == thisObj) {
                    return;
                }
            }
            var cb = game.recyclable(CallbackInfo);
            cb.callback = callback;
            cb.thisObj = thisObj;
            list[list.length] = cb;
        };
        Provider.prototype.removeListener = function (notifyName, callback, thisObj) {
            var n = String(notifyName);
            if (this._callbackMap.hasOwnProperty(n)) {
                var list = this._callbackMap[n];
                for (var i = 0, len = list.length; i < len; i++) {
                    var info = list[i];
                    if (info && info.callback == callback && info.thisObj == thisObj) {
                        info.recycle();
                        list[i] = undefined;
                        break;
                    }
                }
            }
        };
        Provider.prototype.dispatch = function (notifyName) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            var n = String(notifyName);
            if (this._callbackMap.hasOwnProperty(n)) {
                var list = this._callbackMap[n];
                var length_1 = list.length;
                if (length_1 == 0) {
                    return;
                }
                var currentIndex = 0;
                for (var i = 0; i < length_1; i++) {
                    var info = list[i];
                    if (info) {
                        if (currentIndex != i) {
                            list[currentIndex] = info;
                            list[i] = undefined;
                        }
                        info.callback.apply(info.thisObj, [n].concat(args));
                        currentIndex++;
                    }
                }
                if (currentIndex != i) {
                    length_1 = list.length;
                    while (i < length_1) {
                        list[currentIndex++] = list[i++];
                    }
                    list.length = currentIndex;
                }
            }
        };
        return Provider;
    }());
    game.Provider = Provider;
    __reflect(Provider.prototype, "game.Provider");
    var CallbackInfo = (function () {
        function CallbackInfo() {
        }
        CallbackInfo.prototype.onRecycle = function () {
            this.callback = undefined;
            this.thisObj = undefined;
        };
        return CallbackInfo;
    }());
    __reflect(CallbackInfo.prototype, "CallbackInfo", ["game.ICacheable"]);
})(game || (game = {}));
