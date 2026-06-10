import { useNavigate } from "react-router-dom";

import { OnboardingLayout } from "../../../components/onboarding/OnboardingLayout/OnboardingLayout";

import { OnboardingDots } from "../../../components/onboarding/OnboardingDots/OnboardingDots";

import { OnboardingCTA } from "../../../components/onboarding/OnboardingCTA/OnboardingCTA";

import { Icon, Title, Subtitle } from "../OnboardingOne/OnboardingOne.styles";

export const OnboardingTwo = () => {
  const navigate = useNavigate();

  return (
    <OnboardingLayout hero={<Icon>⚡</Icon>}>
      <Title>Fast Logistics</Title>

      <Subtitle>Optimized routes and reliable delivery system.</Subtitle>

      <OnboardingDots active={2} />

      <OnboardingCTA
        buttonText="Next"
        onSkip={() => navigate("/home")}
        onNext={() => navigate("/onboarding-3")}
      />
    </OnboardingLayout>
  );
};
