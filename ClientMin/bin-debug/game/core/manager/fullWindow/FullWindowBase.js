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
     * 全屏窗口基类
     * @author wizardc
     */
    var FullWindowBase = (function (_super) {
        __extends(FullWindowBase, _super);
        function FullWindowBase(skinName) {
            var _this = _super.call(this) || this;
            _this.horizontalCenter = 0;
            _this.skinName = skinName;
            return _this;
        }
        Object.defineProperty(FullWindowBase.prototype, "layer", {
            get: function () {
                return 4 /* fullWindowLayer */;
            },
            enumerable: true,
            configurable: true
        });
        FullWindowBase.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.percentHeight = 100;
            this._component = this.createComponent();
            if (this.content && this._component) {
                this.content.addChild(this._component);
            }
        };
        return FullWindowBase;
    }(eui.Component));
    game.FullWindowBase = FullWindowBase;
    __reflect(FullWindowBase.prototype, "game.FullWindowBase", ["game.IModuleView"]);
})(game || (game = {}));
