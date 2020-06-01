namespace game {
    /**
     * 粒子动画剪辑
     * @author wizardc
     */
    export class ParticleClip extends egret.DisplayObjectContainer implements IDispose {
        private _resMgr: ParticleResMgr;
        private _res: ParticleRes;

        private _url: string;
        private _playing: boolean = false;
        private _autoStop: boolean = true;

        private _data: particle.GravityParticleSystem;

        public constructor() {
            super();

            this._resMgr = $singlon(ParticleResMgr);

            this.on(egret.Event.ADDED_TO_STAGE, this.onAddedToStage, this);
            this.on(egret.Event.REMOVED_FROM_STAGE, this.onRemovedFromStage, this);
        }

        public set autoStop(value: boolean) {
            this._autoStop = value;
        }
        public get autoStop(): boolean {
            return this._autoStop;
        }

        /**
         * 设定路径, 设定后需要重新调用 play 播放
         */
        public setPath(url: string): void {
            this._url = url;
        }

        public play(): void {
            if (this._data) {
                this._data.removeSelf();
                this._data.stop(true);
                this._data = undefined;
            }
            if (this._res) {
                if (this.stage) {
                    this._res.subtractUsing();
                }
                this._res.off(egret.Event.COMPLETE, this.onLoaded, this);
                this._res.off(egret.Event.REMOVED, this.onDispose, this);
                this._res = undefined;
            }

            this._playing = true;

            this.$play();
        }

        private $play(): void {
            if (this._url) {
                this._res = this._resMgr.getRes(this._url);
                if (this.stage) {
                    this._res.addUsing();
                }
                if (this._res.status == LoadStatus.loaded) {
                    this.onLoaded();
                } else {
                    this._res.on(egret.Event.COMPLETE, this.onLoaded, this);
                    this._res.on(egret.Event.REMOVED, this.onDispose, this);
                    this._res.load();
                }
            }
        }

        private onLoaded(event?: egret.Event): void {
            this._data = this._res.data;
            this.addChild(this._data);
            if (this._playing) {
                this._data.start();
            }
        }

        private onDispose(event: egret.Event): void {
            if (this._data) {
                this._data.removeSelf();
                this._data.stop(true);
                this._data = undefined;
            }
            if (this._res) {
                this._res.off(egret.Event.COMPLETE, this.onLoaded, this);
                this._res.off(egret.Event.REMOVED, this.onDispose, this);
                this._res = undefined;
            }
        }

        public resume(): void {
            if (!this._playing && this._data) {
                this._playing = true;
                this._data.start();
            }
        }

        public stop(clear?: boolean): void {
            if (this._playing && this._data) {
                this._playing = false;
                this._data.stop(clear);
            }
        }

        private onAddedToStage(event: egret.Event): void {
            if (this._res) {
                this._res.addUsing();
                if (this._res.status == LoadStatus.loaded) {
                    this.onLoaded();
                }
                if (this._autoStop) {
                    this.resume();
                }
            } else if (this._url) {
                this.$play();
            }
        }

        private onRemovedFromStage(event: egret.Event): void {
            if (this._res) {
                this._res.subtractUsing();
            }
            if (this._autoStop) {
                this.stop();
            }
        }

        public dispose(): void {
            if (this._data) {
                this._data.removeSelf();
                this._data.stop(true);
                this._data = undefined;
            }
            if (this._res) {
                if (this.stage) {
                    this._res.subtractUsing();
                }
                this._res.off(egret.Event.COMPLETE, this.onLoaded, this);
                this._res.off(egret.Event.REMOVED, this.onDispose, this);
                this._res = undefined;
            }
            this._url = undefined;
            this._playing = false;
            this._autoStop = true;
        }
    }
}
