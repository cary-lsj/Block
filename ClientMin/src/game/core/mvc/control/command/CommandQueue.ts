namespace game {
    /**
     * 多个命令顺序执行的命令列表类
     * @author wizardc
     */
    export abstract class CommandQueue extends Command {
        protected _subCommands: {new(): ICommand}[];

        public constructor() {
            super();
            this._subCommands = [];
            this.initializeCommands();
        }

        protected abstract initializeCommands(): void;

        protected addSubCommand(commandClass: {new(): ICommand}): void {
            this._subCommands.push(commandClass);
        }

        public execute(notifyName: string | NotifyConst, ...args): void {
            while (this._subCommands.length != 0) {
                let commandClass = this._subCommands.shift();
                if ((<any> commandClass.prototype.constructor).__cacheCommand) {
                    let commandInstance = recyclable(commandClass);
                    commandInstance.execute(notifyName, ...args);
                    commandInstance.recycle();
                } else {
                    let commandInstance = new commandClass();
                    commandInstance.execute(notifyName, ...args);
                }
            }
        }
    }
}
