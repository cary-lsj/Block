namespace game {
    /**
     * 时钟管理器接口
     * @author cary
     */
    export interface IClockManager {
        paused: boolean;
        runningRate: number;
        readonly time: number;

        addClockClient(client: IClockClient): void;
        hasClockClient(client: IClockClient): boolean;
        removeClockClient(client: IClockClient): void;
        clear(): void;
    }

    /**
     * 时钟对象接口
     * @author cary
     */
    export interface IClockClient {
        /**
         * 更新方法
         * @param passedTime 据上次更新经过的时间, 单位豪秒
         */
        update(passedTime: number): void;
    }
}
