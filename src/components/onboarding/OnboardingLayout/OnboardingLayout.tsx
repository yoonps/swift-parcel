import type { ReactNode } from "react";

import {
  Screen,
  Container,
  HeroSection,
  ContentSection,
} from "./OnboardingLayout.styles";

interface Props {
  hero: ReactNode;

  children: ReactNode;
}

export const OnboardingLayout = ({ hero, children }: Props) => {
  return (
    <Screen>
      <Container>
        <HeroSection>{hero}</HeroSection>

        <ContentSection>{children}</ContentSection>
      </Container>
    </Screen>
  );
};
