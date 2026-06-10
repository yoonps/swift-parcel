import {
  IconSearch,
  IconMapPin,
  IconAdjustmentsHorizontal,
} from "@tabler/icons-react";

import { AppShell } from "../../../components/layout/AppShell/AppShell";

import {
  HeaderRow,
  HeaderActions,
  Title,
  FilterButton,
  SearchBar,
  SearchInput,
  TrackingList,
  TrackingCard,
  TrackingTop,
  TrackingId,
  Status,
  TrackingRoute,
  TrackingMeta,
} from "./Tracking.styles";

export const Tracking = () => {
  return (
    <AppShell>
      <HeaderRow>
        <Title>Tracking</Title>

        <HeaderActions>
          <FilterButton>
            <IconAdjustmentsHorizontal size={18} />
          </FilterButton>
        </HeaderActions>
      </HeaderRow>

      <SearchBar>
        <IconSearch size={18} />

        <SearchInput placeholder="Track parcel ID" />
      </SearchBar>

      <TrackingList>
        <TrackingCard>
          <TrackingTop>
            <TrackingId>PKG-284729</TrackingId>

            <Status>In Transit</Status>
          </TrackingTop>

          <TrackingRoute>
            <IconMapPin size={14} />
            Yangon → Mandalay
          </TrackingRoute>

          <TrackingMeta>Updated 2 mins ago</TrackingMeta>
        </TrackingCard>
      </TrackingList>
    </AppShell>
  );
};
