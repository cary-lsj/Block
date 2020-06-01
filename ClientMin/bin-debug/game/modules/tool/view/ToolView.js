var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var game;
(function (game) {
    /**
     * 设置 界面弹窗
     */
    var ToolView = (function (_super) {
        __extends(ToolView, _super);
        function ToolView() {
            var _this = _super.call(this, "gameSkin.ToolSkin") || this;
            _this._listData = new eui.ArrayCollection();
            return _this;
        }
        ToolView.prototype.createComponent = function () {
            return undefined;
        };
        ToolView.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
            this.gamerHead_list.dataProvider = this._listData;
            this.gamerHead_list.itemRenderer = game.GamerHeadItem;
            this.gamerHead_list.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onItemTapHandler, this);
            this.btn_tool.on(egret.TouchEvent.TOUCH_TAP, this.onRemove, this);
        };
        ToolView.prototype.onToolClick = function () {
            game.SoundManager.getInstance().PlaySound(game.SoundManager.mClickAudioUrl);
            if (this.grp_tool.visible) {
                this.grp_tool.visible = false;
            }
            else {
                this.grp_tool.visible = true;
            }
        };
        ToolView.prototype.showGamerInfo = function () {
            var dataInfo = [];
            var data = game.$userData.pkRoomVO.gamerList;
            for (var i = 0; i < data.length; i++) {
                var id = game.$userData.account.userid;
                if (data[i].sID !== id.toString())
                    dataInfo.push(data[i]);
            }
            console.log(dataInfo);
            this._listData.source = dataInfo;
            this._listData.refresh();
            this.reduceTime_num.text = game.$userData.playerVO.toolMap[1].count.toString();
        };
        ToolView.prototype.onItemTapHandler = function (e) {
            var index = e.itemIndex;
            var opponentID = this._listData.source[index].sID;
            game.$userData.pkRoomVO.opponentID = opponentID;
            game.$userData.pkRoomVO.toolID = 1;
            game.$facade.removeModule(game.ModuleID.tool);
            game.$facade.dispatch(23 /* useMinusTimeTool */);
        };
        ToolView.prototype.onRemove = function () {
            game.$facade.removeModule(game.ModuleID.tool);
        };
        return ToolView;
    }(game.DialogBase));
    game.ToolView = ToolView;
    __reflect(ToolView.prototype, "game.ToolView");
})(game || (game = {}));
