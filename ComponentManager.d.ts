import * as React from "react";
import RootComponentRegistry from "./RootComponentRegistry";
import { Container } from "./di/Container";
import Cache from "./store/Cache";
export interface ComponentTreeConfig {
    wcmmode: string;
    path: string;
    resourceType: string;
    cache: Cache;
}
/**
 * The Component
 */
export default class ComponentManager {
    private container;
    private document;
    private registry;
    constructor(registry: RootComponentRegistry, container: Container, aDocument?: Document);
    /**
     * initialize react component in dom.
     * @param item
     */
    initReactComponent(item: any): void;
    getResourceType(component: typeof React.Component): string;
    getComponent(resourceType: string): typeof React.Component;
    /**
     * find all root elements and initialize the react components
     */
    initReactComponents(): number;
}
