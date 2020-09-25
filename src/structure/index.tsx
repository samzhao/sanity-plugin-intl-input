import "regenerator-runtime";
import { StructureBuilder as S } from "@sanity/structure";
import { IDefaultDocumentNodeStructureProps } from "./IDefaultDocumentNodeStructureProps";
import { Ti18nSchema } from "../types";
import { ListItemBuilder } from "@sanity/structure/lib/ListItem";
import { TranslationsComponentFactory } from "./TranslationsComponentFactory";
import { getSchema, getConfig } from "../utils";
import { SchemaType } from "@sanity/structure/lib/parts/Schema";
import { MaintenanceTab } from "./MaintenanceTab";
import { I18nPrefix } from "../constants";

const hasIcon = (schemaType?: SchemaType | string): boolean => {
  if (!schemaType || typeof schemaType === "string") {
    return false;
  }
  return Boolean(schemaType.icon);
};

export const getDocumentNodeViewsForSchemaType = (type: string) => {
  const schema: Ti18nSchema = getSchema(type);
  return [
    S.view.form(),
    S.view
      .component(TranslationsComponentFactory(schema))
      .title("Translations"),
  ];
};

export const getDefaultDocumentNode = (
  props: IDefaultDocumentNodeStructureProps
) => {
  const schema: Ti18nSchema = getSchema(props.schemaType);
  if (schema && schema.i18n) {
    return S.document().views(
      getDocumentNodeViewsForSchemaType(props.schemaType)
    );
  }
  return S.document();
};

export const getDocumentTypes = () => {
  const listItemsWithouti18n: ListItemBuilder[] = [];
  const listItemsWithi18n = S.documentTypeListItems().filter((l) => {
    const schemaType = l.getSchemaType();
    const hasi18n =
      schemaType && typeof schemaType !== "string" && (schemaType as any).i18n;
    if (!hasi18n) listItemsWithouti18n.push(l);
    return hasi18n;
  });
  return {
    withoutI18n: listItemsWithouti18n,
    withI18n: listItemsWithi18n,
  };
};

export const getMaintenanceTabComponent = () => {
  const config = getConfig();
  return S.component(MaintenanceTab)
    .title(config.messages?.translationsMaintenance?.title || "")
    .id(`__i18n_translations_maintenance_tab`);
};

export const getMaintenanceListItem = () => {
  const config = getConfig();
  return S.listItem()
    .id(`__i18n_translations_maintenance_tab`)
    .title(config.messages?.translationsMaintenance?.title || "")
    .child(getMaintenanceTabComponent());
};

export const getFilteredDocumentTypeListItems = () => {
  const config = getConfig();
  const types = getDocumentTypes();

  const items = [
    ...types.withoutI18n,
    ...types.withI18n.map((l) =>
      l.child(
        S.documentList()
          .id(l.getId() || "")
          .title(l.getTitle() || "")
          .filter(
            "!(_id match path($id)) && !(_id match path($drafts)) && _type == $type"
          )
          .params({
            id: `${I18nPrefix}-**`,
            drafts: `drafts.${I18nPrefix}-**`,
            type: l.getId(),
          })
      )
    ),
  ];

  if (config.withTranslationsMaintenance) {
    items.splice(0, 0, getMaintenanceListItem());
  }

  return items;
};

export default () => {
  const types = getDocumentTypes();
  if (types.withI18n.length === 0) return S.defaults();

  const items = getFilteredDocumentTypeListItems();
  return S.list()
    .id("__root__")
    .title("Content")
    .items(items)
    .showIcons(items.some((item) => hasIcon(item.getSchemaType())));
};
