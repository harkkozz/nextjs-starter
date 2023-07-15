import type { FC, ReactNode } from 'react';

import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';

import TypesafeI18n from '../i18n/i18n-react';

type UniteTestWrapperProps = {
  children: ReactNode;
};

const UnitTestWrapper: FC<UniteTestWrapperProps> = ({ children }) => (
  <MemoryRouterProvider>
    <TypesafeI18n locale="en">{children}</TypesafeI18n>
  </MemoryRouterProvider>
);

export default UnitTestWrapper;
