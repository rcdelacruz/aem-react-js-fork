import * as React from "react";
import AemComponent from "./AemComponent";
export interface ScriptProps {
    js: string;
}
export declare class Script extends AemComponent<ScriptProps, any> {
    render(): React.ReactElement<any>;
}
