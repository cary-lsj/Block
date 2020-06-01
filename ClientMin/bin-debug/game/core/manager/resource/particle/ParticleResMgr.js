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
     * 粒子资源管理
     * @author wizardc
     */
    var ParticleResMgr = (function (_super) {
        __extends(ParticleResMgr, _super);
        function ParticleResMgr() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this._defaultLiveTime = 10000;
            return _this;
        }
        ParticleResMgr.prototype.getRes = function (url, liveTime) {
            if (isNaN(liveTime)) {
                liveTime = this._defaultLiveTime;
            }
            if (!this._resMap[url]) {
                var res = game.recyclable(game.ParticleRes);
                res.init(url, liveTime);
                this._resMap[url] = res;
            }
            return this._resMap[url];
        };
        return ParticleResMgr;
    }(game.ResMgrBase));
    game.ParticleResMgr = ParticleResMgr;
    __reflect(ParticleResMgr.prototype, "game.ParticleResMgr");
})(game || (game = {}));
