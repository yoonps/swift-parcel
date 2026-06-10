import styled from 'styled-components';

export const HeroCard = styled.div`

  width: 280px;
  height: 280px;

  border-radius: 48px;

  background:
    linear-gradient(
      135deg,
      #FF5C2B,
      #FF8C5A
    );

  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 88px;

  box-shadow:
    0 40px 80px rgba(255,92,43,.28);
`;

export const FloatingCircle = styled.div`

  position: absolute;

  width: 120px;
  height: 120px;

  border-radius: 999px;

  background:
    rgba(255,255,255,.12);

  top: -20px;
  right: -20px;
`;

export const Title = styled.h1`

  font-size: 40px;
  font-weight: 800;

  line-height: 1.1;

  color: white;

  letter-spacing: -1px;
`;

export const Subtitle = styled.p`

  margin-top: 18px;

  color: #8F9098;

  line-height: 1.7;

  font-size: 16px;
`;