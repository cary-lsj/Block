namespace game {
    /**
     * 游戏断线
     * @author wizardc
     */
    export class ConnectBreakCommand extends Command {
        @InjectProxy(ProxyID.login)
        public model: LoginProxy;

        public execute(notifyName: string | NotifyConst): void {
            switch (notifyName) {
                case NotifyConst.connectBreak:
                    // Alert.show($lang(Lang.common_connectBreak_title), $lang(Lang.common_connectBreak_content), true, false, $lang(Lang.common_connectBreak_btn), this.onReconnect, this);
                    break;
                case NotifyConst.connectKick:
                    // Alert.show($lang(Lang.common_connectKick_title), $lang(Lang.common_connectKick_content), true, false, $lang(Lang.common_connectKick_btn), this.onReconnect, this);
                    break;
            }
        }

        private onReconnect(): void {
            // this.model.connectServer(ExternalParams.websocketIP, ExternalParams.websocketPort);
        }
    }
}
