namespace game {
    /**
     * 游戏开始预加载
     * @author wizardc
     */
    export class GamePreloadCommand extends Command implements RES.PromiseTaskReporter {
        @InjectProxy(ProxyID.login)
        public model: LoginProxy;

        public execute(notifyName: string | NotifyConst): void {
            ResourceManager.instance;

            $stage.addChild(new GameView());

            this.load().then(() => {

                if (RELEASE) {
                    this.model.reqLogin();
                } else {
                    $facade.addModule(ModuleID.login);
                }

                $facade.addModule(ModuleID.scene);

            });
        }

        private async load(): Promise<void> {
            try {
                if (js_gameConfig.isRelease) {
                    await RES.loadConfig("default.res.json", js_gameConfig.gameVersion + "/resource/");
                } else {
                    await RES.loadConfig("resource/default.res.json", "resource/");
                }

                await this.loadTheme();
                await RES.loadGroup("preload", 0, this);
                let mapinfo = RESP.getRes("mapinfo_json");
                ConfigManager.init(mapinfo);
                this.initPort(mapinfo);
                // let PKmapinfo = RESP.getRes("pkmapinfo_json");
                // ConfigManager.init(PKmapinfo);
                // this.initPKPort(PKmapinfo);
                // $stage.removeChild(loadingView);

                // let userInfo = await platform.getUserInfo();
                // GlobalInfo.initUserinfo(userInfo);

                let account = await platform.login();
                GlobalInfo.initAccount(account);
            } catch (error) {
                console.error(error);
            }
        }

        private initPort(mapinfo: any): void {
            let portList: PortListVO = $userData.portList = new PortListVO();
            portList.portList = [];
            portList.updateList(mapinfo["port"]);
            // portList.updateList(mapinfo["port"]["normal"]);
            // let portPKList: PortListVO = $userData.portPKList = new PortListVO();
            // portPKList.portList = [];
            // portPKList.updateList(mapinfo["pk"]);
        }

        private initPKPort(pkmapinfo: any): void {
            let portPKList: PortListVO = $userData.portPKList = new PortListVO();
            portPKList.portList = [];
            portPKList.updateList(pkmapinfo["port"]);
        }

        public onProgress(current: number, total: number): void {
            if (DEBUG) {
                console.log("加载进度: " + current + "/" + total);
            }
        }

        private loadTheme(): Promise<void> {
            return new Promise<void>((resolve, reject) => {
                removeEventListener
                let theme = new eui.Theme("resource/default.thm.json", $stage);
                theme.addEventListener(eui.UIEvent.COMPLETE, () => {
                    resolve();
                }, this);
            });
        }
    }
}
