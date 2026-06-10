import { IconBell } from "@tabler/icons-react";

import { AppShell } from "../../../components/layout/AppShell/AppShell";

import { useNavigate } from "react-router-dom";

import {
  HomeBar,
  HomeBarLeft,
  Avatar,
  GreetingWrap,
  Greeting,
  UserName,
  NotificationButton,
  NotificationDot,
  HeroCard,
  HeroLabel,
  HeroTitle,
  HeroSubtitle,
  HeroButton,
  CODCard,
  CODIcon,
  CODInfo,
  CODLabel,
  CODAmount,
  CODAction,
  StatsGrid,
  StatCard,
  StatValue,
  StatLabel,
  SectionHeader,
  SectionTitle,
  SeeAllButton,
  ShipmentCard,
  ShipmentTop,
  ShipmentTracking,
  ShipmentStatus,
  ShipmentName,
  ShipmentAddress,
  ShipmentDivider,
  ShipmentMeta,
  ShipmentMetaItem,
} from "./Home.styles";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <AppShell>
      <HomeBar>
        <HomeBarLeft>
          <Avatar>J</Avatar>

          <GreetingWrap>
            <Greeting>Welcome Back</Greeting>

            <UserName>Jonathan</UserName>
          </GreetingWrap>
        </HomeBarLeft>

        <NotificationButton onClick={() => navigate("/notification")}>
          <NotificationDot />

          <IconBell size={18} />
        </NotificationButton>
      </HomeBar>

      <HeroCard>
        <HeroLabel>SwiftParcel</HeroLabel>

        <HeroTitle>Fast Delivery Across Myanmar</HeroTitle>

        <HeroSubtitle>
          Reliable logistics with realtime parcel tracking.
        </HeroSubtitle>

        <HeroButton onClick={() => navigate("/request/new")}>
          Request Pick Up
        </HeroButton>
      </HeroCard>

      <CODCard>
        <CODIcon>Ks</CODIcon>

        <CODInfo>
          <CODLabel>COD Balance</CODLabel>

          <CODAmount>26,500 Ks</CODAmount>
        </CODInfo>

        <CODAction onClick={() => navigate("/wallet/withdraw")}>Withdraw</CODAction>
      </CODCard>

      <StatsGrid>
        <StatCard>
          <StatValue>24</StatValue>

          <StatLabel>Active</StatLabel>
        </StatCard>

        <StatCard>
          <StatValue>148</StatValue>

          <StatLabel>Delivered</StatLabel>
        </StatCard>

        <StatCard>
          <StatValue>12</StatValue>

          <StatLabel>Pending</StatLabel>
        </StatCard>
      </StatsGrid>

      <SectionHeader>
        <SectionTitle>Recent Activities</SectionTitle>

        <SeeAllButton onClick={() => navigate("/deliveries")}>
          See all
        </SeeAllButton>
      </SectionHeader>

      <ShipmentCard>
        <ShipmentTop>
          <ShipmentTracking>PKG-284729</ShipmentTracking>

          <ShipmentStatus>In Transit</ShipmentStatus>
        </ShipmentTop>

        <ShipmentName>Macbook Pro 16”</ShipmentName>

        <ShipmentAddress>Yangon → Mandalay</ShipmentAddress>

        <ShipmentDivider />

        <ShipmentMeta>
          <ShipmentMetaItem>Today</ShipmentMetaItem>

          <ShipmentMetaItem>Express</ShipmentMetaItem>

          <ShipmentMetaItem>COD</ShipmentMetaItem>
        </ShipmentMeta>
      </ShipmentCard>
    </AppShell>
  );
};
