import * as React from "react";
import { ResourceComponent } from "./ResourceComponent";
export declare abstract class VanillaWrapper extends ResourceComponent<any, any, any> {
    renderBody(): React.ReactElement<any>;
    protected getDepth(): number;
}
