import Cache from "../store/Cache";
/**
 * this class is a proxy that wraps java object of type JsProxy. The  proxy
 * put all calls into the cache.
 */
export default class ServiceProxy {
    constructor(cache: Cache, locator: () => any, name: string);
    private cache;
    private name;
    private locator;
    /**
     * call a method on the proxied object. returns the cached value if available.
     *
     * @param name of java method to call
     * @param args to java method
     * @returns {any}
     */
    invoke(method: string, ...args: any[]): any;
}
