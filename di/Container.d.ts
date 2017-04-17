import { Cq } from "../references";
import ServiceProxy from "./ServiceProxy";
/**
 * a container for sharing global services and other objects like the cache.
 * Also provides access to the Java API.
 *
 * TODO add cache as a separate field instead of another object in the container.
 */
export declare class Container {
    private services;
    private cqx;
    constructor(cqx: Cq);
    /**
     * add an object to the container
     * @param name
     * @param service
     */
    register(name: string, service: any): void;
    /**
     * retrieve object from container
     * @param name
     * @returns {any}
     */
    get(name: string): any;
    /**
     *
     * @param name fully qualified java class name
     * @returns {ServiceProxy}
     */
    getOsgiService(name: string): ServiceProxy;
    /**
     * get a sling mdoel adapted from request
     * @param name fully qualified java class name
     * @returns {ServiceProxy}
     */
    getRequestModel(path: string, name: string): ServiceProxy;
    /**
     * get a sling mdoel adapted from current resource
     * @param name fully qualified java class name
     * @returns {ServiceProxy}
     */
    getResourceModel(path: string, name: string): ServiceProxy;
    private getServiceProxy(args, getter);
    private createKey(params);
}
