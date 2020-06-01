namespace game {
    /**
     * 对话框接口
     * @author wizardc
     */
    export interface IDialog extends egret.DisplayObject, IModuleView {
        readonly modal: boolean;
        readonly tapMaskClose: boolean;
        readonly hiding: boolean;
    }
}
