/**
 * 粒子管理器
 * @author cary
 */
namespace game.ParticleManager {
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
    export function play(url: string, container: egret.DisplayObjectContainer, x: number = 0, y: number = 0) {
        return impl.play(url, container, x, y);
    }

    /**
     * 清除特效
     * @param container 需要清除的对象
     */
    export function clear(container: egret.DisplayObjectContainer): void {
        impl.clear(container);
    }

    export function recycle(effect: Recyclable<ParticleClip>): void {
        impl.recycle(effect);
    }

    class Impl {
        public play(url: string, container: egret.DisplayObjectContainer, x: number = 0, y: number = 0) {
            let effect = recyclable(ParticleClip);
            effect.x = x;
            effect.y = y;
            effect.setPath(url);
            effect.play();
            container.addChild(effect);
            return effect;
        }

        public clear(container: egret.DisplayObjectContainer): void {
            for (let i = 0; i < container.numChildren; i++) {
                let child = container.getChildAt(i);
                if (child instanceof ParticleClip) {
                    this.recycle(<Recyclable<ParticleClip>>child);
                    i--;
                }
            }
        }

        public recycle(effect: Recyclable<ParticleClip>): void {
            effect.removeSelf();
            effect.dispose();
            effect.recycle();
        }
    }

    const impl = new Impl();
}
