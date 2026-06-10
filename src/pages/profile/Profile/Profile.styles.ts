import styled, { css } from "styled-components";

interface ItemProps {
  danger?: boolean;
}

export const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 4px 16px 20px;
`;

export const Title = styled.h1`
  font-size: 28px;
  font-weight: 800;

  color: white;
`;

export const SettingsButton = styled.div`
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

export const ProfileHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-bottom: 24px;
`;

export const Avatar = styled.div`
  width: 84px;
  height: 84px;

  border-radius: 999px;

  background: linear-gradient(135deg, #ff5c2b, #ff8c5a);

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 24px;
  font-weight: 700;

  color: white;
`;

export const UserName = styled.div`
  margin-top: 16px;

  font-size: 20px;
  font-weight: 700;

  color: white;
`;

export const UserEmail = styled.div`
  margin-top: 6px;

  font-size: 13px;

  color: #8f9098;
`;

export const StatsRow = styled.div`
  display: flex;

  gap: 12px;

  padding: 0 16px 24px;
`;

export const StatCard = styled.div`
  flex: 1;

  background: #18181e;

  border-radius: 20px;

  padding: 16px;

  border: 1px solid rgba(255, 255, 255, 0.04);

  text-align: center;
`;

export const StatValue = styled.div`
  font-size: 20px;
  font-weight: 800;

  color: white;
`;

export const StatLabel = styled.div`
  margin-top: 6px;

  font-size: 11px;

  color: #8f9098;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1px;

  margin: 0 16px 16px;

  background: rgba(255, 255, 255, 0.03);

  border-radius: 20px;

  overflow: hidden;
`;

export const MenuItem = styled.div<ItemProps>`
  height: 58px;

  background: #18181e;

  padding: 0 18px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  color: white;

  ${({ danger }) =>
    danger &&
    css`
      color: #ff5c2b;
    `}
`;

export const MenuLeft = styled.div`
  display: flex;
  align-items: center;

  gap: 14px;
`;

export const MenuLabel = styled.div`
  font-size: 14px;
  font-weight: 600;
`;
