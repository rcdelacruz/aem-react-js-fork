import { ResourceComponent } from "./ResourceComponent";
import * as React from "react";
import { ReactParsysProps } from "./ReactParsys";
export interface ComponentConfig {
    depth?: number;
    parsys?: ReactParsysProps;
    component: typeof React.Component;
    props?: {
        [name: string]: any;
    };
    transform?: (props: {
        [name: string]: any;
    }, r: ResourceComponent<any, any, any>) => {
        [name: string]: any;
    };
}
export default class WrapperFactory {
    /**
     *
     * @param config
     * @param resourceType
     * @return {TheWrapper}
     */
    static createWrapper(config: ComponentConfig, resourceType: string): React.ComponentClass<any>;
}
export declare class Wrapper extends ResourceComponent<any, any, any> {
    protected config: ComponentConfig;
    protected getDepth(): number;
    constructor(config: ComponentConfig, props?: any, context?: any);
    create(): React.ReactElement<any>;
    renderBody(): React.ReactElement<any>;
}
