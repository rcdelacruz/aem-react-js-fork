import * as React from "react";
import AemComponent from "../component/AemComponent";
export interface ResourceRouteProps {
    params: {
        storeId: any;
    };
    route: any;
}
/**
 * Used as the component of <Route/> to translate from the path variables to a absolute resource path and pass this to the react aem component
 * defined by the prop 'resourceComponent'.
 */
export default class ResourceRoute extends AemComponent<ResourceRouteProps, any> {
    render(): React.ReactElement<any>;
}
