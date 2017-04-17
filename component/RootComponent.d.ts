import * as React from "react";
import { AemContext } from "../AemContext";
export interface RootComponentProps {
    comp: typeof React.Component;
    aemContext: AemContext;
    path: string;
    renderRootDialog?: boolean;
    wcmmode?: string;
}
export default class RootComponent extends React.Component<RootComponentProps, any> {
    static childContextTypes: any;
    getChildContext(): any;
    render(): React.ReactElement<any>;
}
