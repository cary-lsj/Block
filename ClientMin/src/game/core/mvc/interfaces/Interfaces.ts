namespace game {
    /**
     * 消息发送对象
     * @author cary
     */
    export interface INotifier {
        dispatch(notifyName: string | NotifyConst, ...args): void;
    }

    /**
     * 观察者对象
     * @author cary
     */
    export interface IObserver {
        addListener(notifyName: string | NotifyConst, callback: Function, thisObj?: any): void;

        removeListener(notifyName: string | NotifyConst, callback: Function, thisObj?: any): void;
    }

    /**
     * 命令对象
     * @author cary
     */
    export interface ICommand {
        execute(notifyName: string | NotifyConst, ...args): void;
    }

    /**
     * 代理类
     * @author cary
     */
    export interface IProxy {
        name: string | ProxyID;

        onRegister(): void;

        onRemove(): void;
    }

    /**
     * 中介类
     * @author cary
     */
    export interface IMediator<T extends egret.DisplayObject> extends IObserver {
        view: T;

        onRegister(): void;

        onRemove(): void;
    }
}
