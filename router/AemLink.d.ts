import * as React from "react";
import { Link } from "react-router";
import Router = ReactRouter.Router;
import LinkProps = ReactRouter.LinkProps;
import { AemContext } from "../AemContext";
import LocationDescriptorObject = HistoryModule.LocationDescriptorObject;
export default class AemLink extends React.Component<LinkProps, void> {
    static contextTypes: any;
    context: {
        wcmmode: string;
        history: any;
        router: any;
        aemContext: AemContext;
    };
    isWcmEnabled(): boolean;
    protected isClickable(targetLocation: LocationDescriptorObject, router: Router): boolean;
    handleClick(event: any): void;
    render(): React.ReactElement<Link>;
}
