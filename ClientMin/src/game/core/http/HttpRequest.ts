namespace game {
    export class HttpRequest extends egret.EventDispatcher {
        /** 最大发包 */
        public static maxSendBufferSize: number = 6 * 1024;
        /** 发包的缓冲 */
        public static inputBuffer: ArrayBuffer;

        private statusPostLabel: egret.TextField;

        private static _instance: HttpRequest;

        public static get instance(): HttpRequest {
            return HttpRequest._instance || (HttpRequest._instance = new HttpRequest());
        }

        public constructor() {
            super();
            HttpRequest.inputBuffer = new ArrayBuffer(HttpRequest.maxSendBufferSize);
        }

        private sendPostRequest(data: any, route: string, responseType: string) {

            let request = new egret.HttpRequest();
            request.responseType = responseType;
            let type = "http://";
            if (window.location.protocol == "https:" || js_gameVars.useWss) {
                type = "https://";
            }
            let ipadress = type + js_gameVars.httpIP + ":" + js_gameVars.port + route
            request.open(ipadress, egret.HttpMethod.POST);
            // request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            request.send(data);
            request.addEventListener(egret.Event.COMPLETE, this.onPostComplete, this);
            request.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onPostIOError, this);
            request.addEventListener(egret.ProgressEvent.PROGRESS, this.onPostProgress, this);
        }

        private onPostComplete(event: egret.Event) {
            let request = <egret.HttpRequest>event.currentTarget;
            let msg;
            if (request.responseType == egret.HttpResponseType.TEXT) {
                // msg = JSON.parse(request.response);
            }
            else if (request.responseType == egret.HttpResponseType.ARRAY_BUFFER) {
                let data = new egret.ByteArray(request.response);
                let arrByte = data.buffer as ArrayBuffer;
                if (!arrByte) {
                    return;
                }
                if (arrByte.byteLength < 12) {
                    console.warn("包长度过小：" + arrByte.byteLength);
                    return;
                }
                msg = gameMsg.Msg.decode(data.bytes)
            }

            if (msg && msg.response) {
                if (msg.response.nErrorCode == gameMsg.ErrorCode.success) {
                    this.dispatch(msg.type, false, msg);
                } else {
                    $facade.addModule(ModuleID.msg, undefined, ErrorCodeText[msg.response.nErrorCode]);
                }
            }
        }

        private onPostIOError(event: egret.IOErrorEvent): void {
            // console.log("post error : " + event);
        }

        private onPostProgress(event: egret.ProgressEvent): void {
            // console.log("post progress : " + Math.floor(100 * event.bytesLoaded / event.bytesTotal) + "%");
        }

        public sendMsg(data, route: string) {
            // let msg = JSON.stringify(data);
            var errMsg = gameMsg.Msg.verify(data);
            if (errMsg)
                throw Error(errMsg);
            var message = gameMsg.Msg.create(data);
            var buffer = gameMsg.Msg.encode(message).finish();

            var array;
            if (js_gameConfig.isLittleGame) {
                array = buffer.buffer;
            } else {
                array = buffer;
            }

            this.sendPostRequest(array, route, egret.HttpResponseType.ARRAY_BUFFER);
        }

        public send(data, route: string) {
            this.sendPostRequest(data, route, egret.HttpResponseType.TEXT);
        }

    }
}