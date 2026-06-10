import styled from "styled-components";

export const HomeBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 4px 16px 14px;
`;

export const HomeBarLeft = styled.div`
  display: flex;
  align-items: center;

  gap: 10px;
`;

export const Avatar = styled.div`
  width: 36px;
  height: 36px;

  border-radius: 999px;

  background: linear-gradient(135deg, #ff5c2b, #ff8c5a);

  display: flex;
  align-items: center;
  justify-content: center;

  color: white;

  font-size: 13px;
  font-weight: 700;
`;

export const GreetingWrap = styled.div``;

export const Greeting = styled.div`
  font-size: 11px;

  color: #8f9098;
`;

export const UserName = styled.div`
  margin-top: 2px;

  font-size: 15px;
  font-weight: 700;

  color: white;
`;

export const NotificationButton = styled.div`
  width: 36px;
  height: 36px;

  border-radius: 10px;

  background: #202028;

  border: 1px solid rgba(255, 255, 255, 0.05);

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;

  color: #8f9098;
`;

export const NotificationDot = styled.div`
  position: absolute;

  top: 9px;
  right: 9px;

  width: 7px;
  height: 7px;

  border-radius: 999px;

  background: #ff5c2b;
`;

export const HeroCard = styled.div`
  margin: 0 16px 14px;

  background: linear-gradient(135deg, #ff5c2b, #ff8c5a);

  border-radius: 20px;

  padding: 20px;
`;

export const HeroLabel = styled.div`
  font-size: 11px;
  font-weight: 600;

  color: rgba(255, 255, 255, 0.75);
`;

export const HeroTitle = styled.div`
  margin-top: 10px;

  font-size: 24px;
  font-weight: 800;

  line-height: 1.2;

  color: white;

  max-width: 220px;
`;

export const HeroSubtitle = styled.div`
  margin-top: 10px;

  font-size: 12px;

  line-height: 1.6;

  color: rgba(255, 255, 255, 0.72);

  max-width: 220px;
`;

export const HeroButton = styled.div`
  margin-top: 16px;

  width: fit-content;

  padding: 10px 16px;

  border-radius: 999px;

  background: white;

  color: #ff5c2b;

  font-size: 12px;
  font-weight: 700;
`;

export const CODCard = styled.div`
  margin: 0 16px 14px;

  background: #18181e;

  border: 1px solid rgba(255, 255, 255, 0.05);

  border-radius: 12px;

  padding: 12px 15px;

  display: flex;
  align-items: center;

  gap: 12px;
`;

export const CODIcon = styled.div`
  width: 36px;
  height: 36px;

  border-radius: 10px;

  background: rgba(255, 92, 43, 0.12);

  display: flex;
  align-items: center;
  justify-content: center;

  color: #ff5c2b;

  font-size: 12px;
  font-weight: 700;
`;

export const CODInfo = styled.div`
  flex: 1;
`;

export const CODLabel = styled.div`
  font-size: 11px;

  color: #8f9098;
`;

export const CODAmount = styled.div`
  margin-top: 3px;

  font-size: 16px;
  font-weight: 700;

  color: white;
`;

export const CODAction = styled.div`
  font-size: 11px;
  font-weight: 600;

  color: #ff5c2b;
`;

export const StatsGrid = styled.div`
  display: grid;

  grid-template-columns: repeat(3, 1fr);

  gap: 9px;

  margin: 0 16px 14px;
`;

export const StatCard = styled.div`
  background: #18181e;

  border: 1px solid rgba(255, 255, 255, 0.05);

  border-radius: 12px;

  padding: 12px;
`;

export const StatValue = styled.div`
  font-size: 18px;
  font-weight: 700;

  color: white;
`;

export const StatLabel = styled.div`
  margin-top: 6px;

  font-size: 11px;

  color: #8f9098;
`;

export const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 16px 12px;
`;

export const SectionTitle = styled.div`
  font-size: 14px;
  font-weight: 700;

  color: white;
`;

export const SeeAllButton = styled.button`
  background: transparent;

  border: none;

  color: #ff5c2b;

  font-size: 11px;
  font-weight: 600;

  cursor: pointer;
`;

export const ShipmentCard = styled.div`
  margin: 0 16px 14px;

  background: #18181e;

  border: 1px solid rgba(255, 255, 255, 0.05);

  border-radius: 20px;

  padding: 16px;
`;

export const ShipmentTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ShipmentTracking = styled.div`
  font-size: 11px;
  font-weight: 600;

  color: #8f9098;
`;

export const ShipmentStatus = styled.div`
  padding: 6px 10px;

  border-radius: 999px;

  background: rgba(155, 109, 255, 0.12);

  color: #9b6dff;

  font-size: 10px;
  font-weight: 700;
`;

export const ShipmentName = styled.div`
  margin-top: 10px;

  font-size: 14px;
  font-weight: 700;

  color: white;
`;

export const ShipmentAddress = styled.div`
  margin-top: 4px;

  font-size: 12px;

  color: #8f9098;
`;

export const ShipmentDivider = styled.div`
  height: 1px;

  background: rgba(255, 255, 255, 0.05);

  margin: 12px 0;
`;

export const ShipmentMeta = styled.div`
  display: flex;

  gap: 14px;
`;

export const ShipmentMetaItem = styled.div`
  font-size: 10px;

  color: #8f9098;
`;
