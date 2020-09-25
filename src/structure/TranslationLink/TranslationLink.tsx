import * as React from "react";
import styles from "./TranslationLink.scss";
import IntentLink from "@sanity/state-router/lib/components/IntentLink";
import classnames from "classnames";
import { ILanguageObject, Ti18nSchema } from "../../types";
import {
  getSanityClient,
  getConfig,
  buildDocId,
  getBaseIdFromId,
  getLanguageFromId,
} from "../../utils";
import { SanityFlag } from "../SanityFlag";
import { SanityDocument } from "@sanity/client";

interface IProps {
  docId: string;
  index: number;
  schema: Ti18nSchema;
  lang: ILanguageObject;
  currentLanguage: string | null;
  baseDocument?: any;
}

const getPathname = (nextId) => {
  const pathname = decodeURIComponent(location.pathname);
  const baseId = getBaseIdFromId(nextId);
  const translatedIdRegexStr = buildDocId(baseId, "[a-zA-Z-]{2,5}");
  const currentIdRegex = new RegExp(`${baseId}|${translatedIdRegexStr}`);

  const newPathname = pathname
    .replace(currentIdRegex, nextId)
    .replace(",view=translations", "");

  return newPathname;
};

export const TranslationLink: React.FunctionComponent<IProps> = ({
  docId,
  index,
  schema,
  lang,
  currentLanguage,
  baseDocument,
}) => {
  const config = getConfig(schema);
  const [imageOk, setImageOk] = React.useState(true);
  const [existing, setExisting] = React.useState<null | SanityDocument>(null);
  const nameSplit = lang.name.split(/[_-]/);
  const country = (nameSplit.length > 1
    ? nameSplit[1]
    : nameSplit[0]
  ).toLowerCase();
  const translatedDocId = (
    config.base ? lang.name === config.base : index === 0
  )
    ? docId
    : buildDocId(docId, lang.name);

  React.useEffect(() => {
    getSanityClient()
      .fetch("*[_id == $id || _id == $draftId]", {
        id: translatedDocId,
        draftId: `drafts.${translatedDocId}`,
      })
      .then((r) => {
        const existing = r.find((r) => r._id === translatedDocId);
        if (existing) setExisting(existing);
        else setExisting(r.find((r) => r._id === `drafts.${translatedDocId}`));
      })
      .catch((err) => {
        console.error(err);
      });
  }, [lang.name]);

  return (
    <a
      href="#"
      className={classnames({
        [styles.entry]: true,
        [styles.disabled]: existing === null,
        [styles.selected]: currentLanguage === lang.name,
      })}
      onClick={async (e) => {
        e.preventDefault();

        const newPathname = getPathname(translatedDocId);

        if (existing === undefined) {
          const fieldName = config.fieldNames.lang;
          getSanityClient()
            .createIfNotExists({
              ...(baseDocument ? baseDocument : {}),
              _id: `drafts.${translatedDocId}`,
              _type: schema.name,
              [fieldName]: lang.name,
            })
            .then(() => {
              location.pathname = newPathname;
            });
        } else {
          location.pathname = newPathname;
        }
      }}
    >
      {imageOk ? (
        <img
          className={styles.flag}
          src={`https://www.countryflags.io/${country}/flat/24.png`}
          onError={() => setImageOk(false)}
        />
      ) : (
        <SanityFlag className={styles.flag} />
      )}
      <h2 className={styles.title}>{lang.title}</h2>
      {!existing ? (
        <p className={styles.missing}>{config.messages?.missing}</p>
      ) : (
        existing &&
        existing._id.startsWith("drafts.") && (
          <p className={styles.draft}>{config.messages?.draft}</p>
        )
      )}
    </a>
  );
};
