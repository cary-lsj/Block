var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var game;
(function (game) {
    /**
     * 提供泛型哈希表的支持
     * 如果 key 使用继承 egret.HashObject 的对象, 则使用 hashCode 作为其键值, 否则使用 toString() 的返回作为键值
     * @author wizardc
     */
    var Dictionary = (function () {
        function Dictionary(map) {
            this._map = map || {};
            this._keyMap = {};
            this._size = 0;
        }
        Object.defineProperty(Dictionary.prototype, "size", {
            get: function () {
                return this._size;
            },
            enumerable: true,
            configurable: true
        });
        Dictionary.prototype.getKey = function (key) {
            if ((key) instanceof egret.HashObject) {
                return (key).hashCode.toString();
            }
            return key.toString();
        };
        Dictionary.prototype.add = function (key, value) {
            var k = this.getKey(key);
            if (!this._map.hasOwnProperty(k)) {
                ++this._size;
            }
            this._map[k] = value;
            this._keyMap[k] = key;
        };
        Dictionary.prototype.has = function (key) {
            var k = this.getKey(key);
            return this._map.hasOwnProperty(k);
        };
        Dictionary.prototype.get = function (key) {
            var k = this.getKey(key);
            return this._map[k];
        };
        Dictionary.prototype.forEach = function (callbackfn, thisArg) {
            for (var key in this._map) {
                if (this._map.hasOwnProperty(key)) {
                    callbackfn.call(thisArg, this._map[key], this._keyMap[key], this);
                }
            }
        };
        Dictionary.prototype.remove = function (key) {
            var k = this.getKey(key);
            if (!this._map.hasOwnProperty(k)) {
                return false;
            }
            delete this._map[k];
            delete this._keyMap[k];
            --this._size;
            return true;
        };
        Dictionary.prototype.clear = function () {
            this._map = {};
            this._keyMap = {};
            this._size = 0;
        };
        Dictionary.prototype.toString = function () {
            var result = [];
            for (var key in this._map) {
                if (this._map.hasOwnProperty(key)) {
                    result.push("{key:" + this._keyMap[key] + ", value:" + this._map[key] + "}");
                }
            }
            return "{" + result.join(", ") + "}";
        };
        Dictionary.prototype.keyOf = function () {
            return this._keyMap;
        };
        Dictionary.prototype.valueOf = function () {
            return this._map;
        };
        return Dictionary;
    }());
    game.Dictionary = Dictionary;
    __reflect(Dictionary.prototype, "game.Dictionary");
})(game || (game = {}));
