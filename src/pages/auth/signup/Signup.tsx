import { useState } from "react";

import { AuthLayout } from "../../../components/layout/AuthLayout";

import { Button } from "../../../components/button/Button";
import { Input } from "../../../components/input/Input";

import { signupService } from "../../../services/auth.service";
import { useNavigate } from "react-router-dom";

import {
  Hero,
  Logo,
  Title,
  Subtitle,
  Form,
  Fields,
  BottomArea,
  Footer,
} from "./Signup.styles";

export const Signup = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try {
      const response = await signupService({
        fullName,
        email,
        phone,
        password,
      });

      console.log(response);

      navigate("/otp");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <AuthLayout>
      <Hero>
        <Logo>📦</Logo>

        <Title>Create Account</Title>

        <Subtitle>Start managing parcels with SwiftParcel today.</Subtitle>
      </Hero>

      <Form>
        <Fields>
          <Input
            label="Full Name"
            placeholder="Enter full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />

          <Input
            label="Email Address"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            label="Phone Number"
            placeholder="+60 12 345 6789"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
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
          <Button
            type="button"
            onClick={() => {
              handleSignup();
              navigate("/otp");
            }}
          >
            Create Account
          </Button>

          <Footer>
            Already have an account?
            <span onClick={() => navigate("/")}>Sign up</span>
          </Footer>
        </BottomArea>
      </Form>
    </AuthLayout>
  );
};
