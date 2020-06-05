namespace game {
    /**
     * 中介基类
     * @author cary
     */
    export abstract class AbstractMediator<T extends egret.DisplayObject> extends Observer implements IMediator<T> {
        protected __interestNotifyList: { [key: string]: Function[] };
        protected __interestEventList: { [key: string]: Function[] };
        protected _facade: Facade = Facade.instance;
        protected _view: T;

        public constructor() {
            super();
        }

        public set view(value: T) {
            this._view = value;
        }
        public get view(): T {
            return this._view;
        }

        public onRegister(): void {
            let al = this.addListener.bind(this);
            let interestNotifyList = this.__interestNotifyList;
            for (let notifyName in interestNotifyList) {
                let callbackList = interestNotifyList[notifyName];
                for (let k in callbackList) {
                    let callback = callbackList[k];
                    al(notifyName, callback, this);
                }
            }

            let ael = this._view.addEventListener.bind(this._view);
            let interestEventList = this.__interestEventList;
            for (let type in interestEventList) {
                let callbackList = interestEventList[type];
                for (let k in callbackList) {
                    let callback = callbackList[k];
                    ael(type, callback, this);
                }
            }
        }

        public onRemove(): void {
            let rl = this.removeListener.bind(this);
            let interestNotifyList = this.__interestNotifyList;
            for (let notifyName in interestNotifyList) {
                let callbackList = interestNotifyList[notifyName];
                for (let k in callbackList) {
                    let callback = callbackList[k];
                    rl(notifyName, callback, this);
                }
            }

            let rel = this._view.removeEventListener.bind(this._view);
            let interestEventList = this.__interestEventList;
            for (let type in interestEventList) {
                let callbackList = interestEventList[type];
                for (let k in callbackList) {
                    let callback = callbackList[k];
                    rel(type, callback, this);
                }
            }
        }
    }

    export function InterestNotify(notifyName: string | NotifyConst) {
        let n = String(notifyName);
        return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
            if (!target.__interestNotifyList) {
                target.__interestNotifyList = {};
            }
            let map: { [key: string]: Function[] } = target.__interestNotifyList;
            if (!map[n]) {
                map[n] = [];
            }
            let list = map[n];
            let func = descriptor.value;
            if (list.indexOf(func) == -1) {
                list.push(func);
            }
        };
    }

    export function InterestEvent(type: string | number) {
        return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
            if (!target.__interestEventList) {
                target.__interestEventList = {};
            }
            let map: { [key: string]: Function[] } = target.__interestEventList;
            if (!map[type]) {
                map[type] = [];
            }
            let list = map[type];
            let func = descriptor.value;
            if (list.indexOf(func) == -1) {
                list.push(func);
            }
        };
    }
}
