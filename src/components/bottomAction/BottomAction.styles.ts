import { styled } from "styled-components";

export const BottomAction = styled.div`
  position: fixed;

  left: 50%;
  bottom: 0;

  transform: translateX(-50%);

  width: 100%;
  max-width: 430px;

  padding: 16px 16px calc(34px + env(safe-area-inset-bottom));

  background: linear-gradient(to top, #111216, #111216, transparent);

  display: flex;
  flex-direction: column;

  gap: 12px;

  z-index: 50;

  @media (min-width: 768px) {
    width: calc(100% - 48px);

    max-width: 430px;

    bottom: 24px;

    padding: 16px;
  }
`;
