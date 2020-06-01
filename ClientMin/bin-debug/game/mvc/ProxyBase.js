var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var game;
(function (game) {
    /**
     * 代理基类, 抽一层出来处理非 MVC 功能的逻辑
     * @author wizardc
     */
    var ProxyBase = (function (_super) {
        __extends(ProxyBase, _super);
        function ProxyBase(name) {
            var _this = _super.call(this, name) || this;
            _this._connect = ServerConnectInst.instance;
            _this._sender = NetSenderInst.getInstance(_this._connect);
            _this._http = HttpRequestInst.instance;
            _this._senderHttp = HttpSenderInst.getInstance(_this._http);
            var httpael = _this._http.addEventListener.bind(_this._http);
            var ael = _this._connect.addEventListener.bind(_this._connect);
            var interestEventList = _this.__interestMessageList;
            for (var messageID in interestEventList) {
                var callbackList = interestEventList[messageID];
                for (var k in callbackList) {
                    var callback = callbackList[k];
                    ael(messageID, callback, _this);
                    httpael(messageID, callback, _this);
                }
            }
            return _this;
        }
        ProxyBase.prototype.send = function (netVO) {
            this._connect.send(netVO);
        };
        return ProxyBase;
    }(game.AbstractProxy));
    game.ProxyBase = ProxyBase;
    __reflect(ProxyBase.prototype, "game.ProxyBase");
    function InterestMessage(messageID) {
        return function (target, propertyKey, descriptor) {
            if (!target.__interestMessageList) {
                target.__interestMessageList = {};
            }
            var map = target.__interestMessageList;
            if (!map[messageID]) {
                map[messageID] = [];
            }
            var list = map[messageID];
            var func = descriptor.value;
            if (list.indexOf(func) == -1) {
                list.push(func);
            }
        };
    }
    game.InterestMessage = InterestMessage;
    var ServerConnectInst = (function () {
        function ServerConnectInst() {
        }
        Object.defineProperty(ServerConnectInst, "instance", {
            get: function () {
                return ServerConnectInst._instance || (ServerConnectInst._instance = new game.ServerConnect());
            },
            enumerable: true,
            configurable: true
        });
        return ServerConnectInst;
    }());
    __reflect(ServerConnectInst.prototype, "ServerConnectInst");
    var NetSenderInst = (function (_super) {
        __extends(NetSenderInst, _super);
        function NetSenderInst() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        NetSenderInst.getInstance = function (connect) {
            return NetSenderInst._instance || (NetSenderInst._instance = new NetSenderInst(connect));
        };
        return NetSenderInst;
    }(game.NetSender));
    __reflect(NetSenderInst.prototype, "NetSenderInst");
    var HttpRequestInst = (function () {
        function HttpRequestInst() {
        }
        Object.defineProperty(HttpRequestInst, "instance", {
            get: function () {
                return HttpRequestInst._instance || (HttpRequestInst._instance = new game.HttpRequest());
            },
            enumerable: true,
            configurable: true
        });
        return HttpRequestInst;
    }());
    __reflect(HttpRequestInst.prototype, "HttpRequestInst");
    var HttpSenderInst = (function (_super) {
        __extends(HttpSenderInst, _super);
        function HttpSenderInst() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        HttpSenderInst.getInstance = function (connect) {
            return HttpSenderInst._instance || (HttpSenderInst._instance = new HttpSenderInst(connect));
        };
        return HttpSenderInst;
    }(game.HttpSender));
    __reflect(HttpSenderInst.prototype, "HttpSenderInst");
})(game || (game = {}));
