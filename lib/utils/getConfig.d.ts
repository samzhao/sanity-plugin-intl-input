import { Ti18nSchema, TLanguagesOption, TMessagesConfig, TFieldNamesConfig } from '../types';
export declare function getConfig(type?: string | Ti18nSchema): {
    base?: string;
    fieldNames: Required<TFieldNamesConfig>;
    languages: TLanguagesOption;
    messages: Required<TMessagesConfig>;
} & {
    withTranslationsMaintenance: boolean;
};
