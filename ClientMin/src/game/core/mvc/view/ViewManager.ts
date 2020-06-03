namespace game {
    /**
     * 管理程序中使用到的所有中介对象
     * @author wizardc
     */
    export class ViewManager {
        private static _instance: ViewManager;

        public static get instance(): ViewManager {
            return ViewManager._instance || (ViewManager._instance = new ViewManager());
        }

        private _classMap: { [k: string]: { new(): IMediator<egret.DisplayObject> } };
        private _viewMap: Dictionary<egret.DisplayObject, IMediator<egret.DisplayObject>>;
        private _contextView: egret.DisplayObjectContainer;

        private constructor() {
            this._classMap = {};
            this._viewMap = new Dictionary<egret.DisplayObject, IMediator<egret.DisplayObject>>();
        }

        public set contextView(value: egret.DisplayObjectContainer) {
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
        }
        public get contextView(): egret.DisplayObjectContainer {
            return this._contextView;
        }

        private addListeners(): void {
            this._contextView.on(egret.Event.ADDED, this.onViewAdded, this, true);
        }

        private removeListeners(): void {
            this._contextView.off(egret.Event.ADDED, this.onViewAdded, this, true);
        }

        private onViewAdded(event: egret.Event): void {
            let viewObject: egret.DisplayObject = event.target;
            this.addView(viewObject);
        }

        private addView(viewObject: egret.DisplayObject): void {
            let key = egret.getQualifiedClassName(viewObject);
            if (this._classMap.hasOwnProperty(key)) {
                this.createMediator(viewObject);
            }
        }

        private createMediator(viewObject: egret.DisplayObject): void {
            if (this._viewMap.has(viewObject)) {
                return;
            }
            if (!viewObject) {
                throw new Error("参数不能为空！");
            }
            let key = egret.getQualifiedClassName(viewObject);
            if (!this._classMap.hasOwnProperty(key)) {
                throw new Error("没有映射关系！");
            }
            viewObject.once(egret.Event.REMOVED_FROM_STAGE, this.onViewRemoved, this);
            let mediatorClass = this._classMap[key];
            let mediator = recyclable(mediatorClass);
            this._viewMap.add(viewObject, mediator);
            mediator.view = viewObject;
            mediator.onRegister();
        }

        private onViewRemoved(event: egret.Event): void {
            let viewObject: egret.DisplayObject = event.currentTarget;
            if (this._viewMap.has(viewObject)) {
                this.destroyMediator(viewObject);
            }
        }

        private destroyMediator(viewObject: egret.DisplayObject): void {
            if (!viewObject) {
                throw new Error("参数不能为空！");
            }
            if (!this._viewMap.has(viewObject)) {
                return;
            }
            let mediator = this._viewMap.get(viewObject);
            mediator.onRemove();
            (<Recyclable<IMediator<egret.DisplayObject>>>mediator).recycle();
            this._viewMap.remove(viewObject);
        }

        public registerMediator<T extends egret.DisplayObject>(viewClass: { new(): T }, mediatorClass: { new(): IMediator<T> }): void {
            if (!viewClass || !mediatorClass) {
                throw new Error("参数不能为空！");
            }
            let key = egret.getQualifiedClassName(viewClass);
            if (this._classMap.hasOwnProperty(key)) {
                throw new Error("映射已经存在，不能重复添加映射关系！");
            }
            this._classMap[key] = mediatorClass;
            (<any>viewClass).__isMediatorView = true;
        }

        public hasMediator<T extends egret.DisplayObject>(viewClass: { new(): T }): boolean {
            let key = egret.getQualifiedClassName(viewClass);
            return this._classMap.hasOwnProperty(key);
        }

        public getMediator<T extends egret.DisplayObject>(viewObject: T): IMediator<T> {
            return <IMediator<T>>this._viewMap.get(viewObject);
        }

        public removeMediator<T extends egret.DisplayObject>(viewClass: { new(): T }, mediatorClass: { new(): IMediator<T> }): void {
            if (!viewClass || !mediatorClass) {
                throw new Error("参数不能为空！");
            }
            let key = egret.getQualifiedClassName(viewClass);
            delete this._classMap[key];
        }
    }
}
