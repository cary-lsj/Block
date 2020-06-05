namespace game {
    /**
     * 消息
     * @author cary
     */
    export const enum NotifyConst {

        //------------------------------
        // 全局
        //------------------------------

        /** 舞台尺寸变化 */
        stageResize,
        /** 屏幕方向变化 */
        orientationChanged,

        /** 上下文初始化 */
        contextInit,
        /** 游戏启动 */
        gameStartup,

        /** 模块添加 */
        moduleAdded,
        /** 模块移除 */
        moduleRemoved,

        /** 用户数据初始化 */
        userDataInit,
        /** 用户数据更新 */
        userDataUpdate,

        /** 连接断开 */
        connectBreak,
        /** 同一账号踢下线 */
        connectKick,
        /** 关卡得分星星 */
        updatePortStart,

        /** 关卡星星更新 */
        updatePortSart,

        /** 游戏开始 */
        gameStart,
        /** 排行榜数据更新 */
        rankUpdate,
        /**重新开始游戏 */
        gameAgain,
        /**下一关 */
        gameNext,
        /**提示总数修改 */
        updateKey,
        /**星星总数修改 */
        updateStar,
        /** 对战开始 */
        pkGameStart,
        /** 对战结束 */
        pkGameEnd,
        /** 对战计时 */
        updatePKTime,
        /** 更新房间数据 */
        updateRoom,
        /** 更新玩家信息 */
        updateGamer,
        /** 使用减时道具 */
        useMinusTimeTool,
        /** 对战信息更新 */
        updateGameSituation,
        /** 创建房间 */
        createroom,
        /** 自动匹配开始 */
        matchStart,
        /** 道具数量更新 */
        toolUpdate,
        /** 道具购买成功 */
        buyToolSuccess,
        /** 玩家资金更新 */
        updateUserProperty,
        /** 修改木块位置 */
        moveMoodPosition,

        /** 开放数据更新 */
        updateKTVdata,
    }
}
