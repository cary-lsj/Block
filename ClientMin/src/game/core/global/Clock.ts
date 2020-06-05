namespace game {
    /**
     * 游戏时钟
     * @author cary
     */
    export class Clock {
        private static _instance: Clock;

        public static get instance(): Clock {
            return Clock._instance || (Clock._instance = new Clock());
        }

        private _commonClock: IClockManager;
        private _fightClock: IClockManager;

        private constructor() {
            this._commonClock = new ClockManagerImpl();
            this._fightClock = new ClockManagerImpl();
        }

        /**
         * 通用时钟
         */
        public get commonClock(): IClockManager {
            return this._commonClock;
        }

        /**
         * 战斗时钟
         */
        public get fightClock(): IClockManager {
            return this._fightClock;
        }
    }
}
