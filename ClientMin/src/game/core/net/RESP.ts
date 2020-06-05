namespace game {
    /**
     * 带有优先级的资源管理类
     * @author cary
     */
    export namespace RESP {
        export function setMaxLoadingThread(thread: number): void {
            instance.setMaxLoadingThread(thread);
        }

        export function getRes(key: string): any {
            return RES.getRes(key);
        }

        export function getResAsync(key: string, compFunc: Function, thisObject: any, priority: number = 0): void {
            instance.getResAsync(key, compFunc, thisObject, priority);
        }

        export function getResAsyncAsync(key: string, priority: number = 0): Promise<any> {
            return instance.getResAsyncAsync(key, priority);
        }

        export function getResByUrl(url: string, compFunc: Function, thisObject: any, type?: string, priority: number = 0): void {
            instance.getResByUrl(url, compFunc, thisObject, type, priority);
        }

        export function getResByUrlAsync(url: string, type?: string, priority: number = 0): Promise<any> {
            return instance.getResByUrlAsync(url, type, priority);
        }

        interface ResourceItem {
            inConfig: boolean;
            key?: string;
            url?: string;
            compFunc: Function;
            thisObject: any;
            type?: string;
        }

        class Resource {
            private _maxLoadingThread: number = 2;
            private _nowLoadingThread: number = 0;

            private _priorityList: number[];
            private _priorityMap: { [priority: number]: ResourceItem[] };

            public constructor() {
                this._priorityList = [];
                this._priorityMap = {};
            }

            public setMaxLoadingThread(thread: number): void {
                this._maxLoadingThread = Math.max(thread, 1);
            }

            public getResAsync(key: string, compFunc: Function, thisObject: any, priority: number = 0): void {
                if (!this._priorityMap[priority]) {
                    this._priorityList.push(priority);
                    this._priorityList.sort(this.sortFunc);
                    this._priorityMap[priority] = [];
                }
                let list = this._priorityMap[priority];
                list.push({ inConfig: true, key, compFunc, thisObject });
                this.loadNext();
            }

            public getResAsyncAsync(key: string, priority: number = 0): Promise<any> {
                return new Promise((resolve: (value?: any) => void, reject: (reason?: any) => void) => {
                    RESP.getResAsync(key, (data, url) => {
                        resolve(data);
                    }, this, priority);
                });
            }

            public getResByUrl(url: string, compFunc: Function, thisObject: any, type?: string, priority: number = 0): void {
                if (!this._priorityMap[priority]) {
                    this._priorityList.push(priority);
                    this._priorityList.sort(this.sortFunc);
                    this._priorityMap[priority] = [];
                }
                let list = this._priorityMap[priority];
                list.push({ inConfig: false, url, compFunc, thisObject, type });
                this.loadNext();
            }

            public getResByUrlAsync(url: string, type?: string, priority: number = 0): Promise<any> {
                return new Promise((resolve: (value?: any) => void, reject: (reason?: any) => void) => {
                    RESP.getResByUrl(url, (data, url) => {
                        resolve(data);
                    }, this, type, priority);
                });
            }

            private sortFunc(a: number, b: number): number {
                return b - a;
            }

            private loadNext(): void {
                if (this._nowLoadingThread >= this._maxLoadingThread) {
                    return;
                }
                let item: ResourceItem;
                for (let priority of this._priorityList) {
                    let list = this._priorityMap[priority];
                    if (list.length > 0) {
                        item = list.shift();
                        break;
                    }
                }
                if (item) {
                    if (item.inConfig) {
                        this._nowLoadingThread++;
                        RES.getResAsync(item.key, (data: any, url: string) => {
                            this._nowLoadingThread--;
                            if (item.compFunc) {
                                item.compFunc.call(item.thisObject, data, url);
                            }
                            this.loadNext();
                        }, this);
                    } else {
                        this._nowLoadingThread++;
                        RES.getResByUrl(item.url, (data: any, url: string) => {
                            this._nowLoadingThread--;
                            if (item.compFunc) {
                                item.compFunc.call(item.thisObject, data, url);
                            }
                            this.loadNext();
                        }, this, item.type);
                    }
                }
            }
        }

        let instance = new Resource();
    }
}
