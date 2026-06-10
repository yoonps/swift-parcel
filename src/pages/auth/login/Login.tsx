import { AuthLayout } from "../../../components/layout/AuthLayout";
import { useState } from "react";

import { Input } from "../../../components/input/Input";
import { Button } from "../../../components/button/Button";
import { useNavigate } from "react-router-dom";

import { loginService } from "../../../services/auth.service";
import { useAuthStore } from "../../../store/auth.store";

import {
  Hero,
  Logo,
  Title,
  Subtitle,
  Form,
  Fields,
  BottomArea,
  Footer,
} from "./Login.styles";

export const Login = () => {
  const navigate = useNavigate();
  const setAuth = useAuthStore((state) => state.setAuth);

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await loginService({
        email,
        password,
      });

      setAuth(response.token, response.user);

      navigate("/dashboard");
    } catch (error) {
      console.error(error);
    }
  };
  
  return (
    <AuthLayout>
      <Hero>
        <Logo>📦</Logo>

        <Title>SwiftParcel</Title>

        <Subtitle>Fast and reliable delivery for modern logistics.</Subtitle>
      </Hero>

      <Form>
        <Fields>
          <Input
            label="Email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            label="Password"
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Fields>

        <BottomArea>
          <Button type="button" onClick={handleLogin}>
            Sign In
          </Button>

          <Footer>
            Don&apos;t have an account?
            <span onClick={() => navigate("/signup")}>Sign up</span>
          </Footer>
        </BottomArea>
      </Form>
    </AuthLayout>
  );
};
