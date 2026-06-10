import { useNavigate } from "react-router-dom";

import { AuthLayout } from "../../components/layout/AuthLayout";

import { Button } from "../../components/button/Button";

import {
  Container,
  Checkmark,
  Title,
  Subtitle,
  BottomArea,
} from "./SuccessScreen.styles";

export const SuccessScreen = () => {
  const navigate = useNavigate();

  return (
    <AuthLayout>
      <Container>
        <Checkmark>✓</Checkmark>

        <Title>Account Created!</Title>

        <Subtitle>Your account setup was successful.</Subtitle>
      </Container>

      <BottomArea>
        <Button onClick={() => navigate('/welcome')}>Go To Dashboard</Button>
      </BottomArea>
    </AuthLayout>
  );
};
