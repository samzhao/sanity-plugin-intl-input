/// <reference types="react" />
import { IResolverProps } from "../types";
export declare const DeleteWithi18nAction: (props: IResolverProps<any>) => {
    icon: any;
    disabled: boolean;
    title: any;
    label: string | undefined;
    onHandle: () => void;
    dialog: false | {
        type: string;
        onClose: (() => void) | undefined;
        title: string;
        content: JSX.Element;
    };
};
