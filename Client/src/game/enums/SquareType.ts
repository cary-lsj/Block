namespace game {
    /**
     * 地图中方块的类型
     * @author wizardc
     */
    export const enum SquareType {
        /** 超出 */
        beyond = 0,
        /** 有方块 */
        full = 1,
        /** 障碍物 */
        obstacles,
        /** 空的 */
        null,

    }
}
