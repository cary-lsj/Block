//
// 功能扩展
// @author wizardc
//

interface Object {
    /**
     * 获取属性描述
     */
    getPropertyDescriptor(property: string): PropertyDescriptor;

    /**
     * 浅拷贝当前对象
     * 注意: 仅浅拷贝属性, 继承原型链和方法等均会丢失
     */
    shallowClone(): Object;

    /**
     * 浅拷贝所有属性
     * 注意: 仅浅拷贝属性, 继承原型链和方法等均会丢失
     */
    shallowCloneTo(target: Object): void;

    /**
     * 深拷贝当前对象
     * 注意: 仅深拷贝属性, 继承原型链和方法等均会丢失
     */
    deepClone(): Object;

    /**
     * 深拷贝所有属性
     * 注意: 仅深拷贝属性, 继承原型链和方法等均会丢失
     */
    deepCloneTo(target: Object): void;

    /**
     * 清除所有属性
     */
    clearAllProperty(): void;
}

interface Number {
    /**
     * 格式化为用于显示的字符串
     */
    toFormat(): string;
}

interface String {
    /**
     * 根据分割符拆分字符串为数组且元素转换为数字
     */
    splitNum(separator: string, limit?: number): number[];
    splitNum(separator: RegExp, limit?: number): number[];
}

interface ArrayConstructor {
    readonly NORMAL : number;
    readonly CASEINSENSITIVE : number;
    readonly DESCENDING : number;
    readonly RETURNINDEXEDARRAY : number;
    readonly NUMERIC : number;
}

interface Array<T> {
    /**
     * 添加唯一数据
     */
    pushUnique(...args: T[]): number;

    /**
     * 按数组元素的字段进行排序, 支持多字段
     */
    sortOn(fieldNames: string | string[], options?: number | number[]) : void | this;

    /**
     * 移除指定元素
     */
    remove(item: T): boolean;
}

declare module egret {
    interface IEventDispatcher {
        /**
         * 简写, 等同于 addEventListener
         */
        on(type: string, listener: Function, thisObject: any, useCapture?: boolean, priority?: number): void;

        /**
         * 简写, 等同于 dispatchEventWith
         */
        dispatch(type: string | number, bubbles?: boolean, data?: any, cancelable?: boolean): boolean;

        /**
         * 简写, 等同于 removeEventListener
         */
        off(type: string, listener: Function, thisObject: any, useCapture?: boolean): void;
    }

    interface EventDispatcher {
        /**
         * 简写, 等同于 addEventListener
         */
        on(type: string, listener: Function, thisObject: any, useCapture?: boolean, priority?: number): void;

        /**
         * 简写, 等同于 dispatchEventWith
         */
        dispatch(type: string | number, bubbles?: boolean, data?: any, cancelable?: boolean): boolean;

        /**
         * 简写, 等同于 removeEventListener
         */
        off(type: string, listener: Function, thisObject: any, useCapture?: boolean): void;
    }

    module DisplayObject {
        /**
         * 标记是附带了中介类的视图
         */
        var __isMediatorView: boolean;
    }

    interface DisplayObject {
        /**
         * 抛出添加事件
         */
        __dispatchAddedEvent(event?: egret.Event): boolean;

        /**
         * 移除自身
         */
        removeSelf(): void;
    }

    module Tween {
        /**
         * 获取用于战斗的 Tween 对象
         */
        function getInFight(target: any, props?: {
                                        loop?: boolean;
                                        onChange?: Function;
                                        onChangeObj?: any;
                                    }, pluginData?: any, override?: boolean): Tween;
    }

    interface Tween {
        /**
         * 使用战斗速率
         */
        useFightRate: boolean;
    }
}

declare module RES {
    /**
     * 判断指定的资源是否已经加载成功
     */
    function isResLoaded(key: string): boolean;
}

