namespace game {
    /**
     * 管理程序中使用到的所有代理对象
     * @author wizardc
     */
    export class ModelManager {
        private static _instance: ModelManager;

        public static get instance(): ModelManager {
            return ModelManager._instance || (ModelManager._instance = new ModelManager());
        }

        private _proxyMap: {[k: string]: IProxy};

        private constructor() {
            this._proxyMap = {};
        }

        public registerProxy(proxy: IProxy): void {
            let p = String(proxy.name);
            if (this.hasProxy(p)) {
                throw new Error("需要注册的代理名称已经存在！");
            }
            this._proxyMap[p] = proxy;
            proxy.onRegister();
        }

        public hasProxy(proxyName: string | ProxyID): boolean {
            return this._proxyMap.hasOwnProperty(String(proxyName));
        }

        public getProxy(proxyName: string | ProxyID): IProxy {
            return this._proxyMap[String(proxyName)];
        }

        public removeProxy(proxyName: string | ProxyID): IProxy {
            let p = String(proxyName);
            let proxy = this.getProxy(p);
            if (proxy) {
                proxy.onRemove();
                delete this._proxyMap[p];
            }
            return proxy;
        }
    }
}
