import { useContext } from 'react';

import { I18nContext } from 'i18n/i18n-react';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { getI18nProp } from 'utils/helpers/server/getI18nProps';

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
  const i18n = await getI18nProp(context, 'aboutPage');

  return {
    props: {
      i18n,
    },
  };
};

const AboutPage = () => {
  const { LL } = useContext(I18nContext);

  return (
    <div>
      <h1>{LL.common.about()}</h1>
      <p>{LL.aboutPage.hello()}</p>
    </div>
  );
};
export default AboutPage;
