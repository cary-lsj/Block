/**
 * 日志工具类
 * @author cary
 */
namespace game.LogUtil {
    export function log(data: string) {
        let http = HttpRequest.instance;
        http.send(data, Route.log);
    }

    export function logUser(data: string) {
        let name = js_userInfo.nickName;
        let openId = GlobalInfo.account;
        LogUtil.log(`${name}，玩家：${data};openId：${openId}`);
    }

    export function enterGame() {
        LogUtil.logUser("进入游戏");
    }

    export function startGame(id: number) {
        LogUtil.logUser(`进入第${id}关`);
    }

    export function endGame(id: number) {
        LogUtil.logUser(`完成第${id}关`);
    }

    export function shareMain() {
        LogUtil.logUser(`主界面分享`);
    }

    export function shareWin() {
        LogUtil.logUser(`胜利面板分享`);
    }

    export function useKey(id: number) {
        LogUtil.logUser(`获取第${id}关提示`);
    }

    export function rankMain() {
        LogUtil.logUser(`查看主界面排行榜`);
    }

    export function rankWin(id) {
        LogUtil.logUser(`第${id}关查看排行榜`);
    }

}
