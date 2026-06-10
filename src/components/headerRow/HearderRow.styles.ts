import { styled } from "styled-components";

export const HeaderRow = styled.div`
  position: sticky;

  top: 0;

  z-index: 100;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: #111216;

  padding: 54px 16px 16px;

  border-bottom: 1px solid rgba(255, 255, 255, 0.04);

  backdrop-filter: blur(16px);

  @media (min-width: 768px) {
    padding: 24px 24px 16px;
  }
`;