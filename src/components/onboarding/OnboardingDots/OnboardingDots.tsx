import { Container, Dot, ActiveDot } from "./OnboardingDots.styles";

interface Props {
  active: number;
}

export const OnboardingDots = ({ active }: Props) => {
  return (
    <Container>
      {Array.from({ length: 4 }).map((_, index) =>
        index === active ? <ActiveDot key={index} /> : <Dot key={index} />,
      )}
    </Container>
  );
};
