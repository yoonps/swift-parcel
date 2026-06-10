import styled from "styled-components";

export const Screen = styled.div`
  min-height: 100vh;

  display: flex;
  justify-content: center;

  background:
    radial-gradient(circle at top, rgba(255, 92, 43, 0.22), transparent 30%),
    #0e0e12;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1440px;

  min-height: 100vh;

  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    flex-direction: row;

    align-items: center;

    padding: 40px;
    gap: 40px;
  }
`;

export const HeroSection = styled.div`
  flex: 1;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 54px 24px 24px;

  @media (min-width: 1024px) {
    padding: 80px;
  }
`;

export const ContentSection = styled.div`
  padding: 24px 24px calc(34px + env(safe-area-inset-bottom));

  @media (min-width: 1024px) {
    width: 480px;

    padding: 80px;
  }
`;
