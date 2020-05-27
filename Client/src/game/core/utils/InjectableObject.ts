namespace game {
    /**
     * 可注入类
     * @author wizardc
     */
    export abstract class InjectableObject extends Notifier {
        private __interestNotifyList: {[key: string]: Function[]};

        protected _facade: Facade = Facade.instance;

        public constructor(defaultMap: boolean = true) {
            super();

            if (defaultMap) {
                this.map();
            }
        }

        protected map(): void {
            let al = $facade.addListener.bind($facade);
            let interestNotifyList = this.__interestNotifyList;
            for (let notifyName in interestNotifyList) {
                let callbackList = interestNotifyList[notifyName];
                for (let k in callbackList) {
                    let callback = callbackList[k];
                    al(notifyName, callback, this);
                }
            }
        }

        protected unmap(): void {
            let rl = $facade.removeListener.bind($facade);
            let interestNotifyList = this.__interestNotifyList;
            for (let notifyName in interestNotifyList) {
                let callbackList = interestNotifyList[notifyName];
                for (let k in callbackList) {
                    let callback = callbackList[k];
                    rl(notifyName, callback, this);
                }
            }
        }
    }
}
