import type { ReactNode } from 'react';

import {
  Screen,
  Container,
} from './AuthLayout.styles';

interface Props {
  children: ReactNode;
}

export const AuthLayout = ({
  children,
}: Props) => {
  return (
    <Screen>
      <Container>{children}</Container>
    </Screen>
  );
};