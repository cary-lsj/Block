namespace game {
    /**
     * 胜利 事件
     */
    export const enum WinEvent {
        //点击按钮
        click,
        /** 点击关闭 */
        clickClose,
        /** 点击下一关 */
        clickNext,
         /** 点击再来一次 */
        clickAgain,
         /** 点击排行榜 */
        clickRank,
        /** 播放动画 */
        playOneStar,
        /** 看广告 */
        clickAd,
    }
}