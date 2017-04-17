import RootComponentRegistry from "./RootComponentRegistry";
import { Container } from "./di/Container";
export interface ServerResponse {
    html: string;
    state: string;
}
export default class ServerRenderer {
    private registry;
    private container;
    constructor(registry: RootComponentRegistry, container: Container);
    renderReactComponent(path: string, resourceType: string, wcmmode: string, renderRootDialog?: boolean): ServerResponse;
}
