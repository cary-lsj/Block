var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var game;
(function (game) {
    /**
     * 对象池
     */
    var ObjectPool = (function () {
        function ObjectPool(creator, maxCount) {
            if (maxCount === void 0) { maxCount = 50; }
            this._creator = creator;
            this._maxCount = maxCount;
            this._list = [];
        }
        Object.defineProperty(ObjectPool.prototype, "size", {
            get: function () {
                return this._list.length;
            },
            enumerable: true,
            configurable: true
        });
        ObjectPool.prototype.join = function (obj) {
            if (typeof obj.onRecycle === "function") {
                obj.onRecycle();
            }
            if (true) {
                if (this._list.length >= this._maxCount) {
                    console.warn("\u7C7B\u578B\"" + egret.getQualifiedClassName(this._creator) + "\"\u7684\u5BF9\u8C61\u6C60\u5DF2\u6EE1, \u6700\u5927\u6570\u91CF\u4E3A\"" + this._maxCount + "\"!");
                }
            }
            if (this._list.length < this._maxCount) {
                this._list.pushUnique(obj);
            }
        };
        ObjectPool.prototype.take = function () {
            var obj;
            if (this._list.length == 0) {
                obj = new this._creator();
            }
            else {
                obj = this._list.pop();
                if (typeof obj.onReuse === "function") {
                    obj.onReuse();
                }
            }
            return obj;
        };
        ObjectPool.prototype.clear = function () {
            this._list.length = 0;
        };
        return ObjectPool;
    }());
    game.ObjectPool = ObjectPool;
    __reflect(ObjectPool.prototype, "game.ObjectPool");
})(game || (game = {}));
