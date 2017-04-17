import { EditDialogData } from "./Sling";
/**
 * This cache is used to store server side data and pass it to the client.
 */
export default class Cache {
    constructor();
    private resources;
    private scripts;
    private included;
    private serviceCalls;
    generateServiceCacheKey(service: string, method: string, args: any[]): string;
    wrapServiceCall<T>(cacheKey: string, callback: () => T): T;
    mergeCache(cache: any): void;
    put(path: string, resource: any, depth?: number): void;
    get(path: string, depth?: number): void;
    putServiceCall(key: string, serviceCall: any): void;
    getServiceCall(key: string): any;
    putScript(path: string, script: EditDialogData): void;
    getScript(path: string): EditDialogData;
    putIncluded(path: string, included: string): void;
    getIncluded(path: string): string;
    getFullState(): any;
    clear(): void;
    private merge(target, source);
    private normalizeDepth(depth?);
    private getProperty(data, path);
}
