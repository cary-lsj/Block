var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var game;
(function (game) {
    /**
     * 管理程序中使用到的所有中介对象
     * @author wizardc
     */
    var ViewManager = (function () {
        function ViewManager() {
            this._classMap = {};
            this._viewMap = new game.Dictionary();
        }
        Object.defineProperty(ViewManager, "instance", {
            get: function () {
                return ViewManager._instance || (ViewManager._instance = new ViewManager());
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ViewManager.prototype, "contextView", {
            get: function () {
                return this._contextView;
            },
            set: function (value) {
                if (this._contextView == value) {
                    return;
                }
                if (this._contextView) {
                    this.removeListeners();
                }
                this._contextView = value;
                if (this._contextView) {
                    this.addListeners();
                }
            },
            enumerable: true,
            configurable: true
        });
        ViewManager.prototype.addListeners = function () {
            this._contextView.on(egret.Event.ADDED, this.onViewAdded, this, true);
        };
        ViewManager.prototype.removeListeners = function () {
            this._contextView.off(egret.Event.ADDED, this.onViewAdded, this, true);
        };
        ViewManager.prototype.onViewAdded = function (event) {
            var viewObject = event.target;
            this.addView(viewObject);
        };
        ViewManager.prototype.addView = function (viewObject) {
            var key = egret.getQualifiedClassName(viewObject);
            if (this._classMap.hasOwnProperty(key)) {
                this.createMediator(viewObject);
            }
        };
        ViewManager.prototype.createMediator = function (viewObject) {
            if (this._viewMap.has(viewObject)) {
                return;
            }
            if (!viewObject) {
                throw new Error("参数不能为空！");
            }
            var key = egret.getQualifiedClassName(viewObject);
            if (!this._classMap.hasOwnProperty(key)) {
                throw new Error("没有映射关系！");
            }
            viewObject.once(egret.Event.REMOVED_FROM_STAGE, this.onViewRemoved, this);
            var mediatorClass = this._classMap[key];
            var mediator = game.recyclable(mediatorClass);
            mediator.view = viewObject;
            mediator.onRegister();
            this._viewMap.add(viewObject, mediator);
        };
        ViewManager.prototype.onViewRemoved = function (event) {
            var viewObject = event.currentTarget;
            if (this._viewMap.has(viewObject)) {
                this.destroyMediator(viewObject);
            }
        };
        ViewManager.prototype.destroyMediator = function (viewObject) {
            if (!viewObject) {
                throw new Error("参数不能为空！");
            }
            if (!this._viewMap.has(viewObject)) {
                return;
            }
            var mediator = this._viewMap.get(viewObject);
            mediator.onRemove();
            mediator.recycle();
            this._viewMap.remove(viewObject);
        };
        ViewManager.prototype.registerMediator = function (viewClass, mediatorClass) {
            if (!viewClass || !mediatorClass) {
                throw new Error("参数不能为空！");
            }
            var key = egret.getQualifiedClassName(viewClass);
            if (this._classMap.hasOwnProperty(key)) {
                throw new Error("映射已经存在，不能重复添加映射关系！");
            }
            this._classMap[key] = mediatorClass;
            viewClass.__isMediatorView = true;
        };
        ViewManager.prototype.hasMediator = function (viewClass) {
            var key = egret.getQualifiedClassName(viewClass);
            return this._classMap.hasOwnProperty(key);
        };
        ViewManager.prototype.getMediator = function (viewObject) {
            return this._viewMap.get(viewObject);
        };
        ViewManager.prototype.removeMediator = function (viewClass, mediatorClass) {
            if (!viewClass || !mediatorClass) {
                throw new Error("参数不能为空！");
            }
            var key = egret.getQualifiedClassName(viewClass);
            delete this._classMap[key];
        };
        return ViewManager;
    }());
    game.ViewManager = ViewManager;
    __reflect(ViewManager.prototype, "game.ViewManager");
})(game || (game = {}));
