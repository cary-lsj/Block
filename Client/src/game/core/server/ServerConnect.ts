namespace game {
    /**
     * 服务器连接
     * @author wizardc
     */
    export class ServerConnect extends egret.EventDispatcher {
        /** 连接失败时最多的重连次数 */
        private static _maxReconnectCount: number = 5;

        private _socket: SocketConnect;
        private _host: string;
        private _port: number;
        private _url: string;
        private _connected: boolean = false;

        private _reconnectCount: number = 0;

        private _isRelogin: boolean = false;
        private _netVO: any;

        public constructor() {
            super();
        }

        public get host(): string {
            return this._host;
        }

        public get port(): number {
            return this._port;
        }

        public get connected(): boolean {
            return this._connected;
        }

        public get packgeInfo(): { [k: number]: { count: number, len: number } } {
            return this._socket ? this._socket.packgeInfo : undefined;
        }

        public set isRelogin(value: boolean) {
            this._isRelogin = value;
        }
        public get isRelogin(): boolean {
            return this._isRelogin;
        }

        public connect(): void {
            if (this._connected) {
                this.close();
            }
            this._socket = new SocketConnect();
            this._socket.on(egret.Event.CONNECT, this.onOpen, this);
            this._socket.on(SocketConnect.PACKET, this.onPacket, this);
            this._socket.on(egret.Event.CLOSE, this.onReconnect, this);
            this._socket.on(egret.IOErrorEvent.IO_ERROR, this.onReconnect, this);

            let host = ServerIP.serverIP;
            let port = ServerIP.port;
            this._url = ServerIP.SocketType + host + ":" + port + Route.game + "?id=" + GlobalInfo.account;

            this._socket.connect(this._url);
            this._host = host;
            this._port = port;
        }

        public reconnect(): void {
            this.connect();
        }

        public send(netVO: any): void {
            if (this._socket) {
                this._socket.send(netVO);
            } else {
                this._netVO = netVO;
                this.connect();
            }
        }

        private onOpen(event: egret.Event): void {
            this._connected = true;

            this._socket.off(egret.Event.CLOSE, this.onReconnect, this);
            this._socket.off(egret.IOErrorEvent.IO_ERROR, this.onReconnect, this);
            this._socket.on(egret.Event.CLOSE, this.onDisconnect, this);
            this._socket.on(egret.IOErrorEvent.IO_ERROR, this.onDisconnect, this);
            if (this._netVO) {
                this.send(this._netVO);
                this._netVO = undefined;
            }
        }

        private onPacket(event: egret.Event): void {
            let msg = event.data as gameMsg.Msg;
            if (msg.response) {
                if (msg.response.nErrorCode == gameMsg.ErrorCode.success) {
                    this.dispatch(msg.type, false, msg.response);
                } else {
                    $facade.addModule(ModuleID.msg, undefined, ErrorCodeText[msg.response.nErrorCode]);
                    // console.log(ErrorCodeText[msg.response.nErrorCode]);
                }
            } else if (msg.notify) {
                this.dispatch(msg.type, false, msg.notify);
            }

        }

        private onReconnect(event: egret.Event): void {
            if (this._reconnectCount >= ServerConnect._maxReconnectCount) {
                // TODO : 服务端连接失败
                alert("服务端连接失败！");
                this._socket = undefined;
            } else {
                this._reconnectCount++;
                this._socket.connect(this._url);
            }
        }

        private onDisconnect(event: egret.IOErrorEvent): void {
            this.close();

            $facade.dispatch(NotifyConst.connectBreak);
        }

        public close(): void {
            this._connected = false;

            this._socket.off(egret.Event.CONNECT, this.onOpen, this);
            this._socket.off(SocketConnect.PACKET, this.onPacket, this);
            this._socket.off(egret.Event.CLOSE, this.onReconnect, this);
            this._socket.off(egret.IOErrorEvent.IO_ERROR, this.onReconnect, this);
            this._socket.off(egret.Event.CLOSE, this.onDisconnect, this);
            this._socket.off(egret.IOErrorEvent.IO_ERROR, this.onDisconnect, this);
            this._socket.close();
            this._socket = undefined;

            this._url = undefined;
            this._reconnectCount = 0;
        }
    }
}
