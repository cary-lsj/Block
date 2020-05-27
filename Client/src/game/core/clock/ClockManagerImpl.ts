namespace game {
    /**
     * 时钟管理器
     * @author wizardc
     */
    export class ClockManagerImpl implements IClockManager {
        private _initialized: boolean = false;

        private _paused: boolean = false;
        private _runningRate: number = 1;

        private _lastTime: number = 0;

        private _clientList: IClockClient[];

        public set paused(value: boolean) {
            this._paused = value;
        }
        public get paused(): boolean {
            return this._paused;
        }

        public set runningRate(value: number) {
            if (value < 0 || isNaN(value)) {
                value = 0;
            }
            this._runningRate = value;
        }
        public get runningRate(): number {
            return this._runningRate;
        }

        public get time(): number {
            return this._lastTime;
        }

        public addClockClient(client: IClockClient): void {
            if (!this._initialized) {
                this.initialize();
                this._initialized = true;
            }
            if (client && this._clientList.indexOf(client) == -1) {
                this._clientList.push(client);
            }
        }

        protected initialize(): void {
            this._lastTime = egret.getTimer();
            this._clientList = [];
            egret.startTick(this.update, this);
        }

        protected update(timeStamp: number): boolean {
            if (this._paused) {
                return;
            }
            let passedTime = timeStamp - this._lastTime;
            this._lastTime = timeStamp;
            let length = this._clientList.length;
            if (length == 0) {
                return;
            }
            passedTime *= this._runningRate;
            let currentIndex = 0;
            for (var i = 0; i < length; i++) {
                let client = this._clientList[i];
                if (client) {
                    if (currentIndex != i) {
                        this._clientList[currentIndex] = client;
                        this._clientList[i] = undefined;
                    }
                    client.update(passedTime);
                    currentIndex++;
                }
            }
            if (currentIndex != i) {
                length = this._clientList.length;
                while (i < length) {
                    this._clientList[currentIndex++] = this._clientList[i++];
                }
                this._clientList.length = currentIndex;
            }
            return false;
        }

        public hasClockClient(client: IClockClient): boolean {
            return this._clientList.indexOf(client) != -1;
        }

        public removeClockClient(client: IClockClient): void {
            let index = this._clientList.indexOf(client);
            if (index != -1) {
                this._clientList[index] = undefined;
            }
        }

        public clear(): void {
            this._clientList.length = 0;
        }
    }
}
