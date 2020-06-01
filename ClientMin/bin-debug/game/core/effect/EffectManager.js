var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 特效管理器
 * @author wizardc
 */
var game;
(function (game) {
    var EffectManager;
    (function (EffectManager) {
        /**
         * 播放特效
         * @param url {string} 资源路径
         * @param container {egret.DisplayObjectContainer} 特效挂载父节点
         * @param x {number} X坐标
         * @param y {number} Y坐标
         * @param times {number} 0 循环播放 1 播放一次
         * @param frameRate {number} 帧率 默认值12
         * @param frameRate {boolean}  true: 立即播放, 加载时间也算在播放时间中, false: 等待加载完成后从第一帧开始播放
         * @param completeHandler {any} 播放结束回调
         * @param thisObj {any} 回调函数执行域
         * @param args {any} 回调时携带参数
        */
        function play(url, container, x, y, times, frameRate, completeHandler, thisObj) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (times === void 0) { times = 1; }
            if (frameRate === void 0) { frameRate = 12; }
            var args = [];
            for (var _i = 8; _i < arguments.length; _i++) {
                args[_i - 8] = arguments[_i];
            }
            return impl.play.apply(impl, [url, container, x, y, times, frameRate, completeHandler, thisObj].concat(args));
        }
        EffectManager.play = play;
        /**
         * 清除特效
         * @param container 需要清除的对象
         */
        function clear(container) {
            impl.clear(container);
        }
        EffectManager.clear = clear;
        function recycle(effect) {
            impl.recycle(effect);
        }
        EffectManager.recycle = recycle;
        var Impl = (function () {
            function Impl() {
            }
            Impl.prototype.play = function (url, container, x, y, times, frameRate, completeHandler, thisObj) {
                var args = [];
                for (var _i = 8; _i < arguments.length; _i++) {
                    args[_i - 8] = arguments[_i];
                }
                var effect = game.recyclable(game.EffectClip);
                effect.x = x;
                effect.y = y;
                effect.frameRate = frameRate;
                effect.setPath(url);
                effect.play.apply(effect, [times, completeHandler, thisObj].concat(args));
                container.addChild(effect);
                return effect;
            };
            Impl.prototype.clear = function (container) {
                for (var i = 0; i < container.numChildren; i++) {
                    var child = container.getChildAt(i);
                    if (child instanceof game.EffectClip) {
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
    })(EffectManager = game.EffectManager || (game.EffectManager = {}));
})(game || (game = {}));
