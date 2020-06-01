namespace game {
    /**
     * 一个简单的命令类
     * @author wizardc
     */
    export abstract class Command extends Notifier implements ICommand {
        protected _facade: Facade = Facade.instance;

        public constructor() {
            super();
        }

        public abstract execute(notifyName: string | NotifyConst, ...args): void;
    }

    /**
     * 对于会重复使用的命令可以开启缓存, 避免频繁的创建及销毁
     */
    export function CacheCommand(constructor: Function) {
        (<any> constructor).__cacheCommand = true;
    }
}
