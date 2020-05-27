namespace game {
    /**
     * 加载状态
     * @author wizardc
     */
    export const enum LoadStatus {
        /** 尚未加载 */
        noload,
        /** 加载中 */
        loading,
        /** 已加载 */
        loaded,
        /** 已销毁 */
        destroy,
    }
}
