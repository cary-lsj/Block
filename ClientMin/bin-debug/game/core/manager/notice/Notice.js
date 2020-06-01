var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 公告管理器
 */
var game;
(function (game) {
    var Notice;
    (function (Notice) {
        function init(container) {
            impl.init(container);
        }
        Notice.init = init;
        function show(msg) {
            impl.show(msg);
        }
        Notice.show = show;
        function ExcuteMsg(msg, view) {
            impl.ExcuteMsg(msg, view);
        }
        Notice.ExcuteMsg = ExcuteMsg;
        var Impl = (function () {
            function Impl() {
                this._noticeList = [];
            }
            Impl.prototype.init = function (container) {
                this._container = container;
            };
            Impl.prototype.show = function (msgs) {
                if (this._running) {
                    this._noticeList.push(msgs);
                }
                else {
                    this._running = true;
                    if (!this._view) {
                        var view = this._view = game.recyclable(game.NoticeView);
                        this._container.addChild(view);
                    }
                    this._view.init(msgs);
                }
            };
            Impl.prototype.ExcuteMsg = function (msg, view) {
                var _this = this;
                var label = view.txt_notice;
                view.bg_notice.visible = true;
                var offsetX = view.sc_marqueen.width + label.width + 110;
                view._duration = offsetX * 7;
                label.x = view.sc_marqueen.x + view.sc_marqueen.width;
                egret.Tween.get(label).to({ x: label.x - offsetX }, view._duration).wait(1000).call(function () {
                    label.x += offsetX;
                    _this._running = false;
                    label.textFlow = game.$parseHtml("");
                    if (_this._noticeList.length > 0) {
                        var temp = _this._noticeList.shift();
                        _this.show(temp);
                    }
                    else {
                        egret.Tween.removeTweens(label);
                        _this.closeNotice(view);
                    }
                }, view);
            };
            Impl.prototype.closeNotice = function (view) {
                this._running = false;
                this._view = undefined;
                view.removeSelf();
                view.onRecycle();
                view.recycle();
            };
            return Impl;
        }());
        __reflect(Impl.prototype, "Impl");
        var impl = new Impl();
    })(Notice = game.Notice || (game.Notice = {}));
})(game || (game = {}));
