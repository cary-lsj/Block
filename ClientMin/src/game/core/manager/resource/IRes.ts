namespace game {
    /**
     * 资源接口
     * @author cary
     */
    export interface IRes extends IDestroy {
        readonly url: string;
        readonly status: LoadStatus;
        readonly usingCount: number;
        readonly lastUseTime: number;
        readonly liveTime: number;

        addUsing(): void;
        subtractUsing(): void;
    }
}
