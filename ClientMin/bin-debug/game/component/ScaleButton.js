var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var game;
(function (game) {
    /**
     * 可缩放按钮
     * @author wizardc
     */
    var ScaleButton = (function (_super) {
        __extends(ScaleButton, _super);
        function ScaleButton() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this._scaleValue = 1.05;
            _this._useImageSize = false;
            return _this;
        }
        Object.defineProperty(ScaleButton.prototype, "scaleValue", {
            get: function () {
                return this._scaleValue;
            },
            set: function (value) {
                this._scaleValue = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ScaleButton.prototype, "useImageSize", {
            get: function () {
                return this._useImageSize;
            },
            set: function (value) {
                this._useImageSize = value;
            },
            enumerable: true,
            configurable: true
        });
        ScaleButton.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
            if (this.numChildren > 0) {
                var bg = this.getChildAt(0);
                if (bg instanceof eui.Image) {
                    this._bg = bg;
                }
            }
            if (this._bg) {
                this._bg = this.getChildAt(0);
                this._bg.includeInLayout = false;
                if (this._useImageSize) {
                    this.updateSize();
                    this._bg.on(egret.Event.COMPLETE, this.updateSize, this);
                }
            }
            if (this.group) {
                this.group.includeInLayout = false;
            }
        };
        ScaleButton.prototype.updateSize = function (event) {
            if (this._bg.texture) {
                this.width = this._bg.texture.textureWidth;
                this.height = this._bg.texture.textureHeight;
            }
        };
        ScaleButton.prototype.onTouchBegin = function (event) {
            _super.prototype.onTouchBegin.call(this, event);
            this.$stage.on(egret.TouchEvent.TOUCH_END, this.onStageTouchEnd2, this);
            if (this._bg) {
                this._bg.scaleX = this._bg.scaleY = this._scaleValue;
            }
            if (this.group) {
                this.group.scaleX = this.group.scaleY = this._scaleValue;
            }
        };
        ScaleButton.prototype.onTouchCancle = function (event) {
            _super.prototype.onTouchCancle.call(this, event);
            event.$currentTarget.off(egret.TouchEvent.TOUCH_END, this.onStageTouchEnd2, this);
            if (this._bg) {
                this._bg.scaleX = this._bg.scaleY = 1;
            }
            if (this.group) {
                this.group.scaleX = this.group.scaleY = 1;
            }
        };
        ScaleButton.prototype.onStageTouchEnd2 = function (event) {
            event.$currentTarget.off(egret.TouchEvent.TOUCH_END, this.onStageTouchEnd2, this);
            if (this._bg) {
                this._bg.scaleX = this._bg.scaleY = 1;
            }
            if (this.group) {
                this.group.scaleX = this.group.scaleY = 1;
            }
        };
        ScaleButton.prototype.updateDisplayList = function (unscaledWidth, unscaledHeight) {
            _super.prototype.updateDisplayList.call(this, unscaledWidth, unscaledHeight);
            var bg = this._bg;
            var group = this.group;
            if (bg) {
                bg.width = unscaledWidth;
                bg.height = unscaledHeight;
                bg.x = bg.anchorOffsetX = unscaledWidth >> 1;
                bg.y = bg.anchorOffsetY = unscaledHeight >> 1;
            }
            if (group) {
                group.width = unscaledWidth;
                group.height = unscaledHeight;
                group.x = group.anchorOffsetX = unscaledWidth >> 1;
                group.y = group.anchorOffsetY = unscaledHeight >> 1;
            }
        };
        return ScaleButton;
    }(eui.Button));
    game.ScaleButton = ScaleButton;
    __reflect(ScaleButton.prototype, "game.ScaleButton");
    eui.registerProperty(ScaleButton, "scaleValue", "number");
    eui.registerProperty(ScaleButton, "useImageSize", "boolean");
    window["ScaleButton"] = ScaleButton;
})(game || (game = {}));
