namespace game {
    /**
     * 外部传入的游戏参数
     * @author wizardc
     */
    export class ExternalParams {
        public static get username(): string {
            return js_gameVars.username;
        }

        public static get platform(): number {
            return js_gameVars.platform;
        }

        public static get zoneID(): number {
            return js_gameVars.zoneID;
        }

        public static get websocketIP(): string {
            return js_gameVars.websocketIP;
        }

        public static get httpIP(): string {
            return js_gameVars.httpIP;
        }

        public static get port(): number {
            return js_gameVars.port;
        }

        public static get useWss(): boolean {
            return js_gameVars.useWss;
        }

        public static get time(): number {
            return js_gameVars.time;
        }

        public static get sign(): string {
            return js_gameVars.sign;
        }

        public static get channel(): string {
            return js_gameVars.channel;
        }
    }
    /**
    * 外部传入的游戏参数
    * @author wizardc
    */
    export class ExternalUserInfo {
        public static get avatarUrl(): string {
            return js_userInfo.avatarUrl;
        }
        public static get city(): string {
            return js_userInfo.city;
        }
        public static get country(): string {
            return js_userInfo.country;
        }
        public static get gender(): number {
            return js_userInfo.gender;
        }
        public static get language(): string {
            return js_userInfo.language;
        }
        public static get nickName(): string {
            return js_userInfo.nickName;
        }
        public static get province(): string {
            return js_userInfo.province;
        }
    }
}
