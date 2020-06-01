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
     * 套接字连接对象
     */
    var SocketConnect = (function (_super) {
        __extends(SocketConnect, _super);
        function SocketConnect() {
            var _this = _super.call(this) || this;
            /**
             * 在线包信息
             */
            _this._packgeInfo = {};
            SocketConnect.inputBuffer = new ArrayBuffer(SocketConnect.maxSendBufferSize);
            return _this;
        }
        Object.defineProperty(SocketConnect.prototype, "connected", {
            get: function () {
                if (this._socket) {
                    return this._socket.connected;
                }
                return false;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SocketConnect.prototype, "packgeInfo", {
            get: function () {
                return this._packgeInfo;
            },
            enumerable: true,
            configurable: true
        });
        SocketConnect.prototype.connect = function (url) {
            if (this._socket) {
                this.close();
            }
            this._socket = new egret.WebSocket();
            this._socket.type = egret.WebSocket.TYPE_BINARY;
            this._socket.on(egret.Event.CONNECT, this.onOpen, this);
            this._socket.on(egret.ProgressEvent.SOCKET_DATA, this.onMessage, this);
            this._socket.on(egret.Event.CLOSE, this.onClose, this);
            this._socket.on(egret.IOErrorEvent.IO_ERROR, this.onError, this);
            this._socket.connectByUrl(url);
        };
        SocketConnect.prototype.send = function (data) {
            var errMsg = gameMsg.Msg.verify(data);
            if (errMsg)
                throw Error(errMsg);
            var message = gameMsg.Msg.create(data);
            var buffer = gameMsg.Msg.encode(message).finish();
            var byte = new egret.ByteArray(buffer);
            // 发送
            if (this._socket) {
                this._socket.writeBytes(byte, 0, byte.bytesAvailable);
                this._socket.flush();
            }
        };
        SocketConnect.prototype.onOpen = function (event) {
            this.dispatchEvent(event);
        };
        SocketConnect.prototype.onMessage = function (event) {
            if (!event) {
                return;
            }
            var bytes = new egret.ByteArray();
            this._socket.readBytes(bytes);
            var msg = gameMsg.Msg.decode(bytes.bytes);
            this.dispatch(SocketConnect.PACKET, false, msg);
        };
        SocketConnect.prototype.onClose = function (event) {
            this.dispatchEvent(event);
        };
        SocketConnect.prototype.onError = function (event) {
            this.dispatchEvent(event);
        };
        SocketConnect.prototype.close = function () {
            if (this._socket) {
                this._socket.off(egret.Event.CONNECT, this.onOpen, this);
                this._socket.off(egret.ProgressEvent.SOCKET_DATA, this.onMessage, this);
                this._socket.off(egret.Event.CLOSE, this.onClose, this);
                this._socket.off(egret.IOErrorEvent.IO_ERROR, this.onError, this);
                this._socket.close();
                this._socket = undefined;
            }
        };
        /** 最大发包 */
        SocketConnect.maxSendBufferSize = 6 * 1024;
        SocketConnect.PACKET = "packet";
        return SocketConnect;
    }(egret.EventDispatcher));
    game.SocketConnect = SocketConnect;
    __reflect(SocketConnect.prototype, "game.SocketConnect");
})(game || (game = {}));
