var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var AssetAdapter = (function () {
    function AssetAdapter() {
    }
    /**
     * 解析素材
     * @param source 待解析的新素材标识符
     * @param compFunc 解析完成回调函数，示例：callBack(content:any,source:string):void;
     * @param thisObject callBack的 this 引用
     */
    AssetAdapter.prototype.getAsset = function (source, compFunc, thisObject) {
        function onGetRes(data) {
            compFunc.call(thisObject, data, source);
        }
        // TODO 优先级需要根据路径来判断区分一下
        if (RES.hasRes(source)) {
            var data = game.RESP.getRes(source);
            if (data) {
                onGetRes(data);
            }
            else {
                game.RESP.getResAsync(source, onGetRes, this, 6 /* ui */);
            }
        }
        else {
            game.RESP.getResByUrl(source, onGetRes, this, RES.ResourceItem.TYPE_IMAGE, 6 /* ui */);
        }
    };
    return AssetAdapter;
}());
__reflect(AssetAdapter.prototype, "AssetAdapter", ["eui.IAssetAdapter"]);
