namespace game {
    /**
     * 关卡状态
     * @author wizardc
     */
    export const enum PortType {
        /** 未解锁 */
        lock = 0,
        /** 已解锁 */
        unlocked,
        /** 已通关 */
        clearance,
    }
}
