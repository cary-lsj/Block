namespace game {
    /**
     * 全局数据
     * @author cary
     */
    export class GlobalInfo {
        private static _account: string;

        public static get account(): string {
            return this._account;
        }

        public static init(): void {

        }

        public static initUserinfo(info) {
            if (info) {
                js_userInfo = info;
            }
        }

        public static initAccount(data: string): void {
            let userdata: AccountVO = $userData.account;
            userdata.username = this._account = data;
        }

    }

}
