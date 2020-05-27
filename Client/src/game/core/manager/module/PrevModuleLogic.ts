namespace game {
    /**
     * 模块返回逻辑
     * @author wizardc
     */
    export class PrevModuleLogic {
        private static _prevMap: {[moduleID: number]: ModuleVO} = {};

        /**
         * 记录要返回的上一个模块
         */
        public static record(moduleID: ModuleID, moduleVO: ModuleVO): void {
            this._prevMap[moduleID] = moduleVO;
        }

        /**
         * 返回上一个模块
         */
        public static back(moduleID: ModuleID): boolean {
            let prevMap = this._prevMap;
            if (prevMap[moduleID]) {
                let value = prevMap[moduleID];
                delete prevMap[moduleID];
                $facade.addModule(value.prevModuleID, prevMap[value.prevModuleID], ...value.prevModuleData);
                return true;
            }
            return false;
        }

        /**
         * 清除
         */
        public static clear(moduleID: ModuleID): void {
            delete this._prevMap[moduleID];
        }
    }
}
