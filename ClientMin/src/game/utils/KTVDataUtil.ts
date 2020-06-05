/**
 * 微信开放数据工具类
 * @author cary
 */
namespace game.KTVDataUtil {

    export function updateData() {
        var data = {
            port: $userData.portList.port
        }
        platform.setKVData(data);
    }
}
