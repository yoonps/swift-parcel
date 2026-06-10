import { Button } from "../../button/Button";

import { Container, SkipButton } from "./OnboardingCTA.styles";

interface Props {
  onNext: () => void;

  onSkip: () => void;

  buttonText: string;
}

export const OnboardingCTA = ({ onNext, onSkip, buttonText }: Props) => {
  return (
    <Container>
      <SkipButton onClick={onSkip}>Skip</SkipButton>

      <Button onClick={onNext}>{buttonText}</Button>
    </Container>
  );
};
