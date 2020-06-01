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
    /**
     * 默认的排序规则
     */
    readonly NORMAL: number;

    /**
     * 排序时字符串不区分大小写
     */
    readonly CASEINSENSITIVE: number;

    /**
     * 降序
     */
    readonly DESCENDING: number;

    /**
     * 返回包含已经排序完毕的索引数组
     */
    readonly RETURNINDEXEDARRAY: number;

    /**
     * 按数字而非字符串排序
     */
    readonly NUMERIC: number;
}

interface Array<T> {
    /**
     * 添加唯一数据
     */
    pushUnique(...args: T[]): number;

    /**
     * 按数组元素的字段进行排序, 支持多字段
     */
    sortOn(fieldNames: string | string[], options?: number | number[]): void | this;

    /**
     * 移除指定元素
     */
    remove(item: T): boolean;
    /**
     * 随机打乱数组
     */
    upset(): void | this;

}

interface Date {
    /**
     * 格式化当前日期
     * 月(M), 日(d), 小时(h), 分(m), 秒(s), 季度(q)可以用 1-2 个占位符, 年(y)可以用 1-4 个占位符, 毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
     */
    format(template: string): string;
}

declare module egret {
    module Event {
        /**
         * 添加到舞台事件
         */
        const ADDED_TO_STAGE_IMMEDIATELY: string;

        /**
         * 关闭中
         */
        const CLOSING: string;

        /**
         * 显示
         */
        const SHOWED: string;

        /**
         * 隐藏
         */
        const HIDDEN: string;
    }

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
         * 避免抛出 ADDED 事件之后又抛出 ADDED_TO_STAGE 事件, 导致同一个 View 创建两个 Mediator 的问题
         */
        __added: boolean;

        /**
         * 当前对象是否接受其它对象拖入
         */
        dropEnabled: boolean;

        /**
         * 当前对象是否不可见
         */
        invisible: boolean;

        /**
         * 当前对象的可点击区域
         */
        hitArea: egret.Rectangle;

        /**
         * 抛出添加事件
         */
        __dispatchAddedEvent(event?: egret.Event): boolean;

        /**
         * 从舞台移除的事件
         */
        __removeFromStage(event?: egret.Event): boolean;

        /**
         * 当前对象在舞台上是否可见
         */
        stageVisible(checkAlpha?: boolean): boolean;

        /**
         * 移除自身
         */
        removeSelf(): void;

        /**
         * 监听 egret.TouchEvent.TOUCH_TAP 的简写方法
         */
        tap(listener: Function, thisObject: any, useCapture?: boolean, priority?: number): void;

        /**
         * 取消监听 egret.TouchEvent.TOUCH_TAP 的简写方法
         */
        untap(listener: Function, thisObject: any, useCapture?: boolean): void;
    }

    interface DisplayObjectContainer {
        /**
         * 遍历所有子对象
         */
        forChild(callback: (child: egret.DisplayObject, distance: number) => void, thisObj?: any, containSub?: boolean, ignoreContainer?: (container: egret.DisplayObjectContainer) => boolean): void;
    }

    interface TextField {
        /**
         * 点击超链接时是否阻止 Tap 事件
         */
        linkPreventTap: boolean;
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

    /**
     * 添加一次延迟调用
     */
    function callLaterUnique(method: Function, thisObject: any, ...args: any[]): void;
}

declare module RES {
    /**
     * @deprecated 作废: 得到的结果远低于实际值
     * 查看整体内存占用情况
     */
    // function getGPUMemory(): number;

    /**
     * 指定资源是否已经加载好
     */
    function isLoaded(key: string): boolean;
}

declare module eui {
    interface LayoutBase {
        /**
         * 忽略后续内部布局导致的改变每个渲染项的默认尺寸
         */
        ignoreSetTypicalSize: boolean;
    }
}

