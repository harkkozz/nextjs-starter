import type { ReactNode } from 'react';

import TypesafeI18n from 'i18n/i18n-react';
import { loadedLocales } from 'i18n/i18n-util';
import { loadFormatters } from 'i18n/i18n-util.sync';
import hash from 'object-hash';
import type { I18nProp } from 'utils/helpers/server/getI18nProps';

const TypesafeI18nProvider = ({ i18n, children }: { i18n?: I18nProp; children: ReactNode }): JSX.Element => {
  if (!i18n) return children as JSX.Element;

  const locale = i18n.locale;
  const dictionary = i18n.dictionarya;

  loadedLocales[locale] = dictionary;
  loadFormatters(locale);

  return (
    <TypesafeI18n locale={locale} key={hash(i18n.dictionary)}>
      {children}
    </TypesafeI18n>
  );
};

export default TypesafeI18nProvider;
