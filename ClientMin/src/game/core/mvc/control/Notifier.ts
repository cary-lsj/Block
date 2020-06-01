namespace game {
    /**
     * 简单的消息发送对象
     * @author wizardc
     */
    export class Notifier implements INotifier {
        protected __injectProxyMap: {[key: string]: string[]};

        public constructor() {
            let injectProxyMap: {[key: string]: string[]} = this.__injectProxyMap;
            for (let proxyName in injectProxyMap) {
                let propertyKeys = injectProxyMap[proxyName];
                for (let i = 0, len = propertyKeys.length; i < len; i++) {
                    let propertyKey = propertyKeys[i];
                    this[propertyKey] = ModelManager.instance.getProxy(proxyName);
                }
            }
        }

        public dispatch(notifyName: string | NotifyConst, ...args): void {
            Controller.instance.executeCommand(notifyName, ...args);
            Provider.instance.dispatch(notifyName, ...args);
        }
    }
}
