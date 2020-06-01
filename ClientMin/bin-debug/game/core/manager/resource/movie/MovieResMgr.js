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
     * 序列帧动画管理
     * @author wizardc
     */
    var MovieResMgr = (function (_super) {
        __extends(MovieResMgr, _super);
        function MovieResMgr() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this._defaultLiveTime = 10000;
            return _this;
        }
        MovieResMgr.prototype.getRes = function (url, liveTime) {
            if (isNaN(liveTime)) {
                liveTime = this._defaultLiveTime;
            }
            if (!this._resMap[url]) {
                var res = game.recyclable(game.MovieRes);
                res.init(url, liveTime);
                this._resMap[url] = res;
            }
            return this._resMap[url];
        };
        return MovieResMgr;
    }(game.ResMgrBase));
    game.MovieResMgr = MovieResMgr;
    __reflect(MovieResMgr.prototype, "game.MovieResMgr");
})(game || (game = {}));
