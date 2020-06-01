namespace game {
    import Container = egret.DisplayObjectContainer;
    import Group = eui.Group;

    /**
     * 模块中介类接口
     * 执行顺序: onRegister -> setTabData -> setModuleData
     * @author wizardc
     */
    export interface IModuleMediator {
        /**
         * 如果是模块的中介类，在发送 $facade.addModule 事件时 ModuleVO 附带了 tabData 时即会调用该方法并传递 tabData 的参数
         */
        setTabData?: (...data) => void;

        /**
         * 如果是模块的中介类, 在发送 $facade.addModule 事件时即会调用该方法, 无论是否带有传递的参数
         */
        setModuleData?: (...data) => void;
    }

    /**
     * 模块容器接口
     * @author wizardc
     */
    export interface IModuleContainer {
        /** 场景层 */
        readonly sceneLayer: Container;

        /** 天气层 */
        readonly weatherLayer: Group;

        /** 底部层 */
        readonly bottomLayer: Group;

        /** 底部 UI 层 */
        readonly bottomUILayer: Group;

        /** 全屏窗口层 */
        readonly fullWindowLayer: Group;

        /** 主界面 UI 层 */
        readonly mainUILayer: Group;

        /** 对话窗口层 */
        readonly dialogLayer: Group;

        /** 弹出层 */
        readonly popLayer: Group;

        /** 警报框层 */
        readonly alertLayer: Group;

        /** 引导层 */
        readonly guideLayer: Group;

        /** 消息层 */
        readonly messageLayer: Group;

        /** 最顶层 */
        readonly topLayer: Group;
    }

    /**
     * 模块视图接口
     */
    export interface IModuleView {
        readonly layer: ModuleLayer;
    }

    /**
     * 模块 VO
     */
    export interface ModuleVO {
        prevModuleID?: ModuleID;
        prevTabData?: any[];
        prevModuleData?: any[];
        tabData?: any[];
    }

    /**
     * 注入需要释放的 UI 资源组名称, 只能在实现 IModuleView 接口的类上使用
     */
    export function ReleaseRes(policy: ModuleResPolicy, ...resNames: string[]) {
        return function (constructor: Function) {
            (<any> constructor).__resPolicy = policy;
            if (resNames && resNames.length > 0) {
                let list = (<any> constructor).__releaseResList;
                if (!list) {
                    (<any> constructor).__releaseResList = list = [];
                }
                for (let resName of resNames) {
                    if (list.indexOf(resName) == -1) {
                        list.push(resName);
                    }
                }
            }
        };
    }
}
