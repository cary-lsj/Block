namespace game {
    export class HttpRequest extends egret.EventDispatcher {
        /** 最大发包 */
        public static maxSendBufferSize: number = 6 * 1024;
        /** 发包的缓冲 */
        public static inputBuffer: ArrayBuffer;

        private statusPostLabel: egret.TextField;
        public constructor() {
            super();
            HttpRequest.inputBuffer = new ArrayBuffer(HttpRequest.maxSendBufferSize);
        }
        private sendPostRequest(data: any, route: string) {

            let request = new egret.HttpRequest();
            request.responseType = egret.HttpResponseType.TEXT;
            let ipadress = ServerIP.HttpType + ServerIP.serverIP + ":" + ServerIP.port + route
            request.open(ipadress, egret.HttpMethod.POST);
            // request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            request.send(data);
            request.addEventListener(egret.Event.COMPLETE, this.onPostComplete, this);
            request.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onPostIOError, this);
            request.addEventListener(egret.ProgressEvent.PROGRESS, this.onPostProgress, this);
        }
        private onPostComplete(event: egret.Event) {
            let request = <egret.HttpRequest>event.currentTarget;

            let msg = JSON.parse(request.response);
            if (msg.response.nErrorCode == gameMsg.ErrorCode.success) {
                this.dispatch(msg.type, false, msg);
            } else {
                $facade.addModule(ModuleID.msg,undefined,ErrorCodeText[msg.response.nErrorCode]);
            }

        }
        private onPostIOError(event: egret.IOErrorEvent): void {
            // console.log("post error : " + event);
        }
        private onPostProgress(event: egret.ProgressEvent): void {
            // console.log("post progress : " + Math.floor(100 * event.bytesLoaded / event.bytesTotal) + "%");
        }

        public send(data: JSON, route: string) {
            let msg = JSON.stringify(data);
            this.sendPostRequest(msg, route);
        }


    }
}