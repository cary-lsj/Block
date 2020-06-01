namespace game {
    /**
     * 登录时需要请求的方法
     * @author wizardc
     */
    export class LoginRequests extends Notifier {


        private _list: (() => void)[];

        public start(): void {
            this._list = [];

            this.requestOnce();
        }

        private requestOnce(): void {
            if (this._list.length > 0) {
                let func = this._list.shift();
                func.call(this);
                egret.callLater(this.requestOnce, this);
            }
        }
    }
}
