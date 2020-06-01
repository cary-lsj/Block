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
     * 公告视图
     *
     */
    var NoticeView = (function (_super) {
        __extends(NoticeView, _super);
        function NoticeView() {
            var _this = _super.call(this) || this;
            _this.horizontalCenter = 0;
            _this.top = 230;
            return _this;
        }
        NoticeView.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
            this.bg_notice.visible = false;
        };
        NoticeView.prototype.init = function (content) {
            this._notice = content;
            this.invalidateProperties();
        };
        NoticeView.prototype.commitProperties = function () {
            _super.prototype.commitProperties.call(this);
            this.txt_notice.textFlow = game.$parseHtml(this._notice);
            game.Notice.ExcuteMsg(this._notice, this);
        };
        NoticeView.prototype.dispose = function () {
            this._notice = undefined;
            this.bg_notice.visible = false;
        };
        NoticeView.prototype.onRecycle = function () {
            this.dispose();
        };
        return NoticeView;
    }(eui.Component));
    game.NoticeView = NoticeView;
    __reflect(NoticeView.prototype, "game.NoticeView", ["game.ICacheable", "game.IDispose"]);
})(game || (game = {}));
