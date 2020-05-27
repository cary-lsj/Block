namespace game {
    /**
     * 加载优先级
     * @author wizardc
     */
    export const enum LoadPriority {
        /** 未知类型 */
        unknown,
        /** 音乐 */
        sound,
        /** 特效 */
        effect,
        /** 背景地图 */
        map,
        /** 图标 */
        icon,
        /** 角色 */
        avatar,
        /** UI界面 */
        ui,
        /** 地图预览小图 */
        miniMap,
    }
}
