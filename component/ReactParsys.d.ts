import * as React from "react";
import { ResourceComponent, Resource, ResourceProps } from "./ResourceComponent";
export interface ReactParsysProps extends ResourceProps {
    className?: string;
    elementName?: string;
    childClassName?: string;
    childElementName?: string;
}
export default class ReactParsys extends ResourceComponent<Resource, ReactParsysProps, any> {
    renderBody(): React.ReactElement<any>;
    protected getDepth(): number;
}
