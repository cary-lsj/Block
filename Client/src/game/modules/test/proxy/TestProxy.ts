namespace game {
    /**
     * 测试代理
     */
    export class TestProxy extends ProxyBase {
        public constructor() {
            super(ProxyID.test);
        }
    }
}