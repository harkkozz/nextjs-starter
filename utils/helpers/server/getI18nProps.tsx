import type { Locales, Namespaces } from 'i18n/i18n-types';
import { loadedLocales } from 'i18n/i18n-util';
import { loadLocaleAsync, loadNamespaceAsync } from 'i18n/i18n-util.async';
import type {
  GetServerSidePropsContext,
  GetServerSidePropsResult,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from 'next';

export type I18nProp = {
  locale: Locales;
  dictionary: (typeof loadedLocales)[Locales];
};

export interface I18nProps {
  i18n: I18nProp;
}

export const getI18nProp = async (
  context: GetStaticPropsContext | GetServerSidePropsContext,
  namespace?: Namespaces,
): Promise<I18nProps['i18n']> => {
  const locale = context.locale as Locales;
  await Promise.all([loadLocaleAsync(locale), ...[namespace ? loadNamespaceAsync(locale, namespace) : []]]);

  return {
    locale,
    dictionary: loadedLocales[locale],
  };
};

export const getI18nProps = async (
  context: GetStaticPropsContext | GetServerSidePropsContext,
  namespace?: Namespaces,
): Promise<GetStaticPropsResult<I18nProps> | GetServerSidePropsResult<I18nProps>> => {
  return {
    props: {
      i18n: await getI18nProp(context, namespace),
    },
  };
};

export default getI18nProps;
