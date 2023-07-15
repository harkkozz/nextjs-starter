import { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next';
import { useRouter } from 'next/router';
import { getI18nProp } from 'utils/helpers/server/getI18nProps';

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
  const profileId = context.params?.id;
  const i18n = await getI18nProp(context, 'profilePage');

  return {
    i18n,
    profileId,
    props: { title: 'A' },
  };
};

const ProfilePage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  return <div>Profile {id}</div>;
};
export default ProfilePage;
