var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 全屏窗口管理器
 * @author wizardc
 */
var game;
(function (game) {
    var FullWindowManager;
    (function (FullWindowManager) {
        function init(container) {
            impl.init(container);
        }
        FullWindowManager.init = init;
        function setMaskVisible(visible) {
            impl.maskVisible = visible;
        }
        FullWindowManager.setMaskVisible = setMaskVisible;
        function getNowModuleID() {
            return impl.moduleID;
        }
        FullWindowManager.getNowModuleID = getNowModuleID;
        /**
         * @ignore
         * 不要直接调用该方法, 使用 $facade.addModule
         */
        function addFullWindow(moduleID, fullWindow) {
            impl.addFullWindow(moduleID, fullWindow);
        }
        FullWindowManager.addFullWindow = addFullWindow;
        function hasFullWindow() {
            return impl.hasFullWindow();
        }
        FullWindowManager.hasFullWindow = hasFullWindow;
        /**
         * @ignore
         * 不要直接调用该方法, 使用 $facade.removeModule
         */
        function removeFullWindow() {
            impl.removeFullWindow();
        }
        FullWindowManager.removeFullWindow = removeFullWindow;
        function closeFullWindow() {
            impl.closeFullWindow();
        }
        FullWindowManager.closeFullWindow = closeFullWindow;
        var Impl = (function () {
            function Impl() {
            }
            Object.defineProperty(Impl.prototype, "maskVisible", {
                get: function () {
                    return this._mask.visible;
                },
                set: function (value) {
                    this._mask.visible = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Impl.prototype, "moduleID", {
                get: function () {
                    return this._moduleID;
                },
                enumerable: true,
                configurable: true
            });
            Impl.prototype.init = function (container) {
                this._container = container;
                var mask = this._mask = new eui.Rect();
                mask.percentWidth = 100;
                mask.percentHeight = 100;
                mask.fillColor = 0x000000;
                mask.fillAlpha = 0;
            };
            Impl.prototype.addFullWindow = function (moduleID, fullWindow) {
                this.closeFullWindow();
                this._moduleID = moduleID;
                this._fullWindow = fullWindow;
                this._container.addChildAt(this._mask, 0);
            };
            Impl.prototype.hasFullWindow = function () {
                return !isNaN(this._moduleID);
            };
            Impl.prototype.removeFullWindow = function () {
                if (isNaN(this._moduleID)) {
                    return;
                }
                this._fullWindow.removeSelf();
                this._mask.removeSelf();
                this._moduleID = undefined;
                this._fullWindow = undefined;
            };
            Impl.prototype.closeFullWindow = function () {
                if (isNaN(this._moduleID)) {
                    return;
                }
                game.$facade.removeModule(this._moduleID);
            };
            return Impl;
        }());
        __reflect(Impl.prototype, "Impl");
        var impl = new Impl();
    })(FullWindowManager = game.FullWindowManager || (game.FullWindowManager = {}));
})(game || (game = {}));
