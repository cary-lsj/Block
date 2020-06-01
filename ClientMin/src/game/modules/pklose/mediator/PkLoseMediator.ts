
namespace game {
    /**
     * 胜利中介
     */
    export class PkLoseMediator extends MediatorBase<PkLoseView>{

        @InterestEvent(WinEvent.clickNext)
        private clickNext(e: egret.Event): void {
            $facade.removeModule(ModuleID.win);
            let portId = $userData.gamePortVO.playProId;
            if (portId < $userData.portList.portList.length) {
                $facade.dispatch(NotifyConst.gameNext);
            }
        }


    }
}