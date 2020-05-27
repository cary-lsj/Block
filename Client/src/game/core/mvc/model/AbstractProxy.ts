namespace game {
    /**
     * 代理基类
     * @author wizardc
     */
    export abstract class AbstractProxy extends Notifier implements IProxy {
        protected _facade: Facade = Facade.instance;
        protected _name: string | ProxyID;

        public constructor(name: string | ProxyID) {
            super();
            this._name = name;
        }

        public get name(): string | ProxyID {
            return this._name;
        }

        public onRegister(): void {
        }

        public onRemove(): void {
        }
    }

    export function InjectProxy(proxyName: string | ProxyID) {
        let p = String(proxyName);
        return function (target: any, propertyKey: string) {
            if (!target.__injectProxyMap) {
                target.__injectProxyMap = {};
            }
            let map: {[key: string]: string[]} = target.__injectProxyMap;
            if (!map[p]) {
                map[p] = [];
            }
            let list = map[p];
            if (list.indexOf(propertyKey) == -1) {
                list.push(propertyKey);
            }
        };
    }
}
