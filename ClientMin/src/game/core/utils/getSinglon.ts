namespace game {
    /**
     * 获取任意类型的单例对象
     * @author cary
     */
    export function getSinglon<T>(clazz: { new(): T, __instance?: T }): T {
        let instance = clazz.__instance;
        if (!instance) {
            instance = clazz.__instance = new clazz();
        }
        return instance;
    }
}
