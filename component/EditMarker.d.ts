import * as React from "react";
import AemComponent from "./AemComponent";
export interface EditMarkerProps {
    label?: string;
}
export default class EditMarker extends AemComponent<EditMarkerProps, any> {
    render(): React.ReactElement<any>;
}
