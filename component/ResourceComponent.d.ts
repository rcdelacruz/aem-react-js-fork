import * as React from "react";
import AemComponent from "./AemComponent";
import RootComponentRegistry from "../RootComponentRegistry";
export interface Resource {
    "sling:resourceType": string;
}
export declare enum STATE {
    LOADING = 0,
    LOADED = 1,
    FAILED = 2,
}
export interface ResourceState {
    absolutePath: string;
    resource?: any;
    state: STATE;
}
export interface ResourceProps {
    path: string;
    skipRenderDialog?: boolean;
    root?: boolean;
    wcmmode?: string;
    className?: string;
}
/**
 * Provides base functionality for components that are
 */
export declare abstract class ResourceComponent<C extends Resource, P extends ResourceProps, S extends ResourceState> extends AemComponent<P, S> {
    static childContextTypes: any;
    getChildContext(): any;
    shouldComponentUpdate(nextProps: P, nextState: S): boolean;
    componentWillMount(): void;
    componentWillReceiveProps(prevProps: ResourceProps): void;
    initialize(): void;
    getWcmmode(): string;
    getPath(): string;
    protected renderLoading(): React.ReactElement<any>;
    render(): React.ReactElement<any>;
    getRegistry(): RootComponentRegistry;
    abstract renderBody(): React.ReactElement<any>;
    getResource(): C;
    getResourceType(): string;
    changedResource(path: string, resource: C): void;
    protected getDepth(): number;
    protected renderChildren(path: string, childClassName?: string, childElementName?: string): React.ReactElement<any>[];
}
