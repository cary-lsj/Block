namespace game {
    /**
     * 关卡 事件
     */
    export const enum RoomEvent {
        //点击按钮
        click,
         /** 点击开始 */
        clickStart,
        /** 点击返回 */
        clickBack,
        /** 邀请好友 */
        clickInvite,
        /** 创建邀请房间 */
        clickCreateRoom,
        /** 创建匹配房间 */
        clickMatching,
        /** 加入 */
        clickJionRoom,
        /** 开始游戏 */
        clickStarGame,
    }
}