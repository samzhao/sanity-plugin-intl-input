import "regenerator-runtime";
import { IDefaultDocumentNodeStructureProps } from "./IDefaultDocumentNodeStructureProps";
import { ListItemBuilder } from "@sanity/structure/lib/ListItem";
export declare const getDocumentNodeViewsForSchemaType: (type: string) => import("@sanity/structure/lib/views/View").ViewBuilder[];
export declare const getDefaultDocumentNode: (props: IDefaultDocumentNodeStructureProps) => import("@sanity/structure/lib/Document").DocumentBuilder;
export declare const getDocumentTypes: () => {
    withoutI18n: ListItemBuilder[];
    withI18n: ListItemBuilder[];
};
export declare const getMaintenanceTabComponent: () => import("@sanity/structure/lib/Component").ComponentBuilder;
export declare const getMaintenanceListItem: () => ListItemBuilder;
export declare const getFilteredDocumentTypeListItems: () => ListItemBuilder[];
declare const _default: () => import("@sanity/structure/lib/List").ListBuilder;
export default _default;
