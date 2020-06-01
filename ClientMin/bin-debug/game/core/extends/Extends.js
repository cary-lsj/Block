//
// 功能扩展
// @author wizardc
//
(function () {
    var f, p;
    p = Object.prototype;
    Object.defineProperties(p, {
        getPropertyDescriptor: {
            value: function (property) {
                var pd = Object.getOwnPropertyDescriptor(this, property);
                if (pd) {
                    return pd;
                }
                var prototype = Object.getPrototypeOf(this);
                if (prototype) {
                    return prototype.getPropertyDescriptor(property);
                }
                return undefined;
            },
            enumerable: false
        },
        shallowClone: {
            value: function () {
                var result = {};
                this.shallowCloneTo(result);
                return result;
            },
            enumerable: false
        },
        shallowCloneTo: {
            value: function (target) {
                for (var key in this) {
                    if (key in target) {
                        var pd = target.getPropertyDescriptor(key);
                        if (pd && (pd.set || pd.writable)) {
                            target[key] = this[key];
                        }
                    }
                    else {
                        target[key] = this[key];
                    }
                }
            },
            enumerable: false
        },
        deepClone: {
            value: function () {
                var jsonStr = JSON.stringify(this);
                return JSON.parse(jsonStr);
            },
            enumerable: false
        },
        deepCloneTo: {
            value: function (target) {
                var obj = this.deepClone();
                for (var key in obj) {
                    if (key in target) {
                        var pd = target.getPropertyDescriptor(key);
                        if (pd && (pd.set || pd.writable)) {
                            target[key] = obj[key];
                        }
                    }
                    else {
                        target[key] = obj[key];
                    }
                }
            },
            enumerable: false
        },
        clearAllProperty: {
            value: function () {
                for (var key in this) {
                    delete this[key];
                }
            },
            enumerable: false
        }
    });
    p = String.prototype;
    Object.defineProperties(p, {
        splitNum: {
            value: function (separator, limit) {
                var arr = this.split(separator, limit);
                for (var i = 0, len = arr.length; i < len; i++) {
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
            value: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
                    var v = args_1[_a];
                    if (this.indexOf(v) == -1) {
                        this[this.length] = v;
                    }
                }
                return this.length;
            },
            enumerable: false
        },
        sortOn: {
            value: function (fieldNames, options) {
                var array = this;
                if (!Array.isArray(fieldNames)) {
                    fieldNames = [fieldNames];
                }
                if (!Array.isArray(options)) {
                    options = [options];
                }
                if (fieldNames.length !== options.length) {
                    options = new Array(fieldNames.length).fill(0);
                }
                var returnIndexedArray = options[0] & Array.RETURNINDEXEDARRAY;
                if (returnIndexedArray) {
                    array = Array.from(array);
                }
                var functions = fieldNames.map(function (fieldName, index) {
                    return createComparisonFn(fieldName, options[index]);
                });
                var sorted = array.sort(function (a, b) {
                    return functions.reduce(function (result, fn) {
                        return result || fn(a, b);
                    }, 0);
                });
                return returnIndexedArray ? sorted : undefined;
                function createComparisonFn(fieldName, options) {
                    options = options || 0;
                    var transformations = [];
                    if (fieldName) {
                        transformations.push(function () {
                            return this[fieldName];
                        });
                    }
                    transformations.push((options & Array.NUMERIC)
                        ? function () {
                            return parseFloat(this);
                        }
                        : function () {
                            return (typeof this === 'string' && this)
                                || (typeof this === 'number' && '' + this)
                                || (this && this.toString())
                                || this;
                        });
                    if (options & Array.CASEINSENSITIVE) {
                        transformations.push(String.prototype.toLowerCase);
                    }
                    transformations.apply = Array.prototype.reduce.bind(transformations, function (value, transformation) {
                        return transformation.apply(value);
                    });
                    var AGreaterThanB = (options & Array.DESCENDING) ? -1 : 1;
                    var ALessThanB = -AGreaterThanB;
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
                    };
                }
            },
            enumerable: false
        },
        remove: {
            value: function (item) {
                var index = this.indexOf(item);
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
                var i = this.length;
                while (i) {
                    var j = Math.floor(Math.random() * i--);
                    _a = [this[j], this[i]], this[i] = _a[0], this[j] = _a[1];
                }
                return true;
                var _a;
            },
            enumerable: false
        }
    });
    p = Date.prototype;
    Object.defineProperties(p, {
        format: {
            value: function (template) {
                var map = {
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
            value: function (data) {
                var fatal = false;
                var pos = 0;
                var result = [];
                var code_point;
                var utf8_code_point = 0;
                var utf8_bytes_needed = 0;
                var utf8_bytes_seen = 0;
                var utf8_lower_boundary = 0;
                while (data.length > pos) {
                    var _byte = data[pos++];
                    if (_byte == this.EOF_byte) {
                        if (utf8_bytes_needed != 0) {
                            code_point = this.decoderError(fatal);
                        }
                        else {
                            code_point = this.EOF_code_point;
                        }
                    }
                    else {
                        if (utf8_bytes_needed == 0) {
                            if (this.inRange(_byte, 0x00, 0x7F)) {
                                code_point = _byte;
                            }
                            else {
                                if (this.inRange(_byte, 0xC2, 0xDF)) {
                                    utf8_bytes_needed = 1;
                                    utf8_lower_boundary = 0x80;
                                    utf8_code_point = _byte - 0xC0;
                                }
                                else if (this.inRange(_byte, 0xE0, 0xEF)) {
                                    utf8_bytes_needed = 2;
                                    utf8_lower_boundary = 0x800;
                                    utf8_code_point = _byte - 0xE0;
                                }
                                else if (this.inRange(_byte, 0xF0, 0xF4)) {
                                    utf8_bytes_needed = 3;
                                    utf8_lower_boundary = 0x10000;
                                    utf8_code_point = _byte - 0xF0;
                                }
                                else {
                                    this.decoderError(fatal);
                                }
                                utf8_code_point = utf8_code_point * Math.pow(64, utf8_bytes_needed);
                                code_point = null;
                            }
                        }
                        else if (!this.inRange(_byte, 0x80, 0xBF)) {
                            utf8_code_point = 0;
                            utf8_bytes_needed = 0;
                            utf8_bytes_seen = 0;
                            utf8_lower_boundary = 0;
                            pos--;
                            code_point = this.decoderError(fatal, _byte);
                        }
                        else {
                            utf8_bytes_seen += 1;
                            utf8_code_point = utf8_code_point + (_byte - 0x80) * Math.pow(64, utf8_bytes_needed - utf8_bytes_seen);
                            if (utf8_bytes_seen !== utf8_bytes_needed) {
                                code_point = null;
                            }
                            else {
                                var cp = utf8_code_point;
                                var lower_boundary = utf8_lower_boundary;
                                utf8_code_point = 0;
                                utf8_bytes_needed = 0;
                                utf8_bytes_seen = 0;
                                utf8_lower_boundary = 0;
                                if (this.inRange(cp, lower_boundary, 0x10FFFF) && !this.inRange(cp, 0xD800, 0xDFFF)) {
                                    code_point = cp;
                                }
                                else {
                                    code_point = this.decoderError(fatal, _byte);
                                }
                            }
                        }
                    }
                    //Decode string
                    if (code_point !== null && code_point !== this.EOF_code_point) {
                        if (code_point <= 0xFFFF) {
                            if (code_point > 0)
                                result.push(String.fromCharCode(code_point));
                        }
                        else {
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
    var t1 = p.$onAddToStage;
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
            value: function (value) {
                var self = this;
                if (self.$visible == value) {
                    return;
                }
                self.$visible = value;
                if (egret.nativeRender) {
                    self.$nativeDisplayObject.setVisible(value);
                }
                else {
                    self.$updateRenderMode();
                    var p_1 = self.$parent;
                    if (p_1 && !p_1.$cacheDirty) {
                        p_1.$cacheDirty = true;
                        p_1.$cacheDirtyUp();
                    }
                    var maskedObject = self.$maskedObject;
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
            value: function (event) {
                if (!this.__added) {
                    this.__added = true;
                    this.dispatchEventWith(egret.Event.ADDED, true);
                }
            },
            enumerable: false
        },
        __removeFromStage: {
            value: function (event) {
                this.__added = false;
            },
            enumerable: false
        },
        $onAddToStage: {
            value: function (stage, nestLevel) {
                t1.call(this, stage, nestLevel);
                this.dispatchEventWith(egret.Event.ADDED_TO_STAGE_IMMEDIATELY);
            },
            enumerable: false
        },
        stageVisible: {
            value: function (checkAlpha) {
                if (!this.stage) {
                    return false;
                }
                var target = this;
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
            value: function () {
                if (this.parent) {
                    this.parent.removeChild(this);
                }
            },
            enumerable: false
        },
        $hitTest: {
            value: function (stageX, stageY) {
                var self = this;
                if ((!egret.nativeRender && !self.$renderNode) || !self.$visible || self.$scaleX == 0 || self.$scaleY == 0) {
                    if (!self.hitArea) {
                        return null;
                    }
                }
                var m = self.$getInvertedConcatenatedMatrix();
                if (m.a == 0 && m.b == 0 && m.c == 0 && m.d == 0) {
                    if (!self.hitArea) {
                        return null;
                    }
                }
                var bounds = self.$getContentBounds();
                var localX = m.a * stageX + m.c * stageY + m.tx;
                var localY = m.b * stageX + m.d * stageY + m.ty;
                if (self.hitArea) {
                    if (self.hitArea.contains(localX, localY)) {
                        return self;
                    }
                    return null;
                }
                if (bounds.contains(localX, localY)) {
                    if (!self.$children) {
                        var rect = self.$scrollRect ? self.$scrollRect : self.$maskRect;
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
            value: function (listener, thisObject, useCapture, priority) {
                this.on(egret.TouchEvent.TOUCH_TAP, listener, thisObject, useCapture, priority);
            },
            enumerable: false
        },
        untap: {
            value: function (listener, thisObject, useCapture) {
                this.off(egret.TouchEvent.TOUCH_TAP, listener, thisObject, useCapture);
            },
            enumerable: false
        }
    });
    p = egret.DisplayObjectContainer.prototype;
    var t2 = p.$doAddChild;
    Object.defineProperties(p, {
        forChild: {
            value: function (callback, thisObj, containSub, ignoreContainer) {
                this.$forChild(this, 0, callback, thisObj, containSub, ignoreContainer);
            },
            enumerable: false
        },
        $forChild: {
            value: function (target, distance, callback, thisObj, containSub, ignoreContainer) {
                distance += 1;
                for (var i = 0, len = target.numChildren; i < len; i++) {
                    var child = target.getChildAt(i);
                    callback.call(thisObj, child, distance);
                    if (containSub && child instanceof egret.DisplayObjectContainer && (!ignoreContainer || !ignoreContainer(child))) {
                        this.$forChild(child, distance, callback, thisObj, containSub);
                    }
                }
            },
            enumerable: false
        },
        $doAddChild: {
            value: function (child, index, notifyListeners) {
                if (notifyListeners === void 0) { notifyListeners = true; }
                // 下面的代码用于带有中介类的 View 添加到还没有添加到舞台的父容器时的额外处理, 该 View 已经不会发送 ADDED 事件
                // 除上面的情况外, 直接添加到舞台或已存在舞台的父容器时普通显示对象和 EUI 组件逻辑均正常
                var p = Object.getPrototypeOf(child);
                var hasMediator = p.constructor.__isMediatorView;
                var hasStage = !!this.stage;
                if (hasMediator && !hasStage) {
                    // EUI 特殊处理下, 保证第一次打开时 createChildren 和 childrenCreated 方法都执行完毕后再执行 onRegister 方法
                    if (child instanceof eui.Component && !child.$UIComponent[29 /* initialized */]) {
                        child.once(eui.UIEvent.CREATION_COMPLETE, function (event) {
                            child.on(egret.Event.ADDED_TO_STAGE, child.__dispatchAddedEvent, child);
                            child.on(egret.Event.REMOVED_FROM_STAGE, child.__removeFromStage, child);
                            child.__dispatchAddedEvent();
                        }, this);
                    }
                    else {
                        child.on(egret.Event.ADDED_TO_STAGE, child.__dispatchAddedEvent, child);
                        child.on(egret.Event.REMOVED_FROM_STAGE, child.__removeFromStage, child);
                    }
                }
                var result = t2.call(this, child, index, notifyListeners);
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
            value: function (stageX, stageY) {
                if (!this.$visible) {
                    return null;
                }
                var m = this.$getInvertedConcatenatedMatrix();
                var localX = m.a * stageX + m.c * stageY + m.tx;
                var localY = m.b * stageX + m.d * stageY + m.ty;
                if (this.hitArea) {
                    if (this.hitArea.contains(localX, localY)) {
                        return this;
                    }
                    return null;
                }
                var rect = this.$scrollRect ? this.$scrollRect : this.$maskRect;
                if (rect && !rect.contains(localX, localY)) {
                    return null;
                }
                if (this.$mask && !this.$mask.$hitTest(stageX, stageY)) {
                    return null;
                }
                var children = this.$children;
                var found = false;
                var target = null;
                for (var i = children.length - 1; i >= 0; i--) {
                    var child = children[i];
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
            value: function (e) {
                if (this.$TextField[24 /* type */] == egret.TextFieldType.INPUT) {
                    return;
                }
                var ele = egret.TextFieldUtils.$getTextElement(this, e.localX, e.localY);
                if (ele == null) {
                    return;
                }
                var style = ele.style;
                if (style && style.href) {
                    if (style.href.match(/^event:/)) {
                        var type = style.href.match(/^event:/)[0];
                        var event_1 = egret.Event.create(egret.TextEvent, egret.TextEvent.LINK);
                        event_1.text = style.href.substring(type.length);
                        event_1.data = { stageX: e.stageX, stageY: e.stageY, localX: e.localX, localY: e.localY };
                        var result = this.dispatchEvent(event_1);
                        egret.Event.release(event_1);
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
            value: function () {
                var node = this.textNode;
                var values = this.$TextField;
                //更新文本样式
                node.bold = values[15 /* bold */];
                node.fontFamily = values[8 /* fontFamily */] || egret.TextField.default_fontFamily;
                node.italic = values[16 /* italic */];
                node.size = values[0 /* fontSize */];
                node.stroke = values[27 /* stroke */];
                node.strokeColor = values[25 /* strokeColor */];
                node.textColor = values[2 /* textColor */];
                //先算出需要的数值
                var lines = this.$getLinesArr();
                if (values[5 /* textWidth */] == 0) {
                    return [];
                }
                var maxWidth = !isNaN(values[3 /* textFieldWidth */]) ? values[3 /* textFieldWidth */] : values[5 /* textWidth */];
                var textHeight = egret.TextFieldUtils.$getTextHeight(this);
                var drawY = 0;
                var startLine = egret.TextFieldUtils.$getStartLine(this);
                var textFieldHeight = values[4 /* textFieldHeight */];
                if (!isNaN(textFieldHeight) && textFieldHeight > textHeight) {
                    var vAlign = egret.TextFieldUtils.$getValign(this);
                    drawY += vAlign * (textFieldHeight - textHeight);
                }
                drawY = Math.round(drawY);
                var hAlign = egret.TextFieldUtils.$getHalign(this);
                var drawX = 0;
                var underLineData = [];
                for (var i = startLine, numLinesLength = values[29 /* numLines */]; i < numLinesLength; i++) {
                    var line = lines[i];
                    var h = line.height;
                    drawY += h / 2;
                    if (i != startLine) {
                        if (values[24 /* type */] == egret.TextFieldType.INPUT && !values[30 /* multiline */]) {
                            break;
                        }
                        if (!isNaN(textFieldHeight) && drawY > textFieldHeight) {
                            break;
                        }
                    }
                    drawX = Math.round((maxWidth - line.width) * hAlign);
                    for (var j = 0, elementsLength = line.elements.length; j < elementsLength; j++) {
                        var element = line.elements[j];
                        var size = element.style.size || values[0 /* fontSize */];
                        var verticalAlign = values[10 /* verticalAlign */];
                        if (verticalAlign == egret.VerticalAlign.TOP) {
                            node.drawText(drawX, drawY - (h - size) / 2, element.text, element.style);
                        }
                        else if (verticalAlign == egret.VerticalAlign.MIDDLE) {
                            node.drawText(drawX, drawY, element.text, element.style);
                        }
                        else {
                            node.drawText(drawX, drawY + (h - size) / 2, element.text, element.style);
                        }
                        if (element.style.underline) {
                            underLineData.push(drawX, drawY + (h) / 2, element.width, element.style.textColor);
                        }
                        drawX += element.width;
                    }
                    drawY += h / 2 + values[1 /* lineSpacing */];
                }
                return underLineData;
            },
            enumerable: false
        }
    });
    Object.defineProperties(egret.Tween, {
        getInFight: {
            value: function (target, props, pluginData, override) {
                if (override) {
                    egret.Tween.removeTweens(target);
                }
                var tween = new egret.Tween(target, props, pluginData);
                tween.useFightRate = true;
                return tween;
            },
            enumerable: false
        }
    });
    p = egret.Tween.prototype;
    Object.defineProperties(p, {
        $tick: {
            value: function (delta) {
                if (this.paused) {
                    return;
                }
                var pos;
                if (this.useFightRate) {
                    pos = this._prevPosition + delta * game.$clock.fightClock.runningRate;
                }
                else {
                    pos = this._prevPosition + delta;
                }
                this.setPosition(pos);
            },
            enumerable: false
        }
    });
    Object.defineProperties(egret, {
        callLaterUnique: {
            value: function (method, thisObject) {
                var args = [];
                for (var _i = 2; _i < arguments.length; _i++) {
                    args[_i - 2] = arguments[_i];
                }
                for (var i = 0, len = egret.$callLaterFunctionList.length; i < len; i++) {
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
            value: function (key) {
                var res = RES.config.getResource(key);
                if (!res) {
                    return false;
                }
                var data = RES.host.get(res);
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
            value: function (width, height) {
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
