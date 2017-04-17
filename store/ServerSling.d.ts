import Cache from "./Cache";
import { SlingResourceOptions, AbstractSling, EditDialogData } from "./Sling";
import { ResourceComponent } from "../component/ResourceComponent";
import { JavaSling } from "../references";
export default class ServerSling extends AbstractSling {
    constructor(cache: Cache, sling: JavaSling);
    private sling;
    private cache;
    subscribe(listener: ResourceComponent<any, any, any>, path: string, options?: SlingResourceOptions): void;
    renderDialogScript(path: string, resourceType: string): EditDialogData;
    includeResource(path: string, resourceType: string): string;
    getRequestPath(): string;
}