(function() {
    let f, p, t;

    p = Object.prototype;
    Object.defineProperties(p, {
        getPropertyDescriptor: {
            value: function (property: string) {
                let pd = Object.getOwnPropertyDescriptor(this, property);
                if (pd) {
                    return pd;
                }
                let prototype = Object.getPrototypeOf(this);
                if (prototype) {
                    return prototype.getPropertyDescriptor(property);
                }
                return undefined;
            },
            enumerable: false
        },
        shallowClone: {
            value: function () {
                let result = {};
                this.shallowCloneTo(result);
                return result;
            },
            enumerable: false
        },
        shallowCloneTo: {
            value: function (target: Object) {
                for (let key in this) {
                    if (key in target) {
                        let pd: PropertyDescriptor = target.getPropertyDescriptor(key);
                        if (pd && (pd.set || pd.writable)) {
                            target[key] = this[key];
                        }
                    } else {
                        target[key] = this[key];
                    }
                }
            },
            enumerable: false
        },
        deepClone: {
            value: function () {
                let jsonStr = JSON.stringify(this);
                return JSON.parse(jsonStr);
            },
            enumerable: false
        },
        deepCloneTo: {
            value: function (target: Object) {
                let obj = this.deepClone();
                for (let key in obj) {
                    if (key in target) {
                        let pd: PropertyDescriptor = target.getPropertyDescriptor(key);
                        if (pd && (pd.set || pd.writable)) {
                            target[key] = obj[key];
                        }
                    } else {
                        target[key] = obj[key];
                    }
                }
            },
            enumerable: false
        },
        clearAllProperty: {
            value: function () {
                for (let key in this) {
                    delete this[key];
                }
            },
            enumerable: false
        }
    });

    p = Number.prototype;
    Object.defineProperties(p, {
        toFormat: {
            value: function () {
                let num = this.valueOf();
                if (num >= 10E7) {
                    // return game.$substitute(game.$lang(game.Lang.common_yi), ~~(num / 10E7));
                }
                if (num >= 10E3) {
                    // return game.$substitute(game.$lang(game.Lang.common_wan), ~~(num / 10E3));
                }
                return num.toString();
            },
            enumerable: false
        },
    });

    p = String.prototype;
    Object.defineProperties(p, {
        splitNum: {
            value: function (separator: string | RegExp, limit?: number) {
                let arr = this.split(separator, limit);
                for (let i = 0, len = arr.length; i < len; i++) {
                    arr[i] = parseFloat(arr[i]);
                }
                return arr;
            },
            enumerable: false
        },
    });

    f = Array;
    f.NORMAL = 0;
    f.CASEINSENSITIVE = 1;
    f.DESCENDING = 2;
    f.RETURNINDEXEDARRAY = 4;
    f.NUMERIC = 8;

    p = Array.prototype;
    Object.defineProperties(p, {
        pushUnique: {
            value: function (...args: any[]) {
                for (let v of args) {
                    if (this.indexOf(v) == -1) {
                        this[this.length] = v;
                    }
                }
                return this.length;
            },
            enumerable: false
        },
        sortOn: {
            value: function (fieldNames: string | string[], options: number | number[]) {
                let array = this;
                if (!Array.isArray(fieldNames)) {
                    fieldNames = [fieldNames];
                }
                if (!Array.isArray(options)) {
                    options = [options];
                }
                if (fieldNames.length !== options.length) {
                    options = new Array(fieldNames.length).fill(0);
                }
                let returnIndexedArray = options[0] & Array.RETURNINDEXEDARRAY;
                if (returnIndexedArray) {
                    array = Array.from(array);
                }
                let functions = fieldNames.map(function (fieldName, index) {
                    return createComparisonFn(fieldName, options[index]);
                });
                let sorted = array.sort(function (a, b) {
                    return functions.reduce(function (result, fn) {
                        return result || fn(a, b);
                    }, 0);
                });
                return returnIndexedArray ? sorted : undefined;
                function createComparisonFn(fieldName, options) {
                    options = options || 0;
                    let transformations: any = [];
                    if (fieldName) {
                        transformations.push(
                            function () {
                                return this[fieldName];
                            }
                        );
                    }
                    transformations.push(
                        (options & Array.NUMERIC)
                            ? function () {
                                return parseFloat(this);
                            }
                            : function () {
                                return (typeof this === 'string' && this)
                                    || (typeof this === 'number' && '' + this)
                                    || (this && this.toString())
                                    || this;
                            }
                    );
                    if (options & Array.CASEINSENSITIVE) {
                        transformations.push(String.prototype.toLowerCase);
                    }
                    transformations.apply = Array.prototype.reduce.bind(
                        transformations,
                        function (value, transformation) {
                            return transformation.apply(value);
                        }
                    );
                    let AGreaterThanB = (options & Array.DESCENDING) ? -1 : 1;
                    let ALessThanB = -AGreaterThanB;
                    return function (a, b) {
                        a = transformations.apply(a);
                        b = transformations.apply(b);
                        if (a > b || (a != null && b == null)) {
                            return AGreaterThanB;
                        }
                        if (a < b || (a == null && b != null)) {
                            return ALessThanB;
                        }
                        return 0;
                    }
                }
            },
            enumerable: false
        },
        remove: {
            value: function (item: any) {
                let index = this.indexOf(item);
                if (index > -1) {
                    this.splice(index, 1);
                    return true;
                }
                return false;
            },
            enumerable: false
        }
    });

    p = egret.EventDispatcher.prototype;
    p.on = p.addEventListener;
    p.dispatch = p.dispatchEventWith;
    p.off = p.removeEventListener;

    p = egret.ByteArray.prototype;
    Object.defineProperties(p, {
        decodeUTF8: {
            value: function (data: Uint8Array): string {
                let fatal: boolean = false;
                let pos: number = 0;
                let result: string[] = [];
                let code_point: number;
                let utf8_code_point = 0;
                let utf8_bytes_needed = 0;
                let utf8_bytes_seen = 0;
                let utf8_lower_boundary = 0;

                while (data.length > pos) {

                    let _byte = data[pos++];

                    if (_byte == this.EOF_byte) {
                        if (utf8_bytes_needed != 0) {
                            code_point = this.decoderError(fatal);
                        } else {
                            code_point = this.EOF_code_point;
                        }
                    } else {

                        if (utf8_bytes_needed == 0) {
                            if (this.inRange(_byte, 0x00, 0x7F)) {
                                code_point = _byte;
                            } else {
                                if (this.inRange(_byte, 0xC2, 0xDF)) {
                                    utf8_bytes_needed = 1;
                                    utf8_lower_boundary = 0x80;
                                    utf8_code_point = _byte - 0xC0;
                                } else if (this.inRange(_byte, 0xE0, 0xEF)) {
                                    utf8_bytes_needed = 2;
                                    utf8_lower_boundary = 0x800;
                                    utf8_code_point = _byte - 0xE0;
                                } else if (this.inRange(_byte, 0xF0, 0xF4)) {
                                    utf8_bytes_needed = 3;
                                    utf8_lower_boundary = 0x10000;
                                    utf8_code_point = _byte - 0xF0;
                                } else {
                                    this.decoderError(fatal);
                                }
                                utf8_code_point = utf8_code_point * Math.pow(64, utf8_bytes_needed);
                                code_point = null;
                            }
                        } else if (!this.inRange(_byte, 0x80, 0xBF)) {
                            utf8_code_point = 0;
                            utf8_bytes_needed = 0;
                            utf8_bytes_seen = 0;
                            utf8_lower_boundary = 0;
                            pos--;
                            code_point = this.decoderError(fatal, _byte);
                        } else {

                            utf8_bytes_seen += 1;
                            utf8_code_point = utf8_code_point + (_byte - 0x80) * Math.pow(64, utf8_bytes_needed - utf8_bytes_seen);

                            if (utf8_bytes_seen !== utf8_bytes_needed) {
                                code_point = null;
                            } else {

                                let cp = utf8_code_point;
                                let lower_boundary = utf8_lower_boundary;
                                utf8_code_point = 0;
                                utf8_bytes_needed = 0;
                                utf8_bytes_seen = 0;
                                utf8_lower_boundary = 0;
                                if (this.inRange(cp, lower_boundary, 0x10FFFF) && !this.inRange(cp, 0xD800, 0xDFFF)) {
                                    code_point = cp;
                                } else {
                                    code_point = this.decoderError(fatal, _byte);
                                }
                            }

                        }
                    }
                    //Decode string
                    if (code_point !== null && code_point !== this.EOF_code_point) {
                        if (code_point <= 0xFFFF) {
                            if (code_point > 0) result.push(String.fromCharCode(code_point));
                        } else {
                            code_point -= 0x10000;
                            result.push(String.fromCharCode(0xD800 + ((code_point >> 10) & 0x3ff)));
                            result.push(String.fromCharCode(0xDC00 + (code_point & 0x3ff)));
                        }
                    }
                }
                return result.join("");
            },
            enumerable: false
        }
    });

    p = egret.DisplayObject.prototype;
    Object.defineProperties(p, {
        __dispatchAddedEvent: {
            value: function (event?: egret.Event): boolean {
                return this.dispatchEventWith(egret.Event.ADDED, true);
            },
            enumerable: false
        },
        removeSelf: {
            value: function () {
                if (this.parent) {
                    this.parent.removeChild(this);
                }
            },
            enumerable: false
        }
    });

    p = egret.DisplayObjectContainer.prototype;
    t = p.$doAddChild;
    Object.defineProperties(p, {
        $doAddChild: {
            value: function (child: egret.DisplayObject, index: number, notifyListeners: boolean = true): egret.DisplayObject {
                // 下面的代码用于带有中介类的 View 添加到还没有添加到舞台的父容器时的额外处理, 该 View 已经不会发送 ADDED 事件
                // 除上面的情况外, 直接添加到舞台或已存在舞台的父容器时普通显示对象和 EUI 组件逻辑均正常
                let p = Object.getPrototypeOf(child);
                let hasMediator = p.constructor.__isMediatorView;
                if (hasMediator && !this.stage) {
                    // EUI 特殊处理下, 保证第一次打开时 createChildren 和 childrenCreated 方法都执行完毕后再执行 onRegister 方法
                    if (child instanceof eui.Component && !child.$UIComponent[eui.sys.UIKeys.initialized]) {
                        child.once(eui.UIEvent.CREATION_COMPLETE, (event: eui.UIEvent) => {
                            child.on(egret.Event.ADDED_TO_STAGE, child.__dispatchAddedEvent, child);
                            child.__dispatchAddedEvent();
                        }, this);
                    }
                    // 非 EUI 直接监听添加到舞台的事件即可
                    else {
                        child.on(egret.Event.ADDED_TO_STAGE, child.__dispatchAddedEvent, child);
                    }
                }
                return t.call(this, child, index, notifyListeners);
            },
            enumerable: false
        }
    });

    Object.defineProperties(egret.Tween, {
        getInFight: {
            value: function (target: any, props?: {
                                    loop?: boolean;
                                    onChange?: Function;
                                    onChangeObj?: any;
                                }, pluginData?: any, override?: boolean) {
                if (override) {
                    egret.Tween.removeTweens(target);
                }
                let tween = new egret.Tween(target, props, pluginData);
                tween.useFightRate = true;
                return tween;
            },
            enumerable: false
        }
    });

    p = egret.Tween.prototype;
    Object.defineProperties(p, {
        $tick: {
            value: function (delta: number) {
                if (this.paused) {
                    return;
                }
                let pos: number;
                if (this.useFightRate) {
                    pos = this._prevPosition + delta * game.$clock.fightClock.runningRate;
                } else {
                    pos = this._prevPosition + delta;
                }
                this.setPosition(pos);
            },
            enumerable: false
        }
    });

    Object.defineProperties(RES, {
        isResLoaded: {
            value: function (key: string) {
                let res = (<any> RES.config).getResource(key);
                if (res) {
                    return !!RES.host.get(res);
                }
                return false;
            },
            enumerable: false
        }
    });

    p = RES.Resource.prototype;
    Object.defineProperties(p, {
        getResAsync: {
            value: function (key: string, compFunc?: RES.GetResAsyncCallback, thisObject?: any) {
                var paramKey = key;
                // 抓取错误
                try {
                    var { r, subkey } = (<any> RES.config).getResourceWithSubkey(key, true);
                } catch(error) {
                    // 错误时回调
                    if (compFunc) {
                        compFunc.call(thisObject, undefined, paramKey);
                    }
                    (<any> RES.ResourceEvent).dispatchResourceEvent(this, RES.ResourceEvent.ITEM_LOAD_ERROR, "", r as RES.ResourceInfo);
                    return Promise.reject(error);
                }
                return RES.queue.loadResource(r).then(value => {
                    RES.host.save(r, value);
                    let p = RES.processor.isSupport(r);
                    if (p && p.getData && subkey) {
                        value = p.getData(RES.host, r, key, subkey);
                    }
                    if (compFunc) {
                        compFunc.call(thisObject, value, paramKey);
                    }
                    return value;
                }, error => {
                    RES.host.remove(r as RES.ResourceInfo);
                    // 错误时回调
                    if (compFunc) {
                        compFunc.call(thisObject, undefined, paramKey);
                    }
                    (<any> RES.ResourceEvent).dispatchResourceEvent(this, RES.ResourceEvent.ITEM_LOAD_ERROR, "", r as RES.ResourceInfo);
                    return Promise.reject(error);
                });
            },
            enumerable: false
        },
        getResByUrl: {
            value: function (url: string, compFunc: Function, thisObject: any, type: string = "") {
                let r = (<any> RES.config).getResource(url);
                if (!r) {
                    if (!type) {
                        type = (<any> RES.config).__temp__get__type__via__url(url);
                    }
                    // manager.config.addResourceData({ name: url, url: url });
                    r = { name: url, url, type, root: '', extra: 1 };
                    (<any> RES.config).addResourceData(r);
                    r = (<any> RES.config).getResource(url);
                    if (!r) {
                        throw 'never';
                    }
                }
                return RES.queue.loadResource(r).then(value => {
                    RES.host.save(r as RES.ResourceInfo, value);
                    if (compFunc && r) {
                        compFunc.call(thisObject, value, r.url);
                    }
                    return value;
                }, error => {
                    RES.host.remove(r as RES.ResourceInfo);
                    // 错误时回调
                    if (compFunc && r) {
                        compFunc.call(thisObject, undefined, r.url);
                    }
                    (<any> RES.ResourceEvent).dispatchResourceEvent(this, RES.ResourceEvent.ITEM_LOAD_ERROR, "", r as RES.ResourceInfo);
                    return Promise.reject(error);
                });
            },
            enumerable: false
        }
    });

})();
