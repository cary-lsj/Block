namespace game {
    /**
     * 动画数据
     * @author wizardc
     */
    export class AnimationData {
        public data: IAnimationInfo;
        public texture: egret.Texture;

        private _frames: Recyclable<FrameData>[] = [];

        public get speed(): number {
            return this.data.speed;
        }

        public get frameCount(): number {
            return this.data.subs.length;
        }

        public parse(): void {
            let sheets = new egret.SpriteSheet(this.texture);
            let frames = this.data.subs;
            for (let i = 0; i < frames.length; i++) {
                let istr = i.toString();
                let f = frames[i];
                sheets.createTexture(istr, f.x, f.y, f.width, f.height);
                let frame = recyclable(FrameData);
                frame.offsetX = f.ofx;
                frame.offsetY = f.ofy;
                frame.texture = sheets.getTexture(istr);
                this._frames.push(frame);
            }
        }

        public getFrame(frame: number): FrameData {
            return this._frames[frame];
        }

        public clear(): void {
            this.data = undefined;
            this.texture = undefined;
            this._frames.forEach(v => {
                v.recycle();
            });
            this._frames.length = 0;
        }
    }

    /**
     * 动画帧数据
     * @author wizardc
     */
    @DeployPool(1000)
    export class FrameData implements ICacheable {
        public offsetX: number;
        public offsetY: number;
        public texture: egret.Texture;

        public onRecycle(): void {
            this.texture = undefined;
        }
    }
}
