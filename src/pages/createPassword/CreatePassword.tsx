import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { AuthLayout } from "../../components/layout/AuthLayout";

import { Input } from "../../components/input/Input";
import { Button } from "../../components/button/Button";

import {
  Title,
  Subtitle,
  Form,
  Fields,
  BottomArea,
} from "./CreatePassword.styles";

export const CreatePassword = () => {
  const navigate = useNavigate();

  const [password, setPassword] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");

  const handleContinue = () => {
    if (password !== confirmPassword) {
      return;
    }

    navigate("/success");
  };

  return (
    <AuthLayout>
      <Title>Create Password</Title>

      <Subtitle>Secure your account with a strong password.</Subtitle>

      <Form>
        <Fields>
          <Input
            label="Password"
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Input
            label="Confirm Password"
            type="password"
            placeholder="Enter confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </Fields>

        <BottomArea>
          <Button onClick={handleContinue}>Continue</Button>
        </BottomArea>
      </Form>
    </AuthLayout>
  );
};
