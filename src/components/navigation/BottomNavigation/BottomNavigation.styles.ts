import styled from "styled-components";

interface ActiveProps {
  active?: boolean;
}

export const Container = styled.div`

  position: fixed;

  left: 50%;
  bottom: 0;

  transform: translateX(-50%);

  width: 100%;
  max-width: 430px;

  height: 78px;

  padding:
    0
    20px
    env(safe-area-inset-bottom);

  margin-bottom: 34px;

  background:
    rgba(20,20,24,.92);

  backdrop-filter: blur(24px);

  border-top:
    1px solid rgba(255,255,255,.04);

  display: flex;
  align-items: center;
  justify-content: space-between;

  z-index: 999;

  @media (min-width: 768px) {

    bottom: 20px;

    width:
      calc(100% - 48px);

    max-width: 382px;

    border-radius: 24px;

    border:
      1px solid rgba(255,255,255,.05);
  }
`;

export const NavItem = styled.button<ActiveProps>`
  flex: 1;

  height: 100%;

  background: transparent;

  border: none;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  gap: 5px;

  cursor: pointer;
`;

export const NavIcon = styled.div<ActiveProps>`
  color: ${({ active }) => (active ? "#FF5C2B" : "#6F7078")};
`;

export const NavLabel = styled.div<ActiveProps>`
  font-size: 10px;
  font-weight: 600;

  color: ${({ active }) => (active ? "#FF5C2B" : "#6F7078")};
`;
