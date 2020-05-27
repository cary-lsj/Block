namespace game {
    /**
     * 关卡代理
     */
    export class PortProxy extends ProxyBase {
        private _timeoutID: number;

        public constructor() {
            super(ProxyID.port);
        }
    }
}
