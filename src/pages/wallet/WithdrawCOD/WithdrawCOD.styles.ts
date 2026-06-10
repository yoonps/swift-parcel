import styled, { css } from "styled-components";

interface TabProps {
  active?: boolean;
}

interface ValueProps {
  positive?: boolean;
}

export const HeaderRow = styled.div`
  display: flex;
  align-items: center;

  padding: 4px 16px 24px;
`;

export const BackButton = styled.div`
  width: 38px;
  height: 38px;
  margin-right: 16px;

  border-radius: 14px;

  background: #18181e;

  border: 1px solid rgba(255, 255, 255, 0.04);

  display: flex;
  align-items: center;
  justify-content: center;

  color: white;

  cursor: pointer;

  transition: all 0.2s ease;

  &:active {
    transform: scale(0.96);
  }
`;

export const Title = styled.h1`
  font-size: 20px;
  font-weight: 700;

  color: white;
`;

export const BalanceCard = styled.div`
  margin: 0 16px 16px;

  padding: 24px;

  border-radius: 24px;

  background: linear-gradient(135deg, #ff5c2b, #ff8c5a);
`;

export const BalanceLabel = styled.div`
  color: rgba(255, 255, 255, 0.85);

  font-size: 13px;
`;

export const BalanceAmount = styled.div`
  margin-top: 8px;

  color: white;

  font-size: 32px;
  font-weight: 800;

  letter-spacing: -0.5px;
`;

export const SummaryCard = styled.div`
  margin: 0 16px 20px;

  padding: 18px;

  border-radius: 20px;

  background: #18181e;

  border: 1px solid rgba(255, 255, 255, 0.04);
`;

export const SummaryRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 10px 0;

  &:not(:last-child) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.04);
  }
`;

export const SummaryLabel = styled.div`
  font-size: 14px;
  font-weight: 500;

  color: #a6a7ae;
`;

export const SummaryValue = styled.div<ValueProps>`
  font-size: 14px;
  font-weight: 700;

  color: white;

  ${({ positive }) =>
    positive &&
    css`
      color: #26d98a;
    `}
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
  flex-shrink: 0;

  padding: 10px 14px;

  border-radius: 999px;

  font-size: 13px;
  font-weight: 600;

  cursor: pointer;

  transition: all 0.2s ease;

  background: ${({ active }) => (active ? "rgba(255,92,43,.12)" : "#18181E")};

  color: ${({ active }) => (active ? "#FF5C2B" : "#8F9098")};

  border: 1px solid
    ${({ active }) =>
      active ? "rgba(255,92,43,.16)" : "rgba(255,255,255,.04)"};
`;

export const SectionTitle = styled.div`
  padding: 0 16px 12px;

  font-size: 14px;
  font-weight: 700;

  color: white;
`;

export const TransactionList = styled.div`
  display: flex;
  flex-direction: column;

  gap: 12px;

  padding: 0 16px 140px;
`;

export const TransactionCard = styled.div`
  background: #18181e;

  border-radius: 20px;

  border: 1px solid rgba(255, 255, 255, 0.04);

  padding: 16px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  transition: all 0.2s ease;

  &:hover {
    border: 1px solid rgba(255, 255, 255, 0.08);
  }
`;

export const TransactionTitle = styled.div`
  font-size: 14px;
  font-weight: 600;

  color: white;
`;

export const TransactionDate = styled.div`
  margin-top: 4px;

  font-size: 12px;

  color: #8f9098;
`;

export const TransactionAmount = styled.div<ValueProps>`
  font-size: 15px;
  font-weight: 700;

  color: #ff5c2b;

  ${({ positive }) =>
    positive &&
    css`
      color: #26d98a;
    `}
`;

export const BottomAction = styled.div`
  position: fixed;

  left: 50%;
  bottom: 0;

  transform: translateX(-50%);

  width: 100%;
  max-width: 430px;

  padding: 16px 16px calc(34px + env(safe-area-inset-bottom));

  background: linear-gradient(to top, #111216, #111216, transparent);

  z-index: 50;

  @media (min-width: 768px) {
    bottom: 24px;

    width: calc(100% - 48px);

    max-width: 382px;

    padding: 16px;
  }
`;