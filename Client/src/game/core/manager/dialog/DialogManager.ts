/**
 * 对话窗口管理器
 * @author wizardc
 */
namespace game.DialogManager {
    const useTween: boolean = false;

    export function init(container: eui.Group): void {
        impl.init(container);
    }

    export function setMaskVisible(visible: boolean): void {
        impl.maskVisible = visible;
    }

    export function hasMask(): boolean {
        return impl.hasMask();
    }   

    /**
     * @ignore
     * 不要直接调用该方法, 使用 $facade.addModule
     */
    export function addDialog(moduleID: ModuleID, dialog: DialogBase<eui.Component>): void {
        impl.addDialog(moduleID, dialog);
    }

    export function setToTop(moduleID: ModuleID): void {
        impl.setToTop(moduleID);
    }

    export function hasDialog(moduleID: ModuleID): boolean {
        return impl.hasDialog(moduleID);
    }

    /**
     * @ignore
     * 不要直接调用该方法, 使用 $facade.removeModule
     */
    export function removeDialog(moduleID: ModuleID): void {
        impl.removeDialog(moduleID);
    }

    export function removeAllDialog(): void {
        impl.removeAllDialog();
    }

    class Impl {
        private _container: eui.Group;
        private _mask: eui.Rect;
        private _dialogList: DialogBase<eui.Component>[];
        private _dialogMap: {[id: number]: DialogBase<eui.Component>};
        private _moduleIDMap: {[k: number]: ModuleID};

        public constructor() {
            this._dialogList = [];
            this._dialogMap = {};
            this._moduleIDMap = {};
        }

        public set maskVisible(value: boolean) {
            this._mask.visible = value;
        }
        public get maskVisible(): boolean {
            return this._mask.visible;
        }

        public init(container: eui.Group): void {
            this._container = container;

            let mask = this._mask = new eui.Rect();
            mask.percentWidth = 100;
            mask.percentHeight = 100;
            mask.fillColor = 0x000000;
            mask.fillAlpha = 0.75;
            mask.on(egret.TouchEvent.TOUCH_TAP, this.onMaskTap, this);
        }

        private onMaskTap(event: egret.TouchEvent): void {
            for (let i = this._dialogList.length - 1; i >= 0; i--) {
                let dialog = this._dialogList[i];
                if (dialog.modal && !dialog.hiding) {
                    if (dialog.tapMaskClose) {
                        let moduleID = this._moduleIDMap[dialog.hashCode];
                        $facade.removeModule(moduleID);
                    }
                    break;
                }
            }
        }

        private checkMask(): void {
            let list = this._dialogList;
            let mask = this._mask;
            let container = this._container;

            if (list.length == 0) {
                mask.removeSelf();
            } else {
                for (let i = list.length - 1; i >= 0; i--) {
                    if (list[i].modal) {
                        if (mask.parent) {
                            container.setChildIndex(mask, container.numChildren - 1);
                        } else {
                            container.addChild(mask);
                        }
                        container.setChildIndex(mask, i);
                        break;
                    }
                }
            }

        }

        public hasMask(): boolean {
            return !!this._mask.stage;
        }

        public addDialog(moduleID: ModuleID, dialog: DialogBase<eui.Component>): void {
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
                egret.Tween.get(dialog).to({alpha: 1}, 200);
            }
        }

        public setToTop(moduleID: ModuleID): void {
            let dialog = this._dialogMap[moduleID];
            if (!dialog) {
                return;
            }
            this._mask.removeSelf();
            this._container.setChildIndex(dialog, this._container.numChildren - 1);
            this.checkMask();
        }

        public hasDialog(moduleID: ModuleID): boolean {
            return !!this._dialogMap[moduleID];
        }

        public removeDialog(moduleID: ModuleID): void {
            let dialog = this._dialogMap[moduleID];
            if (!dialog) {
                return;
            }
            this._dialogList.remove(dialog);
            delete this._dialogMap[moduleID];
            delete this._moduleIDMap[dialog.hashCode];
            if (useTween) {
                dialog.hiding = true;
                egret.Tween.get(dialog).to({alpha: 0}, 100).call(this.closeDialog, this, [dialog, moduleID]);
            } else {
                this.closeDialog(dialog, moduleID);
            }
        }

        private closeDialog(dialog: DialogBase<eui.Component>, moduleID: ModuleID): void {
            dialog.hiding = false;
            dialog.removeSelf();
            this.checkMask();
        }

        public removeAllDialog(): void {
            for (let key in this._moduleIDMap) {
                let moduleID = this._moduleIDMap[key];
                $facade.removeModule(moduleID);
            }
        }
    }

    const impl = new Impl();
}
