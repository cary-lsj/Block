namespace game {
    /**
     * 游戏代理
     * @author cary
     */
    export class GameProxy extends ProxyBase {
        public constructor() {
            super(ProxyID.login);
        }
    }
}
