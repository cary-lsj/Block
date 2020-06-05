namespace game {
    /**
     * 观察者模式的实现
     * @author cary
     */
    export class Provider {
        private static _instance: Provider;

        public static get instance(): Provider {
            return Provider._instance || (Provider._instance = new Provider());
        }

        private _callbackMap: { [k: string]: CallbackInfo[] };

        private constructor() {
            this._callbackMap = {};
        }

        public addListener(notifyName: string | NotifyConst, callback: Function, thisObj: any): void {
            let n = String(notifyName);
            if (!this._callbackMap.hasOwnProperty(n)) {
                this._callbackMap[n] = [];
            }
            let list = this._callbackMap[n];
            for (let i = 0, len = list.length; i < len; i++) {
                let info = list[i];
                if (info && info.callback == callback && info.thisObj == thisObj) {
                    return;
                }
            }
            let cb = recyclable(CallbackInfo);
            cb.callback = callback;
            cb.thisObj = thisObj;
            list[list.length] = cb;
        }

        public removeListener(notifyName: string | NotifyConst, callback: Function, thisObj?: any): void {
            let n = String(notifyName);
            if (this._callbackMap.hasOwnProperty(n)) {
                let list = this._callbackMap[n];
                for (let i = 0, len = list.length; i < len; i++) {
                    let info = list[i];
                    if (info && info.callback == callback && info.thisObj == thisObj) {
                        (<Recyclable<CallbackInfo>>info).recycle();
                        list[i] = undefined;
                        break;
                    }
                }
            }
        }

        public dispatch(notifyName: string | NotifyConst, ...args): void {
            let n = String(notifyName);
            if (this._callbackMap.hasOwnProperty(n)) {
                let list = this._callbackMap[n];
                let length = list.length;
                if (length == 0) {
                    return;
                }
                let currentIndex = 0;
                for (var i = 0; i < length; i++) {
                    let info = list[i];
                    if (info) {
                        if (currentIndex != i) {
                            list[currentIndex] = info;
                            list[i] = undefined;
                        }
                        info.callback.apply(info.thisObj, [n].concat(args));
                        currentIndex++;
                    }
                }
                if (currentIndex != i) {
                    length = list.length;
                    while (i < length) {
                        list[currentIndex++] = list[i++];
                    }
                    list.length = currentIndex;
                }
            }
        }
    }

    class CallbackInfo implements ICacheable {
        public callback: Function;

        public thisObj: any;

        public onRecycle(): void {
            this.callback = undefined;
            this.thisObj = undefined;
        }
    }
}
