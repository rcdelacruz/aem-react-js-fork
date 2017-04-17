import { SlingResourceOptions, AbstractSling, EditDialogData } from "./Sling";
import Cache from "./Cache";
import { ResourceComponent } from "../component/ResourceComponent";
export interface FetchWindow {
    fetch(url: string, options: any): any;
}
/**
 * ClientSling gets all data from the cache. If the data is not available then it will get
 * the part of the cache which corresponds to the given component from the server.
 */
export default class ClientSling extends AbstractSling {
    private cache;
    private origin;
    private fetch;
    private delayInMillis;
    constructor(cache: Cache, origin: string, fetch?: FetchWindow, delayInMillis?: number);
    subscribe(listener: ResourceComponent<any, any, any>, path: string, options?: SlingResourceOptions): void;
    renderDialogScript(path: string, resourceType: string): EditDialogData;
    includeResource(path: string, resourceType: string): string;
    getRequestPath(): string;
}
