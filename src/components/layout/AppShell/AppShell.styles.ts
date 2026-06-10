import styled from "styled-components";

export const Screen = styled.div`
  &::-webkit-scrollbar {
    display: none;
  }
  background: #0f1014;

  display: flex;
  justify-content: center;
`;

export const Content = styled.div<{
  hasBottomNav?: boolean;
}>`
  width: 100%;
  max-width: 430px;

  min-height: 100vh;

  background: #111216;

  position: relative;

  overflow-x: hidden;

  display: flex;
  flex-direction: column;

  padding-top: max(
    54px,
    env(safe-area-inset-top)
  );

  ...
`;
