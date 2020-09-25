import 'regenerator-runtime';
import * as React from 'react';
import PatchEvent from '@sanity/form-builder/lib/PatchEvent';
import { IType } from '../types/IType';
import { ILanguageObject } from '../types/ILanguageObject';
interface IField {
    name: string;
    type: IType;
}
interface IProps {
    type: IType;
    isRoot?: boolean;
    value?: {
        [key: string]: any;
    };
    markers?: any[];
    readOnly?: boolean;
    focusPath?: any[];
    onChange?: (...args: any[]) => any;
    onFocus: (...args: any[]) => any;
    onBlur: (...args: any[]) => any;
    filterField?: (...args: any[]) => any;
}
interface IState {
    currentLanguage: ILanguageObject | null;
    fetchingLanguages: boolean;
    languages: ILanguageObject[];
}
declare class Input extends React.PureComponent<IProps, IState> {
    state: IState;
    private getBaseLanguage;
    private get missingTranslations();
    onFieldChange: (fieldEvent: PatchEvent, field: IField) => void;
    private onSelectLanguage;
    renderField: (field: IField) => JSX.Element | null;
    loadLanguages: () => Promise<void>;
    focus(): void;
    componentDidMount(): void;
    render(): JSX.Element;
}
export default Input;
