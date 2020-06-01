var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 模块管理器
 * @author wizardc
 */
var game;
(function (game) {
    var ModuleManager;
    (function (ModuleManager) {
        function init(container) {
            impl.init(container);
        }
        ModuleManager.init = init;
        function mapModule(moduleID, viewClass) {
            impl.mapModule(moduleID, viewClass);
        }
        ModuleManager.mapModule = mapModule;
        function addModule(moduleID, moduleVO) {
            var moduleData = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                moduleData[_i - 2] = arguments[_i];
            }
            impl.addModule.apply(impl, [moduleID, moduleVO].concat(moduleData));
        }
        ModuleManager.addModule = addModule;
        function hasModule(moduleID) {
            return impl.hasModule(moduleID);
        }
        ModuleManager.hasModule = hasModule;
        function removeModule(moduleID) {
            impl.removeModule(moduleID);
        }
        ModuleManager.removeModule = removeModule;
        var Impl = (function () {
            function Impl() {
                this._viewClassMap = {};
                this._viewMap = {};
                this._showViewMap = {};
            }
            Impl.prototype.init = function (container) {
                this._container = container;
                this._viewResMgr = game.$singlon(game.ModuleResMgr);
            };
            Impl.prototype.mapModule = function (moduleID, viewClass) {
                this._viewClassMap[moduleID] = viewClass;
            };
            Impl.prototype.addModule = function (moduleID, moduleVO) {
                var moduleData = [];
                for (var _i = 2; _i < arguments.length; _i++) {
                    moduleData[_i - 2] = arguments[_i];
                }
                if (this._showViewMap[moduleID]) {
                    var view_1 = this._viewMap[moduleID];
                    var mediator_1 = game.$facade.getMediator(view_1);
                    if (moduleVO && moduleVO.tabData && moduleVO.tabData.length && typeof mediator_1.setTabData === "function") {
                        (_a = mediator_1).setTabData.apply(_a, moduleVO.tabData);
                    }
                    if (typeof mediator_1.setModuleData === "function") {
                        (_b = mediator_1).setModuleData.apply(_b, moduleData);
                    }
                    return;
                }
                if (!this._viewMap[moduleID]) {
                    var viewClass = this._viewClassMap[moduleID];
                    if (!viewClass) {
                        throw new Error("没有对应的模块视图类映射！");
                    }
                    this._viewMap[moduleID] = this._viewResMgr.getRes(moduleID, viewClass);
                }
                var view = this._viewMap[moduleID];
                var layer = this.getModuleLayer(view.layer);
                layer.addChild(view);
                var mediator = game.$facade.getMediator(view);
                if (moduleVO && moduleVO.tabData && moduleVO.tabData.length && typeof mediator.setTabData === "function") {
                    (_c = mediator).setTabData.apply(_c, moduleVO.tabData);
                }
                if (typeof mediator.setModuleData === "function") {
                    (_d = mediator).setModuleData.apply(_d, moduleData);
                }
                this._showViewMap[moduleID] = true;
                // 特殊窗口
                switch (view.layer) {
                    case 4 /* fullWindowLayer */:
                        game.FullWindowManager.addFullWindow(moduleID, view);
                        break;
                    case 6 /* dialogLayer */:
                        game.DialogManager.addDialog(moduleID, view);
                        break;
                }
                // 返回
                if (moduleVO && !isNaN(moduleVO.prevModuleID)) {
                    game.PrevModuleLogic.record(moduleID, moduleVO);
                }
                else {
                    game.PrevModuleLogic.clear(moduleID);
                }
                game.$facade.dispatch(4 /* moduleAdded */, moduleID);
                var _a, _b, _c, _d;
            };
            Impl.prototype.getModuleLayer = function (layer) {
                switch (layer) {
                    case 0 /* sceneLayer */:
                        return this._container.sceneLayer;
                    case 1 /* weatherLayer */:
                        return this._container.weatherLayer;
                    case 2 /* bottomLayer */:
                        return this._container.bottomLayer;
                    case 3 /* bottomUILayer */:
                        return this._container.bottomUILayer;
                    case 4 /* fullWindowLayer */:
                        return this._container.fullWindowLayer;
                    case 5 /* mainUILayer */:
                        return this._container.mainUILayer;
                    case 6 /* dialogLayer */:
                        return this._container.dialogLayer;
                    case 7 /* popLayer */:
                        return this._container.popLayer;
                    case 8 /* alertLayer */:
                        return this._container.alertLayer;
                    case 9 /* guideLayer */:
                        return this._container.guideLayer;
                    case 10 /* messageLayer */:
                        return this._container.messageLayer;
                    case 11 /* topLayer */:
                        return this._container.topLayer;
                }
                return undefined;
            };
            Impl.prototype.hasModule = function (moduleID) {
                return !!this._showViewMap[moduleID];
            };
            Impl.prototype.removeModule = function (moduleID) {
                if (this._showViewMap[moduleID]) {
                    var view = this._viewMap[moduleID];
                    // 特殊窗口
                    if (view.layer != 4 /* fullWindowLayer */ && view.layer != 6 /* dialogLayer */) {
                        view.removeSelf();
                    }
                    this._viewResMgr.putRes(moduleID);
                    delete this._showViewMap[moduleID];
                    delete this._viewMap[moduleID];
                    // 特殊窗口
                    switch (view.layer) {
                        case 4 /* fullWindowLayer */:
                            game.FullWindowManager.removeFullWindow();
                            break;
                        case 6 /* dialogLayer */:
                            game.DialogManager.removeDialog(moduleID);
                            break;
                    }
                    game.$facade.dispatch(5 /* moduleRemoved */, moduleID);
                }
            };
            return Impl;
        }());
        __reflect(Impl.prototype, "Impl");
        var impl = new Impl();
    })(ModuleManager = game.ModuleManager || (game.ModuleManager = {}));
})(game || (game = {}));
