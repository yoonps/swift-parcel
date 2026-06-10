import styled from 'styled-components';

export const Hero = styled.div`
  text-align: center;

  margin-top: 20px;
`;

export const Logo = styled.div`
  width: 88px;
  height: 88px;

  margin: 0 auto 24px;

  border-radius: 28px;

  background:
    linear-gradient(
      135deg,
      #ff5c2b,
      #ff8c5a
    );

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 36px;

  box-shadow:
    0 20px 60px rgba(255,92,43,.3);
`;

export const Title = styled.h1`
  font-size: 34px;
  font-weight: 800;

  color: white;

  letter-spacing: -1px;
`;

export const Subtitle = styled.p`
  margin-top: 12px;

  color: #8f9098;

  font-size: 15px;
  line-height: 1.6;
`;

export const Form = styled.form`
  flex: 1;

  display: flex;
  flex-direction: column;

  margin-top: 42px;
`;

export const Fields = styled.div`
  display: flex;
  flex-direction: column;

  gap: 18px;
`;

export const BottomArea = styled.div`
  margin-top: auto;

  padding-top: 28px;
`;

export const Footer = styled.div`
  text-align: center;

  margin-top: 18px;

  color: #8f9098;

  font-size: 14px;

  span {
    color: #ff5c2b;
    font-weight: 700;
    cursor: pointer;
  }
`;