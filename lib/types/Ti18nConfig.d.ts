import { TLanguagesOption } from './TLanguagesOption';
import { TMessagesConfig } from './TMessagesConfig';
import { TFieldNamesConfig } from './TFieldNamesConfig';
export declare type Ti18nConfig = {
    base?: string;
    fieldNames?: TFieldNamesConfig;
    languages?: TLanguagesOption;
    messages?: TMessagesConfig;
};
