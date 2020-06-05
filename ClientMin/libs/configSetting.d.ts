
declare var js_gameConfig: {
    /** 游戏资源版本号路径 */
    gameVersion: string;
    /** 是否为加载云资源 */
    useCloud: boolean;
    /** 服务器地址 */
    serverUrl: string;
    /* 是否对接平台 */
    useSKD: boolean;
    /** 小游戏 */
    isLittleGame;
}

declare var js_gameVars: {
    /** 账号 */
    username: string,
    /** websocketIP */
    websocketIP: string,
    /**HTTPIP */
    httpIP: string,
    /** 端口 */
    port: number,
    /** 是否使用wss连接 */
    useWss: boolean,
    /** 服务器时间戳 */
    time: number,
    /** 游戏登陆密钥 */
    sign: string,
    /** 平台 */
    channel: string,
    /** 平台名称  如果平台名为空字串 则为测试模式 有字串就是外网模式 */
    platform: number,
};

declare var js_userInfo: {
    /**头像 */
    avatarUrl: string;
    /** 城市 */
    city: string;
    country: string;
    /**性别 */
    gender: number;
    /**语言 */
    language: string;
    /**昵称 */
    nickName: string;
    province: string;
};
