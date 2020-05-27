namespace game {
    /**
     * 入口类
     * @author wizardc
     */
    export class GameApp extends egret.DisplayObjectContainer {
        public constructor() {
            super();

            this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        }

        private onAddToStage(event: egret.Event): void {
            this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);

            Global.init(this.stage);
            if (!egret.Capabilities.isMobile) {
            }

            egret.ImageLoader.crossOrigin = "anonymous";
            egret.TextField.default_fontFamily = "SimHei";

            egret.registerImplementation("eui.IAssetAdapter", new AssetAdapter());
            egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());

            let maxLoading = 2;
            RES.setMaxLoadingThread(maxLoading);
            RESP.setMaxLoadingThread(maxLoading);

            SoundManager.getInstance();

            $facade.registerCommand(NotifyConst.contextInit, ContextInitCommand);
            $facade.dispatch(NotifyConst.contextInit);
        }
    }
}
