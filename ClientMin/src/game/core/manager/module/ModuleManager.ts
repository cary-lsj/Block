/**
 * 模块管理器
 * @author cary
 */
namespace game.ModuleManager {
    export function init(container: IModuleContainer): void {
        impl.init(container);
    }

    export function mapModule<T extends egret.DisplayObject & IModuleView>(moduleID: ModuleID, viewClass: { new(): T }): void {
        impl.mapModule(moduleID, viewClass);
    }

    export function addModule(moduleID: ModuleID, moduleVO?: ModuleVO, ...moduleData): void {
        impl.addModule(moduleID, moduleVO, ...moduleData);
    }

    export function hasModule(moduleID: ModuleID): boolean {
        return impl.hasModule(moduleID);
    }

    export function removeModule(moduleID: ModuleID): void {
        impl.removeModule(moduleID);
    }

    class Impl<T extends egret.DisplayObject & IModuleView> {
        private _container: IModuleContainer;
        private _viewClassMap: { [k: number]: { new(): T } };
        private _viewResMgr: ModuleResMgr;
        private _viewMap: { [k: number]: T };
        private _showViewMap: { [k: number]: boolean };

        public constructor() {
            this._viewClassMap = {};
            this._viewMap = {};
            this._showViewMap = {};
        }

        public init(container: IModuleContainer): void {
            this._container = container;
            this._viewResMgr = $singlon(ModuleResMgr);
        }

        public mapModule(moduleID: ModuleID, viewClass: { new(): T }): void {
            this._viewClassMap[moduleID] = viewClass;
        }

        public addModule(moduleID: ModuleID, moduleVO?: ModuleVO, ...moduleData): void {
            if (this._showViewMap[moduleID]) {
                let view = this._viewMap[moduleID];
                let mediator = $facade.getMediator(view);
                if (moduleVO && moduleVO.tabData && moduleVO.tabData.length && typeof (<any>mediator).setTabData === "function") {
                    (<any>mediator).setTabData(...moduleVO.tabData);
                }
                if (typeof (<any>mediator).setModuleData === "function") {
                    (<any>mediator).setModuleData(...moduleData);
                }
                return;
            }
            if (!this._viewMap[moduleID]) {
                let viewClass = this._viewClassMap[moduleID];
                if (!viewClass) {
                    throw new Error("没有对应的模块视图类映射！");
                }
                this._viewMap[moduleID] = this._viewResMgr.getRes(moduleID, viewClass);
            }
            let view = this._viewMap[moduleID];
            let layer = this.getModuleLayer(view.layer);
            layer.addChild(view);
            let mediator = $facade.getMediator(view);
            if (moduleVO && moduleVO.tabData && moduleVO.tabData.length && typeof (<any>mediator).setTabData === "function") {
                (<any>mediator).setTabData(...moduleVO.tabData);
            }
            if (typeof (<any>mediator).setModuleData === "function") {
                (<any>mediator).setModuleData(...moduleData);
            }
            this._showViewMap[moduleID] = true;
            // 特殊窗口
            switch (view.layer) {
                case ModuleLayer.fullWindowLayer:
                    FullWindowManager.addFullWindow(moduleID, view);
                    break;
                case ModuleLayer.dialogLayer:
                    DialogManager.addDialog(moduleID, <any>view);
                    break;
            }
            // 返回
            if (moduleVO && !isNaN(moduleVO.prevModuleID)) {
                PrevModuleLogic.record(moduleID, moduleVO);
            } else {
                PrevModuleLogic.clear(moduleID);
            }
            $facade.dispatch(NotifyConst.moduleAdded, moduleID);
        }

        private getModuleLayer(layer: ModuleLayer): egret.DisplayObjectContainer {
            switch (layer) {
                case ModuleLayer.sceneLayer:
                    return this._container.sceneLayer;
                case ModuleLayer.weatherLayer:
                    return this._container.weatherLayer;
                case ModuleLayer.bottomLayer:
                    return this._container.bottomLayer;
                case ModuleLayer.bottomUILayer:
                    return this._container.bottomUILayer;
                case ModuleLayer.fullWindowLayer:
                    return this._container.fullWindowLayer;
                case ModuleLayer.mainUILayer:
                    return this._container.mainUILayer;
                case ModuleLayer.dialogLayer:
                    return this._container.dialogLayer;
                case ModuleLayer.popLayer:
                    return this._container.popLayer;
                case ModuleLayer.alertLayer:
                    return this._container.alertLayer;
                case ModuleLayer.guideLayer:
                    return this._container.guideLayer;
                case ModuleLayer.messageLayer:
                    return this._container.messageLayer;
                case ModuleLayer.topLayer:
                    return this._container.topLayer;
            }
            return undefined;
        }

        public hasModule(moduleID: ModuleID): boolean {
            return !!this._showViewMap[moduleID];
        }

        public removeModule(moduleID: ModuleID): void {
            if (this._showViewMap[moduleID]) {
                let view = this._viewMap[moduleID];
                // 特殊窗口
                if (view.layer != ModuleLayer.fullWindowLayer && view.layer != ModuleLayer.dialogLayer) {
                    view.removeSelf();
                }
                this._viewResMgr.putRes(moduleID);
                delete this._showViewMap[moduleID];
                delete this._viewMap[moduleID];
                // 特殊窗口
                switch (view.layer) {
                    case ModuleLayer.fullWindowLayer:
                        FullWindowManager.removeFullWindow();
                        break;
                    case ModuleLayer.dialogLayer:
                        DialogManager.removeDialog(moduleID);
                        break;
                }
                $facade.dispatch(NotifyConst.moduleRemoved, moduleID);
            }
        }
    }

    const impl = new Impl();
}
