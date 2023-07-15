import { useContext } from 'react';

import { I18nContext } from 'i18n/i18n-react';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router';
import { getI18nProp } from 'utils/helpers/server/getI18nProps';

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
  const profileId = context.params?.id;
  const i18n = await getI18nProp(context, 'profilePage');

  return {
    props: {
      i18n,
      profileId,
    },
  };
};

const ProfilePage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { LL } = useContext(I18nContext);

  return (
    <div>
      <h1>{LL.common.profile()}</h1>
      <p>{LL.profilePage.user({ id })}</p>
    </div>
  );
};
export default ProfilePage;
