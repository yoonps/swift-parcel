import { useNavigate } from "react-router-dom";

import { OnboardingLayout } from "../../../components/onboarding/OnboardingLayout/OnboardingLayout";

import { OnboardingDots } from "../../../components/onboarding/OnboardingDots/OnboardingDots";

import { OnboardingCTA } from "../../../components/onboarding/OnboardingCTA/OnboardingCTA";

import { Icon, Title, Subtitle } from "../OnboardingOne/OnboardingOne.styles";

export const OnboardingThree = () => {
  const navigate = useNavigate();

  return (
    <OnboardingLayout hero={<Icon>🔔</Icon>}>
      <Title>Instant Notifications</Title>

      <Subtitle>Stay updated on every shipment activity.</Subtitle>

      <OnboardingDots active={3} />

      <OnboardingCTA
        buttonText="Next"
        onSkip={() => navigate("/home")}
        onNext={() => navigate("/home")}
      />
    </OnboardingLayout>
  );
};
