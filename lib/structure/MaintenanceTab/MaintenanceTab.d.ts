import React from 'react';
import { SanityDocument } from '@sanity/client';
declare type Ti18nDocument = SanityDocument<any>;
interface IProps {
}
interface IState {
    pending: boolean;
    selectedSchema: string;
    documents: Ti18nDocument[];
}
export declare class MaintenanceTab extends React.Component<IProps, IState> {
    private _sanityClient;
    state: IState;
    get i18nSchemas(): any[];
    get baseDocuments(): SanityDocument<any>[];
    get translatedDocuments(): SanityDocument<any>[];
    get oldIdDocuments(): SanityDocument<any>[];
    get documentsSummaryInformation(): {
        oldIdStructure: SanityDocument<any>[];
        missingLanguageField: SanityDocument<any>[];
        missingDocumentRefs: SanityDocument<any>[];
        orphanDocuments: SanityDocument<any>[];
    };
    protected fetchInformation: () => Promise<void>;
    protected fixOldIdDocuments: () => Promise<void>;
    protected fixLanguageFields: () => Promise<void>;
    protected fixTranslationRefs: () => Promise<void>;
    protected fixOrphanedDocuments: () => Promise<void>;
    onSchemaTypeChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    render(): JSX.Element;
}
export {};
