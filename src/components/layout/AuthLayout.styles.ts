import styled from 'styled-components';

export const Screen = styled.div`
  min-height: 100vh;

  display: flex;
  justify-content: center;

  background:
    radial-gradient(
      circle at top,
      rgba(255, 92, 43, 0.15),
      transparent 28%
    ),
    #0e0e12;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 480px;
  min-height: 100vh;

  display: flex;
  flex-direction: column;

  padding:
    54px
    24px
    calc(34px + env(safe-area-inset-bottom));

  @media (max-width: 768px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;