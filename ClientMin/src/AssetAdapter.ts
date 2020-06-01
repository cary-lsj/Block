class AssetAdapter implements eui.IAssetAdapter {
    /**
     * 解析素材
     * @param source 待解析的新素材标识符
     * @param compFunc 解析完成回调函数，示例：callBack(content:any,source:string):void;
     * @param thisObject callBack的 this 引用
     */
    public getAsset(source: string, compFunc:Function, thisObject: any): void {

        function onGetRes(data: any): void {
            compFunc.call(thisObject, data, source);
        }

        // TODO 优先级需要根据路径来判断区分一下

        if (RES.hasRes(source)) {
            let data = game.RESP.getRes(source);
            if (data) {
                onGetRes(data);
            } else {
                game.RESP.getResAsync(source, onGetRes, this, game.LoadPriority.ui);
            }
        } else {
            game.RESP.getResByUrl(source, onGetRes, this, RES.ResourceItem.TYPE_IMAGE, game.LoadPriority.ui);
        }
    }
}
