import { useContext } from 'react';

import { I18nContext } from 'i18n/i18n-react';
import Link from 'next/link';
import getI18nProps from 'utils/helpers/server/getI18nProps';

export const getServerSideProps = getI18nProps;

const HomePage = () => {
  const { LL } = useContext(I18nContext);

  return (
    <div>
      <h1>{LL.common.home()}</h1>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Link href={'/about'}>About</Link>
        <Link href={'/profile/1'}>Profile</Link>
      </div>
      <p>{LL.homePage.hello()}</p>
    </div>
  );
};

export default HomePage;
