import * as React from "react";
import AemComponent from "./AemComponent";
export interface EditDialogProps {
    path: string;
    resourceType: string;
    className?: string;
}
export default class EditDialog extends AemComponent<EditDialogProps, any> {
    render(): React.ReactElement<any>;
    private createWrapperElement(dialog);
    private createAuthorElement(dialog);
}
