import * as React from "react";
import { ClientAemContext, AemContext } from "../AemContext";
import RootComponentRegistry from "../RootComponentRegistry";
import { Container } from "../di/Container";
/**
 * Provides base functionality for components that are
 */
export default class AemComponent<P, S> extends React.Component<P, S> {
    static contextTypes: any;
    context: {
        wcmmode: string;
        path: string;
        aemContext: ClientAemContext;
    };
    getWcmmode(): string;
    getPath(): string;
    isWcmEnabled(): boolean;
    protected getAemContext(): AemContext;
    getRegistry(): RootComponentRegistry;
    getComponent(name: string): any;
    getOsgiService(name: string): any;
    getResourceModel(name: string): any;
    getRequestModel(name: string): any;
    protected getContainer(): Container;
}
