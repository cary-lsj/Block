namespace game {
    /**
     * 上下文初始化
     * @author wizardc
     */
    export class ContextInitCommand extends CommandQueue {
        protected initializeCommands(): void {
            $facade.removeCommand(NotifyConst.contextInit);

            this.addSubCommand(InitCommand);
            this.addSubCommand(InitModel);
            this.addSubCommand(InitView);
            this.addSubCommand(GamePreloadCommand);
        }
    }
}
