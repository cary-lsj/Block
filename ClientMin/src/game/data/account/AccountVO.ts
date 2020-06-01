namespace game {
    /**
     * 账号数据
     * @author wizardc
     */
    export class AccountVO {
        /** 玩家用户名 */
        public username: string;
        /** 玩家ID */
        public userid: string;
        /** 账号ID, 同一个用户下不同的服务器会有不同的账号ID */
        public accountID: number;
        /** 用户昵称 */
        public nickname: string;
        /** 服务器ID */
        public serverID: number;
        /** 平台 */
        public platform: string;
        /** 性别 */
        public gender: number;
        /** 头像 */
        public avatarUrl: string;

    }
}
