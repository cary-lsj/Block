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
     * 商店界面
     */
    var ShopView = (function (_super) {
        __extends(ShopView, _super);
        function ShopView() {
            var _this = _super.call(this, "gameSkin.ShopSkin") || this;
            _this._SetMealCFG = game.$singlon(game.SetMealCFG);
            _this._toolListData = new eui.ArrayCollection();
            _this._diamondListData = new eui.ArrayCollection();
            return _this;
        }
        ShopView.prototype.createComponent = function () {
            return undefined;
        };
        ShopView.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
            this.tool_list.dataProvider = this._toolListData;
            this.tool_list.itemRenderer = game.ShopItem;
            this.diamond_list.dataProvider = this._diamondListData;
            this.diamond_list.itemRenderer = game.DiamondItem;
            this.btn_back.on(egret.TouchEvent.TOUCH_TAP, this.onBackClick, this);
            this.sc_group.on(eui.UIEvent.CHANGE_START, this.onStartMove, this);
            this.sc_group.on(eui.UIEvent.CHANGE_END, this.onEndMove, this);
            this.btn_ToolBuy.on(egret.TouchEvent.TOUCH_TAP, this.onBuyToolClick, this);
            this.btn_diamondBuy.on(egret.TouchEvent.TOUCH_TAP, this.onBuyDiamondClick, this);
            this.tool_list.on(eui.ItemTapEvent.ITEM_TAP, this.onChecked, this);
            this.diamond_list.on(eui.ItemTapEvent.ITEM_TAP, this.onDiamondChecked, this);
        };
        ShopView.prototype.onBackClick = function (e) {
            this.dispatch(3 /* clickBack */, true);
        };
        ShopView.prototype.onBuyToolClick = function (e) {
            this.dispatch(1 /* clickToolBuy */, true);
        };
        ShopView.prototype.onBuyDiamondClick = function (e) {
            this.dispatch(2 /* clickDiamondBuy */, true);
        };
        ShopView.prototype.onStartMove = function (e) {
            this.offsetXStart = this.sc_group.viewport.scrollH;
        };
        ShopView.prototype.onEndMove = function (e) {
            this.offsetXEnd = this.sc_group.viewport.scrollH;
            var isRtoL = this.isRtoL(this.offsetXStart, this.offsetXEnd);
            if (isRtoL) {
                if (this.offsetXEnd <= this.group_tool.width / 2)
                    egret.Tween.get(this.sc_group.viewport).to({ scrollH: 0, }, 500, egret.Ease.backInOut).call(this.showToolTitle, this);
                else
                    egret.Tween.get(this.sc_group.viewport).to({ scrollH: this.group_tool.width, }, 500, egret.Ease.backInOut).call(this.showDiamondTitle, this);
            }
            else {
                if (this.offsetXEnd <= this.group_tool.width / 2)
                    egret.Tween.get(this.sc_group.viewport).to({ scrollH: 0, }, 500, egret.Ease.backInOut).call(this.showToolTitle, this);
                else
                    egret.Tween.get(this.sc_group.viewport).to({ scrollH: this.group_tool.width, }, 500, egret.Ease.backInOut).call(this.showDiamondTitle, this);
            }
        };
        ShopView.prototype.isRtoL = function (start, end) {
            if (start <= end)
                return false;
            return true;
        };
        ShopView.prototype.showToolTitle = function () {
            console.log('showToolTitle');
            this.Tool_title.visible = true;
            this.Diamond_title.visible = false;
        };
        ShopView.prototype.showDiamondTitle = function () {
            console.log('showDiamondTitle');
            this.Tool_title.visible = false;
            this.Diamond_title.visible = true;
        };
        ShopView.prototype.getListData = function () {
            this.Tool_title.visible = true;
            this.isToolCheckedFlage = false;
            this.isDiamondCheckedFlage = false;
            var data = this._SetMealCFG.getAllSetMealCFG();
            var thisLength = this._SetMealCFG.getSetMealLength();
            var dataArr = [];
            for (var i = 0; i < thisLength; i++) {
                data[i]['check'] = false;
                dataArr.push(data[i]);
            }
            this.updateToolListData(dataArr);
            var diamondData = this._SetMealCFG.getAllDiamondCFG();
            var thisDiamondLength = this._SetMealCFG.getDiamondLength();
            var diamondDataArr = [];
            for (var i = 0; i < thisDiamondLength; i++) {
                diamondData[i]['check'] = false;
                diamondDataArr.push(diamondData[i]);
            }
            this.updateDiamondListData(diamondDataArr);
        };
        ShopView.prototype.updateToolListData = function (data) {
            this._toolListData.source = data;
            this._toolListData.refresh();
        };
        ShopView.prototype.updateDiamondListData = function (data) {
            this._diamondListData.source = data;
            this._diamondListData.refresh();
        };
        ShopView.prototype.onChecked = function (e) {
            this.isToolCheckedFlage = true;
            var index = e.itemIndex;
            var data = this._toolListData.source;
            for (var i = 0; i < data.length; i++) {
                data[i]['check'] = false;
            }
            data[index]['check'] = true;
            this.updateToolListData(data);
            if (data[index]['gold'] === 0) {
                this.total_money.text = data[index]['money'];
                this.flage_gold.visible = false;
                this.flage_money.visible = true;
            }
            else {
                this.total_money.text = data[index]['gold'];
                this.flage_money.visible = false;
                this.flage_gold.visible = true;
            }
            this._toolBuyIndex = index;
        };
        ShopView.prototype.onDiamondChecked = function (e) {
            this.isDiamondCheckedFlage = true;
            var index = e.itemIndex;
            var data = this._diamondListData.source;
            for (var i = 0; i < data.length; i++) {
                data[i]['check'] = false;
            }
            data[index]['check'] = true;
            this.updateDiamondListData(data);
            this._diamondBuyIndex = index;
        };
        return ShopView;
    }(game.FullWindowBase));
    game.ShopView = ShopView;
    __reflect(ShopView.prototype, "game.ShopView");
})(game || (game = {}));
