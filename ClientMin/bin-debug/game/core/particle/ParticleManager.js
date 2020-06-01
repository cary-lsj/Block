var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 粒子管理器
 * @author wizardc
 */
var game;
(function (game) {
    var ParticleManager;
    (function (ParticleManager) {
        /**
         * 播放粒子
         * @param url {string} 资源路径
         * @param container {egret.DisplayObjectContainer} 特效挂载父节点
         * @param x {number} X坐标
         * @param y {number} Y坐标
         * @param scale {number} 缩放比
         * @param times {number} 0 循环播放 1 播放一次
         * @param frameRate {number} 帧率 默认值12
         * @param frameRate {boolean}  true: 立即播放, 加载时间也算在播放时间中, false: 等待加载完成后从第一帧开始播放
         * @param completeHandler {any} 播放结束回调
         * @param thisObj {any} 回调函数执行域
         * @param args {any} 回调时携带参数
        */
        function play(url, container, x, y) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            return impl.play(url, container, x, y);
        }
        ParticleManager.play = play;
        /**
         * 清除特效
         * @param container 需要清除的对象
         */
        function clear(container) {
            impl.clear(container);
        }
        ParticleManager.clear = clear;
        function recycle(effect) {
            impl.recycle(effect);
        }
        ParticleManager.recycle = recycle;
        var Impl = (function () {
            function Impl() {
            }
            Impl.prototype.play = function (url, container, x, y) {
                if (x === void 0) { x = 0; }
                if (y === void 0) { y = 0; }
                var effect = game.recyclable(game.ParticleClip);
                effect.x = x;
                effect.y = y;
                effect.setPath(url);
                effect.play();
                container.addChild(effect);
                return effect;
            };
            Impl.prototype.clear = function (container) {
                for (var i = 0; i < container.numChildren; i++) {
                    var child = container.getChildAt(i);
                    if (child instanceof game.ParticleClip) {
                        this.recycle(child);
                        i--;
                    }
                }
            };
            Impl.prototype.recycle = function (effect) {
                effect.removeSelf();
                effect.dispose();
                effect.recycle();
            };
            return Impl;
        }());
        __reflect(Impl.prototype, "Impl");
        var impl = new Impl();
    })(ParticleManager = game.ParticleManager || (game.ParticleManager = {}));
})(game || (game = {}));
