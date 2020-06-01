var game;
(function (game) {
    /**
     * 获取任意类型的单例对象
     * @author wizardc
     */
    function getSinglon(clazz) {
        var instance = clazz.__instance;
        if (!instance) {
            instance = clazz.__instance = new clazz();
        }
        return instance;
    }
    game.getSinglon = getSinglon;
})(game || (game = {}));
