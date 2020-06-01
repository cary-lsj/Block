namespace game {
    /**
     * 模型初始化
     * @author wizardc
     */
    export class InitModel extends Command {
        public execute(notifyName: string): void {
            let registerProxy = $facade.registerProxy.bind($facade);

            registerProxy(new TestProxy());
            registerProxy(new LoginProxy());
            registerProxy(new PortProxy());
            registerProxy(new RankProxy());
            registerProxy(new WinProxy());
            registerProxy(new MainProxy());
            registerProxy(new RoomProxy());
            registerProxy(new MenuProxy());
            registerProxy(new PkMainproxy());
            registerProxy(new ShopProxy());
            registerProxy(new PKWinproxy());
        }
    }
}
