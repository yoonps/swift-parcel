import { useNavigate } from "react-router-dom";

import { OnboardingLayout } from "../../../components/onboarding/OnboardingLayout/OnboardingLayout";

import { OnboardingDots } from "../../../components/onboarding/OnboardingDots/OnboardingDots";

import { OnboardingCTA } from "../../../components/onboarding/OnboardingCTA/OnboardingCTA";

import { Icon, Title, Subtitle } from "./OnboardingOne.styles";

export const OnboardingOne = () => {
  const navigate = useNavigate();

  return (
    <OnboardingLayout hero={<Icon>🚚</Icon>}>
      <Title>Track Every Delivery</Title>

      <Subtitle>Realtime tracking with instant shipment updates.</Subtitle>

      <OnboardingDots active={1} />

      <OnboardingCTA
        buttonText="Next"
        onSkip={() => navigate("/home")}
        onNext={() => navigate("/onboarding-2")}
      />
    </OnboardingLayout>
  );
};
