import * as React from "react";
import AemComponent from "./component/AemComponent";
export interface IncludeProps {
    path: string;
    resourceType: string;
    element?: string;
    hidden?: boolean;
}
export declare class ResourceInclude extends AemComponent<IncludeProps, any> {
    render(): React.ReactElement<any>;
}
