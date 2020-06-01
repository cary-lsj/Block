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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var game;
(function (game) {
    /**
     * 测试中介
     */
    var TestMediator = (function (_super) {
        __extends(TestMediator, _super);
        function TestMediator() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        TestMediator.prototype.onRegister = function () {
            _super.prototype.onRegister.call(this);
            var data = [];
            for (var i = 1; i < 100; i++) {
                data.push({ "name": i });
            }
            this._view.refreshList(data);
        };
        TestMediator.prototype.click = function (e) {
            this._view.setTxt("你好");
        };
        __decorate([
            game.InjectProxy(0 /* test */)
        ], TestMediator.prototype, "model", void 0);
        __decorate([
            game.InterestEvent(0 /* click */)
        ], TestMediator.prototype, "click", null);
        return TestMediator;
    }(game.MediatorBase));
    game.TestMediator = TestMediator;
    __reflect(TestMediator.prototype, "game.TestMediator");
})(game || (game = {}));
