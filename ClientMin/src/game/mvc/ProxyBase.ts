namespace game {
    /**
     * 代理基类, 抽一层出来处理非 MVC 功能的逻辑
     * @author cary
     */
    export abstract class ProxyBase extends AbstractProxy {
        protected __interestMessageList: { [key: string]: Function[] };

        protected _connect: ServerConnect;
        protected _http: HttpRequest;
        protected _sender: NetSender;
        protected _senderHttp: HttpSender;

        public constructor(name: string | ProxyID) {
            super(name);

            this._connect = ServerConnectInst.instance;
            this._sender = NetSenderInst.getInstance(this._connect);

            this._http = HttpRequestInst.instance;
            this._senderHttp = HttpSenderInst.getInstance(this._http);

            let httpael = this._http.addEventListener.bind(this._http);
            let ael = this._connect.addEventListener.bind(this._connect);
            let interestEventList = this.__interestMessageList;
            for (let messageID in interestEventList) {
                let callbackList = interestEventList[messageID];
                for (let k in callbackList) {
                    let callback = callbackList[k];
                    ael(messageID, callback, this);
                    httpael(messageID, callback, this);
                }
            }
        }

        protected send(netVO: any): void {
            this._connect.send(netVO);
        }
    }

    export function InterestMessage(messageID: gameMsg.EnumMsg) {
        return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
            if (!target.__interestMessageList) {
                target.__interestMessageList = {};
            }
            let map: { [key: string]: Function[] } = target.__interestMessageList;
            if (!map[messageID]) {
                map[messageID] = [];
            }
            let list = map[messageID];
            let func = descriptor.value;
            if (list.indexOf(func) == -1) {
                list.push(func);
            }
        };
    }

    class ServerConnectInst {
        private static _instance: ServerConnect;

        public static get instance(): ServerConnect {
            return ServerConnectInst._instance || (ServerConnectInst._instance = new ServerConnect());
        }
    }

    class NetSenderInst extends NetSender {
        private static _instance: NetSenderInst;

        public static getInstance(connect: ServerConnect): NetSender {
            return NetSenderInst._instance || (NetSenderInst._instance = new NetSenderInst(connect));
        }
    }

    class HttpRequestInst {
        private static _instance: HttpRequest;

        public static get instance(): HttpRequest {
            return HttpRequestInst._instance || (HttpRequestInst._instance = new HttpRequest());
        }
    }

    class HttpSenderInst extends HttpSender {
        private static _instance: HttpSenderInst;

        public static getInstance(connect: HttpRequest): HttpSender {
            return HttpSenderInst._instance || (HttpSenderInst._instance = new HttpSenderInst(connect));
        }
    }
}
