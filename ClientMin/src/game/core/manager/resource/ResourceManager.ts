namespace game {
    /**
     * 资源管理器
     * @author wizardc
     */
    export class ResourceManager implements IClockClient {
        private static _instance: ResourceManager;

        public static get instance(): ResourceManager {
            return ResourceManager._instance || (ResourceManager._instance = new ResourceManager());
        }

        private _animationResMgr: AnimationResMgr;
        private _animationTime: number = 0;

        private _moduleResMgr: ModuleResMgr;
        private _moduleTime: number = 0;

        private _dragonBonesResMgr: DragonBonesResMgr;
        private _dragonBonesTime: number = 0;

        private _particleResMgr: ParticleResMgr;
        private _particleTime: number = 0;

        private constructor() {
            this._animationResMgr = $singlon(AnimationResMgr);
            this._moduleResMgr = $singlon(ModuleResMgr);
            this._dragonBonesResMgr = $singlon(DragonBonesResMgr);
            this._particleResMgr = $singlon(ParticleResMgr);
            $clock.commonClock.addClockClient(this);
        }

        public update(passedTime: number): void {
            let now = GameTime.timer;
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
        }
    }
}
