var game;
(function (game) {
    game.POOLS = {};
    /**
     * 获取一个可回收的对象
     */
    function recyclable(creator) {
        var pool = creator.__pool;
        if (!pool) {
            var maxCount = creator.prototype.constructor.__cacheMaxCount || 50;
            pool = new game.ObjectPool(creator, maxCount);
            var prototype = creator.prototype;
            if (!prototype.hasOwnProperty("recycle")) {
                prototype.recycle = function () {
                    pool.join(this);
                };
            }
            creator.__pool = pool;
            game.POOLS[egret.getQualifiedClassName(creator)] = pool;
        }
        return pool.take();
    }
    game.recyclable = recyclable;
    /**
     * 对象池配置
     */
    function DeployPool(maxCount) {
        return function CacheCommand(constructor) {
            constructor.__cacheMaxCount = maxCount;
        };
    }
    game.DeployPool = DeployPool;
    /**
     * 对象池配置
     */
    function deployPool(targetClass, maxCount) {
        targetClass.prototype.constructor.__cacheMaxCount = maxCount;
    }
    game.deployPool = deployPool;
})(game || (game = {}));
