/**
 * 全屏窗口管理器
 * @author wizardc
 */
namespace game.FullWindowManager {
    export function init(container: eui.Group): void {
        impl.init(container);
    }

    export function setMaskVisible(visible: boolean): void {
        impl.maskVisible = visible;
    }

    export function getNowModuleID(): ModuleID {
        return impl.moduleID;
    }

    /**
     * @ignore
     * 不要直接调用该方法, 使用 $facade.addModule
     */
    export function addFullWindow(moduleID: ModuleID, fullWindow: egret.DisplayObject & IModuleView): void {
        impl.addFullWindow(moduleID, fullWindow);
    }

    export function hasFullWindow(): boolean {
        return impl.hasFullWindow();
    }

    /**
     * @ignore
     * 不要直接调用该方法, 使用 $facade.removeModule
     */
    export function removeFullWindow(): void {
        impl.removeFullWindow();
    }

    export function closeFullWindow(): void {
        impl.closeFullWindow();
    }

    class Impl {
        private _container: eui.Group;
        private _mask: eui.Rect;
        private _moduleID: ModuleID;
        private _fullWindow: egret.DisplayObject & IModuleView;

        public set maskVisible(value: boolean) {
            this._mask.visible = value;
        }
        public get maskVisible(): boolean {
            return this._mask.visible;
        }

        public get moduleID(): ModuleID {
            return this._moduleID;
        }

        public init(container: eui.Group): void {
            this._container = container;

            let mask = this._mask = new eui.Rect();
            mask.percentWidth = 100;
            mask.percentHeight = 100;
            mask.fillColor = 0x000000;
            mask.fillAlpha = 0;
        }

        public addFullWindow(moduleID: ModuleID, fullWindow: egret.DisplayObject & IModuleView): void {
            this.closeFullWindow();
            this._moduleID = moduleID;
            this._fullWindow = fullWindow;
            this._container.addChildAt(this._mask, 0);
        }

        public hasFullWindow(): boolean {
            return !isNaN(this._moduleID);
        }

        public removeFullWindow(): void {
            if (isNaN(this._moduleID)) {
                return;
            }
            this._fullWindow.removeSelf();
            this._mask.removeSelf();
            this._moduleID = undefined;
            this._fullWindow = undefined;
        }

        public closeFullWindow(): void {
            if (isNaN(this._moduleID)) {
                return;
            }
            $facade.removeModule(this._moduleID);
        }
    }

    const impl = new Impl();
}
