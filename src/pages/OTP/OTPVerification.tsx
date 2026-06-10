import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { AuthLayout } from "../../components/layout/AuthLayout";

import { Button } from "../../components/button/Button";
import { verifyOTPService } from "../../services/auth.service";

import {
  Title,
  Subtitle,
  OTPContainer,
  OTPInput,
  BottomArea,
  Timer,
} from "./OTPVerification.styles";

export const OTPVerification = () => {
  const navigate = useNavigate();

  const [otp, setOtp] = useState(["", "", "", ""]);

  const handleChange = (value: string, index: number) => {
    const updated = [...otp];

    updated[index] = value;

    setOtp(updated);
  };

  const handleContinue = async () => {
    try {
      await verifyOTPService({
        email: "example@gmail.com",

        otp: otp.join(""),
      });

      navigate("/create-password");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AuthLayout>
      <Title>Verify OTP</Title>

      <Subtitle>We sent a verification code to your phone number.</Subtitle>

      <OTPContainer>
        {otp.map((digit, index) => (
          <OTPInput
            placeholder="X"
            key={index}
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(e.target.value, index)}
          />
        ))}
      </OTPContainer>

      <Timer>Resend code in 00:24</Timer>

      <BottomArea>
        <Button onClick={handleContinue}>Continue</Button>
      </BottomArea>
    </AuthLayout>
  );
};
