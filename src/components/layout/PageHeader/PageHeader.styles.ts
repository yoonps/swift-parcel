import styled from "styled-components";

export const Container = styled.div`
  position: fixed;

  top: 0;

  left: 50%;

  transform: translateX(-50%);

  width: 100%;
  max-width: 430px;

  z-index: 100;

  background: #111216;

  padding: max(54px, env(safe-area-inset-top)) 16px 16px;

  border-bottom: 1px solid rgba(255, 255, 255, 0.04);

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BackButton = styled.button`
  width: 38px;
  height: 38px;

  border: none;

  border-radius: 14px;

  background: #18181e;
  color: white;

  display: flex;
  align-items: center;
  justify-content: center;

  flex-shrink: 0;
`;

export const Title = styled.h1`
  flex: 1;

  margin: 0;

  text-align: center;

  font-size: 20px;
  font-weight: 700;

  color: white;
`;

export const PageContent = styled.div`
  padding-top: 90px;
`;

export const RightSlot = styled.div`
  min-width: 38px;

  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
