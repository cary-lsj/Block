var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var game;
(function (game) {
    /**
     * 动画数据
     * @author wizardc
     */
    var AnimationData = (function () {
        function AnimationData() {
            this._frames = [];
        }
        Object.defineProperty(AnimationData.prototype, "speed", {
            get: function () {
                return this.data.speed;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AnimationData.prototype, "frameCount", {
            get: function () {
                return this.data.subs.length;
            },
            enumerable: true,
            configurable: true
        });
        AnimationData.prototype.parse = function () {
            var sheets = new egret.SpriteSheet(this.texture);
            var frames = this.data.subs;
            for (var i = 0; i < frames.length; i++) {
                var istr = i.toString();
                var f = frames[i];
                sheets.createTexture(istr, f.x, f.y, f.width, f.height);
                var frame = game.recyclable(FrameData);
                frame.offsetX = f.ofx;
                frame.offsetY = f.ofy;
                frame.texture = sheets.getTexture(istr);
                this._frames.push(frame);
            }
        };
        AnimationData.prototype.getFrame = function (frame) {
            return this._frames[frame];
        };
        AnimationData.prototype.clear = function () {
            this.data = undefined;
            this.texture = undefined;
            this._frames.forEach(function (v) {
                v.recycle();
            });
            this._frames.length = 0;
        };
        return AnimationData;
    }());
    game.AnimationData = AnimationData;
    __reflect(AnimationData.prototype, "game.AnimationData");
    /**
     * 动画帧数据
     * @author wizardc
     */
    var FrameData = (function () {
        function FrameData() {
        }
        FrameData.prototype.onRecycle = function () {
            this.texture = undefined;
        };
        FrameData = __decorate([
            game.DeployPool(1000)
        ], FrameData);
        return FrameData;
    }());
    game.FrameData = FrameData;
    __reflect(FrameData.prototype, "game.FrameData", ["game.ICacheable"]);
})(game || (game = {}));
