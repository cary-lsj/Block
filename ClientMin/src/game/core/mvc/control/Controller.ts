namespace game {
    /**
     * 控制者
     * @author wizardc
     */
    export class Controller {
        private static _instance: Controller;

        public static get instance(): Controller {
            return Controller._instance || (Controller._instance = new Controller());
        }

        private _commandMap: {[k: string]: {new(): ICommand}[]};

        private constructor() {
            this._commandMap = {};
        }

        public registerCommand(notifyName: string | NotifyConst, commandClass: {new(): ICommand}): void {
            let n = String(notifyName);
            if (n && commandClass) {
                if (!this.hasCommand(n)) {
                    this._commandMap[n] = [];
                }
                let list = this._commandMap[n];
                if (list.indexOf(commandClass) == -1) {
                    list.push(commandClass);
                }
            }
        }

        public hasCommand(notifyName: string | NotifyConst): boolean {
            return this._commandMap.hasOwnProperty(String(notifyName));
        }

        public removeCommand(notifyName: string | NotifyConst): void {
            let n = String(notifyName);
            if (n && this.hasCommand(n)) {
                delete this._commandMap[n];
            }
        }

        public executeCommand(notifyName: string | NotifyConst, ...args): void {
            let n = String(notifyName);
            if (this.hasCommand(n)) {
                let list = this._commandMap[n];
                for (let key in list) {
                    let commandClass = list[key];
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
}
