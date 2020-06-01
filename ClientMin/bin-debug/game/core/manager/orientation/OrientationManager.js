var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var game;
(function (game) {
    /**
     * 屏幕旋转管理器
     * @author wizardc
     */
    var OrientationManager = (function () {
        function OrientationManager() {
        }
        Object.defineProperty(OrientationManager, "orientation", {
            get: function () {
                return this._orientation;
            },
            set: function (value) {
                if (this._orientation == value) {
                    return;
                }
                if (value != egret.OrientationMode.PORTRAIT && value != egret.OrientationMode.LANDSCAPE && value != egret.OrientationMode.LANDSCAPE_FLIPPED) {
                    return;
                }
                this._orientation = value;
                game.$stage.orientation = this._orientation;
                if (this._orientation == egret.OrientationMode.PORTRAIT) {
                    game.$stage.setContentSize(this._designWidth, this._designHeight);
                }
                else {
                    game.$stage.setContentSize(this._designHeight, this._designWidth);
                }
                game.$facade.dispatch(1 /* orientationChanged */);
            },
            enumerable: true,
            configurable: true
        });
        OrientationManager._orientation = egret.OrientationMode.PORTRAIT;
        OrientationManager._designWidth = 640;
        OrientationManager._designHeight = 1136;
        return OrientationManager;
    }());
    game.OrientationManager = OrientationManager;
    __reflect(OrientationManager.prototype, "game.OrientationManager");
})(game || (game = {}));
