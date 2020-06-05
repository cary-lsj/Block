namespace game {
    /**
     * 登录 中介
     */
    export class LoginMediator extends MediatorBase<LoginFullWindow>{
        @InjectProxy(ProxyID.login)
        public model: LoginProxy;

        public onRegister(): void {
            super.onRegister();
            this._view._initView();
        }

        @InterestEvent(LoginEvent.clickLogin)
        private clickLogin(e: egret.Event): void {
            let id = this._view.text_username.text;
            if (id === '') {
                $facade.addModule(ModuleID.msg, undefined, '请输入登录信息');
                return;
            }
            // $userData.account.userid = id;
            GlobalInfo.initAccount(id);
            this.model.reqLogin();
        }

    }
}