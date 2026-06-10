import { PageHeader } from '../../../components/layout/PageHeader/PageHeader';

import {
  IconTruck,
  IconCash,
  IconBell,
  IconPackage,
} from '@tabler/icons-react';

import {
  AppShell,
} from '../../../components/layout/AppShell/AppShell';

import {
  MarkRead,

  FilterTabs,
  FilterTab,

  NotificationSection,
  SectionTitle,

  NotificationCard,
  HighlightBar,

  NotificationLeft,
  NotificationIcon,

  NotificationContent,
  NotificationTitle,
  NotificationDescription,
  NotificationTime,

} from './Notification.styles';

export const Notification = () => {

  return (
    <AppShell showBottomNav={false}>
      <PageHeader title="Notifications">
        <MarkRead>Mark all read</MarkRead>
      </PageHeader>

      <FilterTabs>
        <FilterTab active>All</FilterTab>

        <FilterTab>Delivery</FilterTab>

        <FilterTab>Payment</FilterTab>

        <FilterTab>System</FilterTab>
      </FilterTabs>

      {/* TODAY */}

      <NotificationSection>
        <SectionTitle>Today</SectionTitle>

        {/* NOTIFICATION */}

        <NotificationCard unread>
          <HighlightBar />

          <NotificationLeft>
            <NotificationIcon color="orange">
              <IconTruck size={18} />
            </NotificationIcon>

            <NotificationContent>
              <NotificationTitle>Parcel In Transit</NotificationTitle>

              <NotificationDescription>
                Parcel PKG-284729 is currently on delivery.
              </NotificationDescription>

              <NotificationTime>2 mins ago</NotificationTime>
            </NotificationContent>
          </NotificationLeft>
        </NotificationCard>

        {/* NOTIFICATION */}

        <NotificationCard>
          <NotificationLeft>
            <NotificationIcon color="green">
              <IconCash size={18} />
            </NotificationIcon>

            <NotificationContent>
              <NotificationTitle>COD Payment Received</NotificationTitle>

              <NotificationDescription>
                26,500 Ks has been added to your wallet.
              </NotificationDescription>

              <NotificationTime>1 hour ago</NotificationTime>
            </NotificationContent>
          </NotificationLeft>
        </NotificationCard>
      </NotificationSection>

      {/* YESTERDAY */}

      <NotificationSection>
        <SectionTitle>Yesterday</SectionTitle>

        <NotificationCard>
          <NotificationLeft>
            <NotificationIcon color="purple">
              <IconPackage size={18} />
            </NotificationIcon>

            <NotificationContent>
              <NotificationTitle>Delivery Completed</NotificationTitle>

              <NotificationDescription>
                Shipment PKG-918271 successfully delivered.
              </NotificationDescription>

              <NotificationTime>Yesterday</NotificationTime>
            </NotificationContent>
          </NotificationLeft>
        </NotificationCard>

        <NotificationCard>
          <NotificationLeft>
            <NotificationIcon color="blue">
              <IconBell size={18} />
            </NotificationIcon>

            <NotificationContent>
              <NotificationTitle>New System Update</NotificationTitle>

              <NotificationDescription>
                SwiftParcel system maintenance completed.
              </NotificationDescription>

              <NotificationTime>Yesterday</NotificationTime>
            </NotificationContent>
          </NotificationLeft>
        </NotificationCard>
      </NotificationSection>
    </AppShell>
  );
};