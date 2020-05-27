namespace game {
    /**
     * 代理 MVC 中所有处理方法
     * @author wizardc
     */
    export class Facade {
        private static _instance: Facade;

        public static get instance(): Facade {
            return Facade._instance || (Facade._instance = new Facade());
        }

        protected _controller: Controller;
        protected _provider: Provider;
        protected _modelManager: ModelManager;
        protected _viewManager: ViewManager;

        private constructor() {
            this._controller = Controller.instance;
            this._provider = Provider.instance;
            this._modelManager = ModelManager.instance;
            this._viewManager = ViewManager.instance;
        }

        public dispatch(notifyName: string | NotifyConst, ...args): void {
            this._controller.executeCommand(notifyName, ...args);
            this._provider.dispatch(notifyName, ...args);
        }

        public registerCommand(notifyName: string | NotifyConst, commandClass: {new(): ICommand}): void {
            this._controller.registerCommand(notifyName, commandClass);
        }

        public hasCommand(notifyName: string | NotifyConst): boolean {
            return this._controller.hasCommand(notifyName);
        }

        public removeCommand(notifyName: string | NotifyConst): void {
            this._controller.removeCommand(notifyName);
        }

        public addListener(notifyName: string | NotifyConst, callback: Function, thisObj: any): void {
            this._provider.addListener(notifyName, callback, thisObj);
        }

        public removeListener(notifyName: string | NotifyConst, callback: Function, thisObj?: any): void {
            this._provider.removeListener(notifyName, callback, thisObj);
        }

        public registerProxy(proxy: IProxy): void {
            this._modelManager.registerProxy(proxy);
        }

        public hasProxy(proxyName: string | ProxyID): boolean {
            return this._modelManager.hasProxy(proxyName);
        }

        public getProxy(proxyName: string | ProxyID): IProxy {
            return this._modelManager.getProxy(proxyName);
        }

        public removeProxy(proxyName: string | ProxyID): IProxy {
            return this._modelManager.removeProxy(proxyName);
        }

        public set contextView(value: egret.DisplayObjectContainer) {
            this._viewManager.contextView = value;
        }
        public get contextView(): egret.DisplayObjectContainer {
            return this._viewManager.contextView;
        }

        public registerMediator<T extends egret.DisplayObject>(viewClass: {new(): T}, mediatorClass: {new(): IMediator<T>}): void {
            this._viewManager.registerMediator(viewClass, mediatorClass);
        }

        public hasMediator<T extends egret.DisplayObject>(viewClass: {new(): T}): boolean {
            return this._viewManager.hasMediator(viewClass);
        }

        public getMediator<T extends egret.DisplayObject>(viewObject: T): IMediator<T> {
            return this._viewManager.getMediator(viewObject);
        }

        public removeMediator<T extends egret.DisplayObject>(viewClass: {new(): T}, mediatorClass: {new(): IMediator<T>}): void {
            this._viewManager.removeMediator(viewClass, mediatorClass);
        }
    }
}
