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
     * 对话框基类
     * @author wizardc
     */
    var DialogBase = (function (_super) {
        __extends(DialogBase, _super);
        function DialogBase(skinName, position) {
            var _this = _super.call(this) || this;
            _this._modal = true;
            _this._tapMaskClose = true;
            _this._hiding = false;
            if (position) {
                position.shallowCloneTo(_this);
            }
            else {
                _this.horizontalCenter = 0;
                _this.verticalCenter = -40;
            }
            _this.skinName = skinName;
            return _this;
        }
        Object.defineProperty(DialogBase.prototype, "layer", {
            get: function () {
                return 6 /* dialogLayer */;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DialogBase.prototype, "modal", {
            get: function () {
                return this._modal;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DialogBase.prototype, "tapMaskClose", {
            get: function () {
                return this._tapMaskClose;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DialogBase.prototype, "hiding", {
            get: function () {
                return this._hiding;
            },
            set: function (value) {
                this._hiding = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DialogBase.prototype, "component", {
            get: function () {
                return this._component;
            },
            enumerable: true,
            configurable: true
        });
        DialogBase.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this._component = this.createComponent();
            if (this.content && this._component) {
                this.content.addChild(this._component);
            }
        };
        return DialogBase;
    }(eui.Component));
    game.DialogBase = DialogBase;
    __reflect(DialogBase.prototype, "game.DialogBase", ["game.IDialog", "egret.DisplayObject", "game.IModuleView"]);
})(game || (game = {}));
