namespace game {
    /**
     * 测试中介
     */
    export class TestMediator extends MediatorBase<TestView>{
        @InjectProxy(ProxyID.test)
        public model: TestProxy;

        public onRegister(): void {
            super.onRegister();
            let data = [];
            for(let i=1;i<100;i++){
                data.push({"name":i});
            }
            this._view.refreshList(data);
        }
        @InterestEvent(TestEvent.click)
        private click(e:egret.Event):void{
            this._view.setTxt("你好");
        }
    }
}