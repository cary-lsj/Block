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
    var HttpRequest = (function (_super) {
        __extends(HttpRequest, _super);
        function HttpRequest() {
            var _this = _super.call(this) || this;
            HttpRequest.inputBuffer = new ArrayBuffer(HttpRequest.maxSendBufferSize);
            return _this;
        }
        HttpRequest.prototype.sendPostRequest = function (data, route) {
            var request = new egret.HttpRequest();
            request.responseType = egret.HttpResponseType.TEXT;
            var type = "http://";
            if (window.location.protocol == "https:" || js_gameVars.useWss) {
                type = "https://";
            }
            var ipadress = type + js_gameVars.httpIP + ":" + js_gameVars.port + route;
            request.open(ipadress, egret.HttpMethod.POST);
            // request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            request.send(data);
            request.addEventListener(egret.Event.COMPLETE, this.onPostComplete, this);
            request.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onPostIOError, this);
            request.addEventListener(egret.ProgressEvent.PROGRESS, this.onPostProgress, this);
        };
        HttpRequest.prototype.onPostComplete = function (event) {
            var request = event.currentTarget;
            var msg = JSON.parse(request.response);
            if (msg.response.nErrorCode == gameMsg.ErrorCode.success) {
                this.dispatch(msg.type, false, msg);
            }
            else {
                game.$facade.addModule(game.ModuleID.msg, undefined, game.ErrorCodeText[msg.response.nErrorCode]);
            }
        };
        HttpRequest.prototype.onPostIOError = function (event) {
            // console.log("post error : " + event);
        };
        HttpRequest.prototype.onPostProgress = function (event) {
            // console.log("post progress : " + Math.floor(100 * event.bytesLoaded / event.bytesTotal) + "%");
        };
        HttpRequest.prototype.send = function (data, route) {
            return;
            var msg = JSON.stringify(data);
            this.sendPostRequest(msg, route);
        };
        /** 最大发包 */
        HttpRequest.maxSendBufferSize = 6 * 1024;
        return HttpRequest;
    }(egret.EventDispatcher));
    game.HttpRequest = HttpRequest;
    __reflect(HttpRequest.prototype, "game.HttpRequest");
})(game || (game = {}));
