namespace game {
    /**
     * 全局数据
     * @author wizardc
     */
    export class GlobalInfo {
        private static _account: string;
        private static _userinfo: UserInfo;

        public static get account(): string {
            return this._account;
        }
        public static set account(v: string) {
            this._account = v;
        }
        public static get userinfo(): UserInfo {
            return this._userinfo;
        }

        public static init(): void {

            let userinfo = this._userinfo = new UserInfo();
            userinfo.avatarUrl = ExternalUserInfo.avatarUrl ? ExternalUserInfo.avatarUrl : "https://wx.qlogo.cn/mmopen/vi_32/DR4kWgpzu25U6k1392Dib6icT8xBge8EDD0nARFpLkMbsxYDkHglvxCK6K3oBiajH8pykNsyNxOFVkAFib2d6AlnXA/132";
            userinfo.city = ExternalUserInfo.city;
            userinfo.country = ExternalUserInfo.country;
            userinfo.gender = ExternalUserInfo.gender ? ExternalUserInfo.gender : 1;
            userinfo.language = ExternalUserInfo.language;
            userinfo.nickName = ExternalUserInfo.nickName ? ExternalUserInfo.nickName : "游客";
            userinfo.province = ExternalUserInfo.province;

            if (getItem("userId") && ExternalParams.username) {
                this._account = getItem("userId");
            } else {
                this._account = ExternalParams.username;
                setItem("userId", this._account);
            }
            let userdata: AccountVO = $userData.account = new AccountVO();
            userdata.userid = this._account;
        }

        public static initAccount(data: any): void {
            if (data && data["errMsg"] == "login:ok") {
                this._account = data["code"];
            } else {
                // if(getItem("userId")){
                //     this._account = getItem("userId");
                // }else{
                //      this._account = Date.now().toString();
                //      setItem("userId",this._account);
                // }
            }
            let userdata: AccountVO = $userData.account = new AccountVO();
            userdata.userid = this._account;
        }
        public static initUserinfo(data: any): void {
            let userinfo = this._userinfo = new UserInfo();
            if (data) {
                userinfo.avatarUrl = "";
                userinfo.city = data["city"];
                userinfo.country = data["country"];
                userinfo.gender = data["gender"];
                userinfo.language = data["language"];
                // userinfo.nickName = data["nickName"];
                userinfo.nickName = "";
                userinfo.province = data["province"];
            } else {
                userinfo.avatarUrl = "https://wx.qlogo.cn/mmopen/vi_32/DR4kWgpzu25U6k1392Dib6icT8xBge8EDD0nARFpLkMbsxYDkHglvxCK6K3oBiajH8pykNsyNxOFVkAFib2d6AlnXA/132";
                userinfo.city = "";
                userinfo.country = "";
                userinfo.gender = 1;
                userinfo.language = "";
                userinfo.nickName = "测试账号";
                userinfo.province = "";
            }

        }
    }

    export class UserInfo {
        public avatarUrl: string;
        public city: string;
        public country: string;
        public gender: number;
        public language: string;
        public nickName: string;
        public province: string;
    }
}
