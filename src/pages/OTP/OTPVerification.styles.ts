import styled from "styled-components";

export const Title = styled.h1`
  margin-top: 40px;

  text-align: center;

  font-size: 34px;
  font-weight: 800;

  color: white;
`;

export const Subtitle = styled.p`
  margin-top: 12px;

  text-align: center;

  color: #8f9098;

  line-height: 1.6;
`;

export const OTPContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 14px;

  margin-top: 52px;
`;

export const OTPInput = styled.input`
  width: 68px;
  height: 68px;

  border: none;
  outline: none;

  border-radius: 22px;

  background: #1a1a22;

  text-align: center;

  color: white;

  font-size: 28px;
  font-weight: 700;

  transition: 0.2s ease;

  &::placeholder {
    color: #6f7078;

    transition: opacity 0.2s ease;
  }

  &:focus::placeholder {
    opacity: 0;
  }

  &:focus {
    box-shadow: 0 0 0 2px rgba(255, 92, 43, 0.3);

    background: #20202a;
  }
`;

export const Timer = styled.div`
  margin-top: 28px;

  text-align: center;

  color: #8f9098;

  font-size: 14px;
`;

export const BottomArea = styled.div`
  margin-top: auto;

  padding-top: 28px;
`;
