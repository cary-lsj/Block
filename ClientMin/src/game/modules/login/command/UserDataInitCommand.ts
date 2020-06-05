namespace game {
    /**
     * 用户数据初始化命令
     * @author cary
     */
    export class UserDataInitCommand extends Command {
        public execute(notifyName: string | NotifyConst, data: any): void {
            GameTime.setServerTime(data.serverTime);

        }
    }
}
