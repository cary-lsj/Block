namespace game {
    /**
     * 游戏时间, 毫秒
     * @author wizardc
     */
    export class GameTime {
        private static _lastTime: number = 0;
        private static _timer: number;
        private static _deltaTime: number;

        private static _loginTime: number;
        private static _timeDif: number;

        public static get timer(): number {
            return this._timer;
        }

        public static get deltaTime(): number {
            return this._deltaTime;
        }

        public static get loginTime(): number {
            return this._loginTime;
        }

        public static get serverTime(): number {
            return Date.now() + this._timeDif;
        }

        public static tick(): void {
            this._timer = egret.getTimer();
            this._deltaTime = this._timer - this._lastTime;
            this._lastTime = this._timer;
        }

        public static setServerTime(serverTime: number): void {
            this._loginTime = serverTime;
            this._timeDif = serverTime - Date.now();
        }
    }
}
