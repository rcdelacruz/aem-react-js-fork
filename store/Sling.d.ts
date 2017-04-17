import { ResourceComponent } from "../component/ResourceComponent";
export interface SlingResourceOptions {
    depth?: number;
}
export interface EditDialogData {
    element: string;
    html?: string;
    attributes?: {
        [name: string]: any;
    };
    child?: EditDialogData;
}
/**
 * interface that provides standard aem featres for the resource components.
 */
export interface Sling {
    /**
     * Request a resource.
     * @param listener the component that needs the resource
     * @param path resource path
     * @param options options like level depth of resource tree
     */
    subscribe(listener: ResourceComponent<any, any, any>, path: string, options?: SlingResourceOptions): void;
    /**
     * get the aem wrapper element for the component of the given resourceType at the given resource path.
     * @param path
     * @param resourceType
     */
    renderDialogScript(path: string, resourceType: string): EditDialogData;
    /**
     * Include a component's html.
     * @param path
     * @param resourceType
     */
    includeResource(path: string, resourceType: string): string;
    getRequestPath(): string;
    getContainingPagePath(): string;
}
export declare abstract class AbstractSling implements Sling {
    abstract subscribe(listener: ResourceComponent<any, any, any>, path: string, options?: SlingResourceOptions): void;
    abstract renderDialogScript(path: string, resourceType: string): EditDialogData;
    abstract includeResource(path: string, resourceType: string): string;
    abstract getRequestPath(): string;
    getContainingPagePath(): string;
}
