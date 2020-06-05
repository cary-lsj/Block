namespace game {
    /**
     * 视图初始化
     * @author cary
     */
    export class InitView extends Command {
        public execute(notifyName: string): void {
            ViewManager.instance.contextView = $stage;

            let registerMediator = $facade.registerMediator.bind($facade);

            let registerModule = <T extends egret.DisplayObject & IModuleView>(moduleID: ModuleID, viewClass: { new(): T }, mediatorClass: { new(): IMediator<T> }) => {
                registerMediator(viewClass, mediatorClass);
                ModuleManager.mapModule(moduleID, viewClass);
            };
            registerMediator(GameView, GameMediator);
            registerModule(ModuleID.scene, SceneView, SceneMediator);
            registerModule(ModuleID.test, TestView, TestMediator);
            registerModule(ModuleID.menu, MenuFullWindow, MenuMediator);
            registerModule(ModuleID.main, MainFullWindow, MainMediator);
            registerModule(ModuleID.port, PortFullWindow, PortMediator);
            registerMediator(SetView, SetMediator);
            registerModule(ModuleID.win, WinDialog, WinMediator);
            registerModule(ModuleID.rank, RankDialog, RankMediator);
            registerModule(ModuleID.humor, HumorDialog, HumorMediator);
            registerModule(ModuleID.ad, AdDialog, AdMediator);
            registerModule(ModuleID.room, RoomFullWindow, RoomMediator);
            registerModule(ModuleID.pkmain, PKMainFullWindow, PKMainMediator);
            registerModule(ModuleID.pkwin, PKWinFullWindow, PKWinMediator);
            registerModule(ModuleID.pklose, PkLoseView, PkLoseMediator);
            registerModule(ModuleID.shop, ShopView, ShopMediator);
            registerModule(ModuleID.tool, ToolView, ToolMediator);
            registerModule(ModuleID.login, LoginFullWindow, LoginMediator);
            registerModule(ModuleID.msg, MsgDialog, MsgMediator);
        }
    }
}