(function () {
    let f, p;

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
        },
        upset: {
            value: function () {
                let i = this.length;
                while (i) {
                    let j = Math.floor(Math.random() * i--);
                    [this[i], this[j]] = [this[j], this[i]];
                }
                return true;
            },
            enumerable: false
        }
    });

    p = Date.prototype;
    Object.defineProperties(p, {
        format: {
            value: function (template: string) {
                let map = {
                    "M+": this.getMonth() + 1,
                    "d+": this.getDate(),
                    "h+": this.getHours(),
                    "m+": this.getMinutes(),
                    "s+": this.getSeconds(),
                    "q+": Math.floor((this.getMonth() + 3) / 3),
                    "S": this.getMilliseconds()
                };
                if (/(y+)/.test(template)) {
                    template = template.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
                }
                for (var k in map) {
                    if (new RegExp("(" + k + ")").test(template)) {
                        template = template.replace(RegExp.$1, (RegExp.$1.length == 1) ? (map[k]) : (("00" + map[k]).substr(("" + map[k]).length)));
                    }
                }
                return template;
            },
            enumerable: false
        },
    });

    f = egret.Event;
    f.ADDED_TO_STAGE_IMMEDIATELY = "addedToStageImmediately";
    f.CLOSING = "closing";
    f.SHOWED = "showed";
    f.HIDDEN = "hidden";

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
    let t1 = p.$onAddToStage;
    Object.defineProperties(p, {
        visible: {
            set: function (value) {
                this.$_visible = !value;
                this.$setVisible(!this.$_visible && !this.$_invisible);
            },
            get: function () {
                return this.$_visible === undefined ? true : !this.$_visible;
            },
            configurable: true,
            enumerable: true
        },
        invisible: {
            set: function (value) {
                this.$_invisible = !!value;
                this.$setVisible(!this.$_visible && !this.$_invisible);
            },
            get: function () {
                return this.$_invisible === undefined ? false : this.$_invisible;
            },
            configurable: true,
            enumerable: true
        },
        $setVisible: {
            value: function (value: boolean): void {
                let self = this;
                if (self.$visible == value) {
                    return;
                }
                self.$visible = value;
                if (egret.nativeRender) {
                    self.$nativeDisplayObject.setVisible(value);
                }
                else {
                    self.$updateRenderMode();
                    let p = self.$parent;
                    if (p && !p.$cacheDirty) {
                        p.$cacheDirty = true;
                        p.$cacheDirtyUp();
                    }
                    let maskedObject = self.$maskedObject;
                    if (maskedObject && !maskedObject.$cacheDirty) {
                        maskedObject.$cacheDirty = true;
                        maskedObject.$cacheDirtyUp();
                    }
                }
                self.dispatch(value ? egret.Event.SHOWED : egret.Event.HIDDEN);
            },
            enumerable: false
        },
        __dispatchAddedEvent: {
            value: function (event?: egret.Event): void {
                if (!this.__added) {
                    this.__added = true;
                    this.dispatchEventWith(egret.Event.ADDED, true);
                }
            },
            enumerable: false
        },
        __removeFromStage: {
            value: function (event?: egret.Event): void {
                this.__added = false;
            },
            enumerable: false
        },
        $onAddToStage: {
            value: function (stage: egret.Stage, nestLevel: number): void {
                t1.call(this, stage, nestLevel);
                this.dispatchEventWith(egret.Event.ADDED_TO_STAGE_IMMEDIATELY);
            },
            enumerable: false
        },
        stageVisible: {
            value: function (checkAlpha?: boolean): boolean {
                if (!this.stage) {
                    return false;
                }
                let target = this;
                while (true) {
                    if (!target.visible || target.invisible || (checkAlpha && target.alpha <= 0)) {
                        return false;
                    }
                    if (target.parent == game.$stage) {
                        return true;
                    }
                    if (!target.parent) {
                        return false;
                    }
                    target = target.parent;
                }
            },
            enumerable: true
        },
        removeSelf: {
            value: function (): void {
                if (this.parent) {
                    this.parent.removeChild(this);
                }
            },
            enumerable: false
        },
        $hitTest: {
            value: function (stageX: number, stageY: number): egret.DisplayObject {
                let self = this;
                if ((!egret.nativeRender && !self.$renderNode) || !self.$visible || self.$scaleX == 0 || self.$scaleY == 0) {
                    if (!self.hitArea) {
                        return null;
                    }
                }
                let m = self.$getInvertedConcatenatedMatrix();
                if (m.a == 0 && m.b == 0 && m.c == 0 && m.d == 0) {//防止父类影响子类
                    if (!self.hitArea) {
                        return null;
                    }
                }
                let bounds = self.$getContentBounds();
                let localX = m.a * stageX + m.c * stageY + m.tx;
                let localY = m.b * stageX + m.d * stageY + m.ty;
                if (self.hitArea) {
                    if (self.hitArea.contains(localX, localY)) {
                        return self;
                    }
                    return null;
                }
                if (bounds.contains(localX, localY)) {
                    if (!self.$children) {//容器已经检查过scrollRect和mask，避免重复对遮罩进行碰撞。
                        let rect = self.$scrollRect ? self.$scrollRect : self.$maskRect;
                        if (rect && !rect.contains(localX, localY)) {
                            return null;
                        }
                        if (self.$mask && !self.$mask.$hitTest(stageX, stageY)) {
                            return null;
                        }
                    }
                    return self;
                }
                return null;
            },
            enumerable: false
        },
        tap: {
            value: function (listener: Function, thisObject: any, useCapture?: boolean, priority?: number): void {
                this.on(egret.TouchEvent.TOUCH_TAP, listener, thisObject, useCapture, priority);
            },
            enumerable: false
        },
        untap: {
            value: function (listener: Function, thisObject: any, useCapture?: boolean): void {
                this.off(egret.TouchEvent.TOUCH_TAP, listener, thisObject, useCapture);
            },
            enumerable: false
        }
    });

    p = egret.DisplayObjectContainer.prototype;
    let t2 = p.$doAddChild;
    Object.defineProperties(p, {
        forChild: {
            value: function (callback: (child: egret.DisplayObject, distance: number) => void, thisObj?: any, containSub?: boolean, ignoreContainer?: (container: egret.DisplayObjectContainer) => boolean): void {
                this.$forChild(this, 0, callback, thisObj, containSub, ignoreContainer);
            },
            enumerable: false
        },
        $forChild: {
            value: function (target: egret.DisplayObjectContainer, distance: number, callback: (child: egret.DisplayObject, distance: number) => void, thisObj: any, containSub: boolean, ignoreContainer: (container: egret.DisplayObjectContainer) => boolean): void {
                distance += 1;
                for (let i = 0, len = target.numChildren; i < len; i++) {
                    let child = target.getChildAt(i);
                    callback.call(thisObj, child, distance);
                    if (containSub && child instanceof egret.DisplayObjectContainer && (!ignoreContainer || !ignoreContainer(child))) {
                        this.$forChild(child, distance, callback, thisObj, containSub);
                    }
                }
            },
            enumerable: false
        },
        $doAddChild: {
            value: function (child: egret.DisplayObject, index: number, notifyListeners: boolean = true): egret.DisplayObject {
                // 下面的代码用于带有中介类的 View 添加到还没有添加到舞台的父容器时的额外处理, 该 View 已经不会发送 ADDED 事件
                // 除上面的情况外, 直接添加到舞台或已存在舞台的父容器时普通显示对象和 EUI 组件逻辑均正常
                let p = Object.getPrototypeOf(child);
                let hasMediator = p.constructor.__isMediatorView;
                let hasStage = !!this.stage;
                if (hasMediator && !hasStage) {
                    // EUI 特殊处理下, 保证第一次打开时 createChildren 和 childrenCreated 方法都执行完毕后再执行 onRegister 方法
                    if (child instanceof eui.Component && !child.$UIComponent[eui.sys.UIKeys.initialized]) {
                        child.once(eui.UIEvent.CREATION_COMPLETE, (event: eui.UIEvent) => {
                            child.on(egret.Event.ADDED_TO_STAGE, child.__dispatchAddedEvent, child);
                            child.on(egret.Event.REMOVED_FROM_STAGE, child.__removeFromStage, child);
                            child.__dispatchAddedEvent();
                        }, this);
                    }
                    // 非 EUI 直接监听添加到舞台的事件即可
                    else {
                        child.on(egret.Event.ADDED_TO_STAGE, child.__dispatchAddedEvent, child);
                        child.on(egret.Event.REMOVED_FROM_STAGE, child.__removeFromStage, child);
                    }
                }
                let result = t2.call(this, child, index, notifyListeners);
                // 对于添加时已经存在舞台上的 View, 避开第一次的 ADDED_TO_STAGE 事件, 但是需要后面的 ADDED_TO_STAGE 事件
                if (hasMediator && hasStage) {
                    child.on(egret.Event.ADDED_TO_STAGE, child.__dispatchAddedEvent, child);
                    child.on(egret.Event.REMOVED_FROM_STAGE, child.__removeFromStage, child);
                }
                return result;
            },
            enumerable: false
        },
        $hitTest: {
            value: function (stageX: number, stageY: number): egret.DisplayObject {
                if (!this.$visible) {
                    return null;
                }
                let m = this.$getInvertedConcatenatedMatrix();
                let localX = m.a * stageX + m.c * stageY + m.tx;
                let localY = m.b * stageX + m.d * stageY + m.ty;
                if (this.hitArea) {
                    if (this.hitArea.contains(localX, localY)) {
                        return this;
                    }
                    return null;
                }
                let rect = this.$scrollRect ? this.$scrollRect : this.$maskRect;
                if (rect && !rect.contains(localX, localY)) {
                    return null;
                }
                if (this.$mask && !this.$mask.$hitTest(stageX, stageY)) {
                    return null;
                }
                const children = this.$children;
                let found = false;
                let target: egret.DisplayObject = null;
                for (let i = children.length - 1; i >= 0; i--) {
                    const child = children[i];
                    if (child.$maskedObject) {
                        continue;
                    }
                    target = child.$hitTest(stageX, stageY);
                    if (target) {
                        found = true;
                        if (target.$touchEnabled) {
                            break;
                        }
                        else {
                            target = null;
                        }
                    }
                }
                if (target) {
                    if (this.$touchChildren) {
                        return target;
                    }
                    return this;
                }
                if (found) {
                    return this;
                }
                // return super.$hitTest(stageX, stageY);
                return egret.DisplayObject.prototype.$hitTest.call(this, stageX, stageY);
            },
            enumerable: false
        }
    });

    p = egret.TextField.prototype;
    Object.defineProperties(p, {
        onTapHandler: {
            value: function (e: egret.TouchEvent): void {
                if (this.$TextField[egret.sys.TextKeys.type] == egret.TextFieldType.INPUT) {
                    return;
                }
                let ele: egret.ITextElement = egret.TextFieldUtils.$getTextElement(this, e.localX, e.localY);
                if (ele == null) {
                    return;
                }
                let style: egret.ITextStyle = ele.style;

                if (style && style.href) {
                    if (style.href.match(/^event:/)) {
                        let type: string = style.href.match(/^event:/)[0];
                        let event: egret.TextEvent = egret.Event.create(egret.TextEvent, egret.TextEvent.LINK);
                        event.text = style.href.substring(type.length);
                        event.data = { stageX: e.stageX, stageY: e.stageY, localX: e.localX, localY: e.localY };
                        let result = this.dispatchEvent(event);
                        egret.Event.release(event);
                    }
                    else {
                        open(style.href, style.target || "_blank");
                    }
                    if (this.linkPreventTap) {
                        e.stopPropagation();
                    }
                }
            },
            enumerable: false
        },
        drawText: {
            value: function (): number[] {
                let node = this.textNode;
                let values = this.$TextField;
                //更新文本样式
                node.bold = values[egret.sys.TextKeys.bold];
                node.fontFamily = values[egret.sys.TextKeys.fontFamily] || egret.TextField.default_fontFamily;
                node.italic = values[egret.sys.TextKeys.italic];
                node.size = values[egret.sys.TextKeys.fontSize];
                node.stroke = values[egret.sys.TextKeys.stroke];
                node.strokeColor = values[egret.sys.TextKeys.strokeColor];
                node.textColor = values[egret.sys.TextKeys.textColor];
                //先算出需要的数值
                let lines: Array<egret.ILineElement> = this.$getLinesArr();
                if (values[egret.sys.TextKeys.textWidth] == 0) {
                    return [];
                }
                let maxWidth: number = !isNaN(values[egret.sys.TextKeys.textFieldWidth]) ? values[egret.sys.TextKeys.textFieldWidth] : values[egret.sys.TextKeys.textWidth];
                let textHeight: number = egret.TextFieldUtils.$getTextHeight(this);
                let drawY: number = 0;
                let startLine: number = egret.TextFieldUtils.$getStartLine(this);
                let textFieldHeight: number = values[egret.sys.TextKeys.textFieldHeight];
                if (!isNaN(textFieldHeight) && textFieldHeight > textHeight) {
                    let vAlign: number = egret.TextFieldUtils.$getValign(this);
                    drawY += vAlign * (textFieldHeight - textHeight);
                }
                drawY = Math.round(drawY);
                let hAlign: number = egret.TextFieldUtils.$getHalign(this);
                let drawX: number = 0;
                let underLineData: number[] = [];
                for (let i: number = startLine, numLinesLength: number = values[egret.sys.TextKeys.numLines]; i < numLinesLength; i++) {
                    let line: egret.ILineElement = lines[i];
                    let h: number = line.height;
                    drawY += h / 2;
                    if (i != startLine) {
                        if (values[egret.sys.TextKeys.type] == egret.TextFieldType.INPUT && !values[egret.sys.TextKeys.multiline]) {
                            break;
                        }
                        if (!isNaN(textFieldHeight) && drawY > textFieldHeight) {
                            break;
                        }
                    }
                    drawX = Math.round((maxWidth - line.width) * hAlign);
                    for (let j: number = 0, elementsLength: number = line.elements.length; j < elementsLength; j++) {
                        let element: egret.IWTextElement = line.elements[j];
                        let size: number = element.style.size || values[egret.sys.TextKeys.fontSize];
                        let verticalAlign = values[egret.sys.TextKeys.verticalAlign];
                        if (verticalAlign == egret.VerticalAlign.TOP) {
                            node.drawText(drawX, drawY - (h - size) / 2, element.text, element.style);
                        } else if (verticalAlign == egret.VerticalAlign.MIDDLE) {
                            node.drawText(drawX, drawY, element.text, element.style);
                        } else {
                            node.drawText(drawX, drawY + (h - size) / 2, element.text, element.style);
                        }
                        if (element.style.underline) {
                            underLineData.push(
                                drawX,
                                drawY + (h) / 2,
                                element.width,
                                element.style.textColor
                            );
                        }
                        drawX += element.width;
                    }
                    drawY += h / 2 + values[egret.sys.TextKeys.lineSpacing];
                }
                return underLineData;
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

    Object.defineProperties(egret, {
        callLaterUnique: {
            value: function (method: Function, thisObject: any, ...args: any[]) {
                for (let i = 0, len = egret.$callLaterFunctionList.length; i < len; i++) {
                    if (egret.$callLaterFunctionList[i] === method && egret.$callLaterThisList[i] === thisObject) {
                        return;
                    }
                }
                egret.$callLaterFunctionList.push(method);
                egret.$callLaterThisList.push(thisObject);
                egret.$callLaterArgsList.push(args);
            },
            enumerable: false
        }
    });

    Object.defineProperties(RES, {
        // getGPUMemory: {
        //     value: function () {
        //         let totalImageSize = 0;
        //         let map = (<any>RES).config.config.fileSystem.fsData;
        //         for (let key in map) {
        //             let item = map[key];
        //             let url = item.url;
        //             let res = (<any>RES).config.getResource(url);
        //             if (res) {
        //                 let data = (<any>RES).host.get(res);
        //                 if (data && data instanceof egret.Texture) {
        //                     totalImageSize += data.$bitmapWidth * data.$bitmapHeight * 4;
        //                 }
        //             }
        //         }
        //         return totalImageSize;
        //     },
        //     enumerable: false
        // },
        isLoaded: {
            value: function (key: string) {
                let res = (<any>RES).config.getResource(key);
                if (!res) {
                    return false;
                }
                let data = (<any>RES).host.get(res);
                return !!data;
            },
            enumerable: false
        }
    });

    p = eui.LayoutBase.prototype;
    Object.defineProperties(p, {
        ignoreSetTypicalSize: {
            set: function (value) {
                this.$ignoreSetTypicalSize = value;
            },
            get: function () {
                return !!this.$ignoreSetTypicalSize;
            },
            configurable: true,
            enumerable: true
        },
        setTypicalSize: {
            value: function (width: number, height: number) {
                if (this.ignoreSetTypicalSize) {
                    return;
                }
                width = +width || 71;
                height = +height || 22;
                if (width !== this.$typicalWidth || height !== this.$typicalHeight) {
                    this.$typicalWidth = width;
                    this.$typicalHeight = height;
                    if (this.$target) {
                        this.$target.invalidateSize();
                    }
                }
            },
            enumerable: false
        }
    });
})();
