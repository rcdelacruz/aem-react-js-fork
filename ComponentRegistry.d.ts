import * as React from "react";
import { Mapping } from "./RootComponentRegistry";
import { ComponentConfig } from "./component/WrapperFactory";
export default class ComponentRegistry {
    mappings: Mapping[];
    private mapping;
    constructor(mapping?: (componentClassName: string) => string);
    constructor(mapping?: string);
    register(componentClass: typeof React.Component): void;
    registerVanilla(config: ComponentConfig): void;
    private mapToResourceType(componentClassName);
    private mapClassToResourceType(componentClassName);
}
