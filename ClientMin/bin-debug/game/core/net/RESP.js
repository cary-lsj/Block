var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var game;
(function (game) {
    /**
     * 带有优先级的资源管理类
     * @author wizardc
     */
    var RESP;
    (function (RESP) {
        function setMaxLoadingThread(thread) {
            instance.setMaxLoadingThread(thread);
        }
        RESP.setMaxLoadingThread = setMaxLoadingThread;
        function getRes(key) {
            return RES.getRes(key);
        }
        RESP.getRes = getRes;
        function getResAsync(key, compFunc, thisObject, priority) {
            if (priority === void 0) { priority = 0; }
            instance.getResAsync(key, compFunc, thisObject, priority);
        }
        RESP.getResAsync = getResAsync;
        function getResAsyncAsync(key, priority) {
            if (priority === void 0) { priority = 0; }
            return instance.getResAsyncAsync(key, priority);
        }
        RESP.getResAsyncAsync = getResAsyncAsync;
        function getResByUrl(url, compFunc, thisObject, type, priority) {
            if (priority === void 0) { priority = 0; }
            instance.getResByUrl(url, compFunc, thisObject, type, priority);
        }
        RESP.getResByUrl = getResByUrl;
        function getResByUrlAsync(url, type, priority) {
            if (priority === void 0) { priority = 0; }
            return instance.getResByUrlAsync(url, type, priority);
        }
        RESP.getResByUrlAsync = getResByUrlAsync;
        var Resource = (function () {
            function Resource() {
                this._maxLoadingThread = 2;
                this._nowLoadingThread = 0;
                this._priorityList = [];
                this._priorityMap = {};
            }
            Resource.prototype.setMaxLoadingThread = function (thread) {
                this._maxLoadingThread = Math.max(thread, 1);
            };
            Resource.prototype.getResAsync = function (key, compFunc, thisObject, priority) {
                if (priority === void 0) { priority = 0; }
                if (!this._priorityMap[priority]) {
                    this._priorityList.push(priority);
                    this._priorityList.sort(this.sortFunc);
                    this._priorityMap[priority] = [];
                }
                var list = this._priorityMap[priority];
                list.push({ inConfig: true, key: key, compFunc: compFunc, thisObject: thisObject });
                this.loadNext();
            };
            Resource.prototype.getResAsyncAsync = function (key, priority) {
                var _this = this;
                if (priority === void 0) { priority = 0; }
                return new Promise(function (resolve, reject) {
                    RESP.getResAsync(key, function (data, url) {
                        resolve(data);
                    }, _this, priority);
                });
            };
            Resource.prototype.getResByUrl = function (url, compFunc, thisObject, type, priority) {
                if (priority === void 0) { priority = 0; }
                if (!this._priorityMap[priority]) {
                    this._priorityList.push(priority);
                    this._priorityList.sort(this.sortFunc);
                    this._priorityMap[priority] = [];
                }
                var list = this._priorityMap[priority];
                list.push({ inConfig: false, url: url, compFunc: compFunc, thisObject: thisObject, type: type });
                this.loadNext();
            };
            Resource.prototype.getResByUrlAsync = function (url, type, priority) {
                var _this = this;
                if (priority === void 0) { priority = 0; }
                return new Promise(function (resolve, reject) {
                    RESP.getResByUrl(url, function (data, url) {
                        resolve(data);
                    }, _this, type, priority);
                });
            };
            Resource.prototype.sortFunc = function (a, b) {
                return b - a;
            };
            Resource.prototype.loadNext = function () {
                var _this = this;
                if (this._nowLoadingThread >= this._maxLoadingThread) {
                    return;
                }
                var item;
                for (var _i = 0, _a = this._priorityList; _i < _a.length; _i++) {
                    var priority = _a[_i];
                    var list = this._priorityMap[priority];
                    if (list.length > 0) {
                        item = list.shift();
                        break;
                    }
                }
                if (item) {
                    if (item.inConfig) {
                        this._nowLoadingThread++;
                        RES.getResAsync(item.key, function (data, url) {
                            _this._nowLoadingThread--;
                            if (item.compFunc) {
                                item.compFunc.call(item.thisObject, data, url);
                            }
                            _this.loadNext();
                        }, this);
                    }
                    else {
                        this._nowLoadingThread++;
                        RES.getResByUrl(item.url, function (data, url) {
                            _this._nowLoadingThread--;
                            if (item.compFunc) {
                                item.compFunc.call(item.thisObject, data, url);
                            }
                            _this.loadNext();
                        }, this, item.type);
                    }
                }
            };
            return Resource;
        }());
        __reflect(Resource.prototype, "Resource");
        var instance = new Resource();
    })(RESP = game.RESP || (game.RESP = {}));
})(game || (game = {}));
