import { useNavigate } from "react-router-dom";

import { OnboardingLayout } from "../../../components/onboarding/OnboardingLayout/OnboardingLayout";

import { OnboardingDots } from "../../../components/onboarding/OnboardingDots/OnboardingDots";

import { OnboardingCTA } from "../../../components/onboarding/OnboardingCTA/OnboardingCTA";

import { HeroCard, FloatingCircle, Title, Subtitle } from "./Welcome.styles";

export const Welcome = () => {
  const navigate = useNavigate();

  return (
    <OnboardingLayout
      hero={
        <HeroCard>
          <FloatingCircle />
          📦
        </HeroCard>
      }
    >
      <Title>Welcome to SwiftParcel</Title>

      <Subtitle>
        Fast and reliable logistics platform for modern businesses.
      </Subtitle>

      <OnboardingDots active={0} />

      <OnboardingCTA
        buttonText="Next"
        onSkip={() => navigate("/home")}
        onNext={() => navigate("/onboarding-1")}
      />
    </OnboardingLayout>
  );
};
