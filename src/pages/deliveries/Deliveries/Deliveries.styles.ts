import styled, { css } from "styled-components";

interface TabProps {
  active?: boolean;
}

export const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 4px 16px 18px;
`;

export const Title = styled.h1`
  font-size: 28px;
  font-weight: 800;

  letter-spacing: -0.5px;

  color: white;
`;

export const SearchButton = styled.div`
  width: 38px;
  height: 38px;

  border-radius: 14px;

  background: #18181e;

  border: 1px solid rgba(255, 255, 255, 0.04);

  display: flex;
  align-items: center;
  justify-content: center;

  color: #8f9098;
`;

export const Tabs = styled.div`
  display: flex;

  gap: 8px;

  overflow-x: auto;

  padding: 0 16px 18px;

  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Tab = styled.div<TabProps>`
  padding: 7px 13px;

  border-radius: 999px;

  white-space: nowrap;

  flex-shrink: 0;

  font-size: 11px;
  font-weight: 600;

  background: rgba(255, 255, 255, 0.03);

  border: 1px solid rgba(255, 255, 255, 0.04);

  color: #8f9098;

  ${({ active }) =>
    active &&
    css`
      background: rgba(255, 92, 43, 0.12);

      border: 1px solid rgba(255, 92, 43, 0.2);

      color: #ff5c2b;
    `}
`;

export const DeliveryList = styled.div`
  display: flex;
  flex-direction: column;

  gap: 14px;

  padding: 0 16px 140px;
`;

export const DeliveryCard = styled.div`
  background: #18181e;

  border-radius: 20px;

  padding: 16px;

  border: 1px solid rgba(255, 255, 255, 0.03);
`;

export const DeliveryTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const DeliveryId = styled.div`
  font-size: 12px;
  font-weight: 600;

  color: #8f9098;
`;

export const Status = styled.div`
  padding: 6px 10px;

  border-radius: 999px;

  background: rgba(155, 109, 255, 0.12);

  color: #9b6dff;

  font-size: 10px;
  font-weight: 700;
`;

export const DeliveryName = styled.div`
  margin-top: 12px;

  font-size: 15px;
  font-weight: 700;

  color: white;
`;

export const DeliveryRoute = styled.div`
  margin-top: 6px;

  font-size: 13px;

  color: #8f9098;
`;

export const DeliveryMeta = styled.div`
  margin-top: 14px;

  font-size: 11px;

  color: #6f7078;
`;
