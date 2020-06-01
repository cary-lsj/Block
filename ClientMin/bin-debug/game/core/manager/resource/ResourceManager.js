var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var game;
(function (game) {
    /**
     * 资源管理器
     * @author wizardc
     */
    var ResourceManager = (function () {
        function ResourceManager() {
            this._animationTime = 0;
            this._moduleTime = 0;
            this._dragonBonesTime = 0;
            this._particleTime = 0;
            this._animationResMgr = game.$singlon(game.AnimationResMgr);
            this._moduleResMgr = game.$singlon(game.ModuleResMgr);
            this._dragonBonesResMgr = game.$singlon(game.DragonBonesResMgr);
            this._particleResMgr = game.$singlon(game.ParticleResMgr);
            game.$clock.commonClock.addClockClient(this);
        }
        Object.defineProperty(ResourceManager, "instance", {
            get: function () {
                return ResourceManager._instance || (ResourceManager._instance = new ResourceManager());
            },
            enumerable: true,
            configurable: true
        });
        ResourceManager.prototype.update = function (passedTime) {
            var now = game.GameTime.timer;
            this._animationTime += passedTime;
            if (this._animationTime >= this._animationResMgr.checkTime) {
                this._animationTime = 0;
                this._animationResMgr.clearRes(now);
            }
            this._moduleTime += passedTime;
            if (this._moduleTime >= this._moduleResMgr.checkTime) {
                this._moduleTime = 0;
                this._moduleResMgr.clearRes(now);
            }
            this._dragonBonesTime += passedTime;
            if (this._dragonBonesTime >= this._dragonBonesResMgr.checkTime) {
                this._dragonBonesTime = 0;
                this._dragonBonesResMgr.clearRes(now);
            }
            this._particleTime += passedTime;
            if (this._particleTime >= this._particleResMgr.checkTime) {
                this._particleTime = 0;
                this._particleResMgr.clearRes(now);
            }
        };
        return ResourceManager;
    }());
    game.ResourceManager = ResourceManager;
    __reflect(ResourceManager.prototype, "game.ResourceManager", ["game.IClockClient"]);
})(game || (game = {}));
