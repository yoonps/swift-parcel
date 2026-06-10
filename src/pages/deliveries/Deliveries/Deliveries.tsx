import { IconSearch } from "@tabler/icons-react";

import { AppShell } from "../../../components/layout/AppShell/AppShell";

import {
  HeaderRow,
  Title,
  SearchButton,
  Tabs,
  Tab,
  DeliveryList,
  DeliveryCard,
  DeliveryTop,
  DeliveryId,
  Status,
  DeliveryName,
  DeliveryRoute,
  DeliveryMeta,
} from "./Deliveries.styles";

export const Deliveries = () => {
  return (
    <AppShell>
      <HeaderRow>
        <Title>Deliveries</Title>

        <SearchButton>
          <IconSearch size={18} />
        </SearchButton>
      </HeaderRow>

      <Tabs>
        <Tab active>All</Tab>

        <Tab>Pick Up</Tab>

        <Tab>To Deliver</Tab>

        <Tab>Delivered</Tab>

        <Tab>Fail to Deliver</Tab>

        <Tab>Retry</Tab>

        <Tab>Returned</Tab>
      </Tabs>

      <DeliveryList>
        <DeliveryCard>
          <DeliveryTop>
            <DeliveryId>PKG-284729</DeliveryId>

            <Status>In Transit</Status>
          </DeliveryTop>

          <DeliveryName>Macbook Pro 16”</DeliveryName>

          <DeliveryRoute>Yangon → Mandalay</DeliveryRoute>

          <DeliveryMeta>Today · Express</DeliveryMeta>
        </DeliveryCard>
      </DeliveryList>
    </AppShell>
  );
};
