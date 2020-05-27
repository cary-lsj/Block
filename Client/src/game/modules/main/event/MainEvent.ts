namespace game {
    /**
     * 测试 事件
     */
    export const enum MainEvent {
        //点击按钮
        click,
        /** 放置方块 */
        addMood,
        /** 移除方块 */
        removeMood,
        /** 刷新 */
        clickRefresh,
        /** 开始界面 */
        clickMenu,
        /**生成木块 */
        generateMood,
        /**按下木块 */
        beginMood,
        /**松开木块 */
        endMood,
        /**点击钥匙（提示） */
        clickKey,
        /**初始化木块行列坐标 */
        initPos,
        /**清除提示 */
        removeKeymood,
        /**恢复木块层级 */
        rechildindex
    }
}