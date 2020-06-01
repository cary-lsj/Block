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
     * 动画资源管理
     * @author wizardc
     */
    var AnimationResMgr = (function (_super) {
        __extends(AnimationResMgr, _super);
        function AnimationResMgr() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this._defaultLiveTime = 10000;
            return _this;
        }
        AnimationResMgr.prototype.getRes = function (url, liveTime) {
            if (isNaN(liveTime)) {
                liveTime = this._defaultLiveTime;
            }
            if (!this._resMap[url]) {
                var res = game.recyclable(game.AnimationRes);
                res.init(url, liveTime);
                this._resMap[url] = res;
            }
            return this._resMap[url];
        };
        return AnimationResMgr;
    }(game.ResMgrBase));
    game.AnimationResMgr = AnimationResMgr;
    __reflect(AnimationResMgr.prototype, "game.AnimationResMgr");
})(game || (game = {}));
