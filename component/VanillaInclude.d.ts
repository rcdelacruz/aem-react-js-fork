import * as React from "react";
import AemComponent from "./AemComponent";
export interface VanillaProps {
    component: typeof React.Component;
    path: string;
}
export default class VanillaInclude extends AemComponent<VanillaProps, any> {
    render(): React.ReactElement<any>;
}
