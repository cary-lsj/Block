namespace game {
    /**
     * 一个简单的观察者
     * @author cary
     */
    export abstract class Observer extends Notifier implements IObserver {
        public constructor() {
            super();
        }

        public addListener(notifyName: string | NotifyConst, callback: Function, thisObj?: any): void {
            Provider.instance.addListener(notifyName, callback, thisObj);
        }

        public removeListener(notifyName: string | NotifyConst, callback: Function, thisObj?: any): void {
            Provider.instance.removeListener(notifyName, callback, thisObj);
        }
    }
}
