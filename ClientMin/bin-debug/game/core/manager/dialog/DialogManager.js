var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 对话窗口管理器
 * @author wizardc
 */
var game;
(function (game) {
    var DialogManager;
    (function (DialogManager) {
        var useTween = false;
        function init(container) {
            impl.init(container);
        }
        DialogManager.init = init;
        function setMaskVisible(visible) {
            impl.maskVisible = visible;
        }
        DialogManager.setMaskVisible = setMaskVisible;
        function hasMask() {
            return impl.hasMask();
        }
        DialogManager.hasMask = hasMask;
        /**
         * @ignore
         * 不要直接调用该方法, 使用 $facade.addModule
         */
        function addDialog(moduleID, dialog) {
            impl.addDialog(moduleID, dialog);
        }
        DialogManager.addDialog = addDialog;
        function setToTop(moduleID) {
            impl.setToTop(moduleID);
        }
        DialogManager.setToTop = setToTop;
        function hasDialog(moduleID) {
            return impl.hasDialog(moduleID);
        }
        DialogManager.hasDialog = hasDialog;
        /**
         * @ignore
         * 不要直接调用该方法, 使用 $facade.removeModule
         */
        function removeDialog(moduleID) {
            impl.removeDialog(moduleID);
        }
        DialogManager.removeDialog = removeDialog;
        function removeAllDialog() {
            impl.removeAllDialog();
        }
        DialogManager.removeAllDialog = removeAllDialog;
        var Impl = (function () {
            function Impl() {
                this._dialogList = [];
                this._dialogMap = {};
                this._moduleIDMap = {};
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
            Impl.prototype.init = function (container) {
                this._container = container;
                var mask = this._mask = new eui.Rect();
                mask.percentWidth = 100;
                mask.percentHeight = 100;
                mask.fillColor = 0x000000;
                mask.fillAlpha = 0.75;
                mask.on(egret.TouchEvent.TOUCH_TAP, this.onMaskTap, this);
            };
            Impl.prototype.onMaskTap = function (event) {
                for (var i = this._dialogList.length - 1; i >= 0; i--) {
                    var dialog = this._dialogList[i];
                    if (dialog.modal && !dialog.hiding) {
                        if (dialog.tapMaskClose) {
                            var moduleID = this._moduleIDMap[dialog.hashCode];
                            game.$facade.removeModule(moduleID);
                        }
                        break;
                    }
                }
            };
            Impl.prototype.checkMask = function () {
                var list = this._dialogList;
                var mask = this._mask;
                var container = this._container;
                if (list.length == 0) {
                    mask.removeSelf();
                }
                else {
                    for (var i = list.length - 1; i >= 0; i--) {
                        if (list[i].modal) {
                            if (mask.parent) {
                                container.setChildIndex(mask, container.numChildren - 1);
                            }
                            else {
                                container.addChild(mask);
                            }
                            container.setChildIndex(mask, i);
                            break;
                        }
                    }
                }
            };
            Impl.prototype.hasMask = function () {
                return !!this._mask.stage;
            };
            Impl.prototype.addDialog = function (moduleID, dialog) {
                if (this._dialogMap[moduleID]) {
                    this.setToTop(moduleID);
                    return;
                }
                this._dialogList.push(dialog);
                this._dialogMap[moduleID] = dialog;
                this._moduleIDMap[dialog.hashCode] = moduleID;
                this.checkMask();
                if (useTween) {
                    dialog.alpha = 0;
                    egret.Tween.get(dialog).to({ alpha: 1 }, 200);
                }
            };
            Impl.prototype.setToTop = function (moduleID) {
                var dialog = this._dialogMap[moduleID];
                if (!dialog) {
                    return;
                }
                this._mask.removeSelf();
                this._container.setChildIndex(dialog, this._container.numChildren - 1);
                this.checkMask();
            };
            Impl.prototype.hasDialog = function (moduleID) {
                return !!this._dialogMap[moduleID];
            };
            Impl.prototype.removeDialog = function (moduleID) {
                var dialog = this._dialogMap[moduleID];
                if (!dialog) {
                    return;
                }
                this._dialogList.remove(dialog);
                delete this._dialogMap[moduleID];
                delete this._moduleIDMap[dialog.hashCode];
                if (useTween) {
                    dialog.hiding = true;
                    egret.Tween.get(dialog).to({ alpha: 0 }, 100).call(this.closeDialog, this, [dialog, moduleID]);
                }
                else {
                    this.closeDialog(dialog, moduleID);
                }
            };
            Impl.prototype.closeDialog = function (dialog, moduleID) {
                dialog.hiding = false;
                dialog.removeSelf();
                this.checkMask();
            };
            Impl.prototype.removeAllDialog = function () {
                for (var key in this._moduleIDMap) {
                    var moduleID = this._moduleIDMap[key];
                    game.$facade.removeModule(moduleID);
                }
            };
            return Impl;
        }());
        __reflect(Impl.prototype, "Impl");
        var impl = new Impl();
    })(DialogManager = game.DialogManager || (game.DialogManager = {}));
})(game || (game = {}));
