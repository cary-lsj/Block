namespace game {
    /**
     * 套接字连接对象
     */
    export class SocketConnect extends egret.EventDispatcher {
        /** 发包的缓冲 */
        public static inputBuffer: ArrayBuffer;
        /** 最大发包 */
        public static maxSendBufferSize: number = 6 * 1024;

        public static PACKET: string = "packet";

        private _socket: egret.WebSocket;

        /**
         * 在线包信息
         */
        private _packgeInfo: { [k: number]: { count: number, len: number } } = {};

        public constructor() {
            super();
            SocketConnect.inputBuffer = new ArrayBuffer(SocketConnect.maxSendBufferSize);
        }

        public get connected(): boolean {
            if (this._socket) {
                return this._socket.connected;
            }
            return false;
        }

        public get packgeInfo(): { [k: number]: { count: number, len: number } } {
            return this._packgeInfo;
        }

        public connect(url: string): void {
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
        }

        public send(data): void {
            var errMsg = gameMsg.Msg.verify(data);
            if (errMsg)
                throw Error(errMsg);
            var message = gameMsg.Msg.create(data);
            var buffer = gameMsg.Msg.encode(message).finish();

            let byte = new egret.ByteArray(buffer);
            // 发送
            if (this._socket) {
                this._socket.writeBytes(byte, 0, byte.bytesAvailable);
                this._socket.flush();
            }
        }

        private onOpen(event: egret.Event): void {
            this.dispatchEvent(event);
        }

        private onMessage(event: egret.Event): void {
            if (!event) {
                return;
            }
            let bytes = new egret.ByteArray();
            this._socket.readBytes(bytes);
            let msg = gameMsg.Msg.decode(bytes.bytes);
            this.dispatch(SocketConnect.PACKET, false, msg);
        }

        private onClose(event: egret.Event): void {
            this.dispatchEvent(event);
        }

        private onError(event: egret.IOErrorEvent): void {
            this.dispatchEvent(event);
        }

        public close(): void {
            if (this._socket) {
                this._socket.off(egret.Event.CONNECT, this.onOpen, this);
                this._socket.off(egret.ProgressEvent.SOCKET_DATA, this.onMessage, this);
                this._socket.off(egret.Event.CLOSE, this.onClose, this);
                this._socket.off(egret.IOErrorEvent.IO_ERROR, this.onError, this);
                this._socket.close();
                this._socket = undefined;
            }
        }
    }
}
