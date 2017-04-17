import * as React from "react";
import ComponentRegistry from "./ComponentRegistry";
export declare class Mapping {
    resourceType: string;
    vanillaClass: typeof React.Component;
    componentClass: typeof React.Component;
    constructor(resourceType: string, componentClass: typeof React.Component, vanillaClass: typeof React.Component);
}
export default class RootComponentRegistry {
    private registries;
    private resourceTypeToComponent;
    private componentToResourceType;
    private vanillaToWrapper;
    constructor();
    add(registry: ComponentRegistry): void;
    getResourceType(component: typeof React.Component): string;
    getResourceType(component: React.Component<any, any>): string;
    getComponent(resourceType: string): typeof React.Component;
    register(mapping: Mapping): void;
    init(): void;
    getVanillaWrapper(component: typeof React.Component): typeof React.Component;
}
