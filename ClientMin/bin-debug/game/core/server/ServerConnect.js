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
     * 服务器连接
     * @author wizardc
     */
    var ServerConnect = (function (_super) {
        __extends(ServerConnect, _super);
        function ServerConnect() {
            var _this = _super.call(this) || this;
            _this._connected = false;
            _this._reconnectCount = 0;
            _this._isRelogin = false;
            return _this;
        }
        Object.defineProperty(ServerConnect.prototype, "host", {
            get: function () {
                return this._host;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ServerConnect.prototype, "port", {
            get: function () {
                return this._port;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ServerConnect.prototype, "connected", {
            get: function () {
                return this._connected;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ServerConnect.prototype, "packgeInfo", {
            get: function () {
                return this._socket ? this._socket.packgeInfo : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ServerConnect.prototype, "isRelogin", {
            get: function () {
                return this._isRelogin;
            },
            set: function (value) {
                this._isRelogin = value;
            },
            enumerable: true,
            configurable: true
        });
        ServerConnect.prototype.connect = function () {
            if (this._connected) {
                this.close();
            }
            this._socket = new game.SocketConnect();
            this._socket.on(egret.Event.CONNECT, this.onOpen, this);
            this._socket.on(game.SocketConnect.PACKET, this.onPacket, this);
            this._socket.on(egret.Event.CLOSE, this.onReconnect, this);
            this._socket.on(egret.IOErrorEvent.IO_ERROR, this.onReconnect, this);
            var host = js_gameVars.websocketIP;
            var port = js_gameVars.port;
            var type = "ws://";
            if (window.location.protocol == "https:" || js_gameVars.useWss) {
                type = "wss://";
            }
            this._url = type + host + ":" + port + game.Route.game + "?id=" + game.GlobalInfo.account;
            this._socket.connect(this._url);
            this._host = host;
            this._port = port;
        };
        ServerConnect.prototype.reconnect = function () {
            this.connect();
        };
        ServerConnect.prototype.send = function (netVO) {
            if (this._socket) {
                this._socket.send(netVO);
            }
            else {
                this._netVO = netVO;
                this.connect();
            }
        };
        ServerConnect.prototype.onOpen = function (event) {
            this._connected = true;
            this._socket.off(egret.Event.CLOSE, this.onReconnect, this);
            this._socket.off(egret.IOErrorEvent.IO_ERROR, this.onReconnect, this);
            this._socket.on(egret.Event.CLOSE, this.onDisconnect, this);
            this._socket.on(egret.IOErrorEvent.IO_ERROR, this.onDisconnect, this);
            if (this._netVO) {
                this.send(this._netVO);
                this._netVO = undefined;
            }
        };
        ServerConnect.prototype.onPacket = function (event) {
            var msg = event.data;
            if (msg.response) {
                if (msg.response.nErrorCode == gameMsg.ErrorCode.success) {
                    this.dispatch(msg.type, false, msg.response);
                }
                else {
                    game.$facade.addModule(game.ModuleID.msg, undefined, game.ErrorCodeText[msg.response.nErrorCode]);
                    // console.log(ErrorCodeText[msg.response.nErrorCode]);
                }
            }
            else if (msg.notify) {
                this.dispatch(msg.type, false, msg.notify);
            }
        };
        ServerConnect.prototype.onReconnect = function (event) {
            if (this._reconnectCount >= ServerConnect._maxReconnectCount) {
                // TODO : 服务端连接失败
                alert("服务端连接失败！");
                this._socket = undefined;
            }
            else {
                this._reconnectCount++;
                this._socket.connect(this._url);
            }
        };
        ServerConnect.prototype.onDisconnect = function (event) {
            this.close();
            game.$facade.dispatch(8 /* connectBreak */);
        };
        ServerConnect.prototype.close = function () {
            this._connected = false;
            this._socket.off(egret.Event.CONNECT, this.onOpen, this);
            this._socket.off(game.SocketConnect.PACKET, this.onPacket, this);
            this._socket.off(egret.Event.CLOSE, this.onReconnect, this);
            this._socket.off(egret.IOErrorEvent.IO_ERROR, this.onReconnect, this);
            this._socket.off(egret.Event.CLOSE, this.onDisconnect, this);
            this._socket.off(egret.IOErrorEvent.IO_ERROR, this.onDisconnect, this);
            this._socket.close();
            this._socket = undefined;
            this._url = undefined;
            this._reconnectCount = 0;
        };
        /** 连接失败时最多的重连次数 */
        ServerConnect._maxReconnectCount = 5;
        return ServerConnect;
    }(egret.EventDispatcher));
    game.ServerConnect = ServerConnect;
    __reflect(ServerConnect.prototype, "game.ServerConnect");
})(game || (game = {}));
