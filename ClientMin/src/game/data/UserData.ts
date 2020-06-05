namespace game {
    /**
     * 用户数据管理类
     * @author cary
     */
    export class UserData {
        private static _instance: UserData;

        public static get instance(): UserData {
            return UserData._instance || (UserData._instance = new UserData());
        }
        /** 用户 */
        public playerVO: PlayerVO;
        /** 所有关卡列表 */
        public portList: PortListVO;
        /**当前游戏关卡数据 */
        public gamePortVO: GamePortVO;
        /** 账号信息 */
        public account: AccountVO;
        /** 排行信息 */
        public rankListVO: RankListVo;
        /** 对战关卡列表 */
        public portPKList: PortListVO;
        /** 对战房间 */
        public pkRoomVO: RoomVO;

        private constructor() {
            this.playerVO = new PlayerVO();
            this.portList = new PortListVO();
            this.gamePortVO = new GamePortVO();
            this.account = new AccountVO()
        }
    }
}
