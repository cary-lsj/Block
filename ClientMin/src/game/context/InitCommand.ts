namespace game {
    /**
     * 命令初始化
     * @author wizardc
     */
    export class InitCommand extends Command {
        public execute(notifyName: string): void {
            let registerCommand = $facade.registerCommand.bind($facade);

            registerCommand(NotifyConst.gameStartup, GameStartupCommand);
        }
    }
}
