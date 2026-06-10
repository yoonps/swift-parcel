import {
  IconChevronRight,
  IconMapPin,
  IconCreditCard,
  IconBell,
  IconMoon,
  IconArchive,
  IconLogout,
  IconUser,
  IconSettings,
} from "@tabler/icons-react";

import { useNavigate } from "react-router-dom";

import { AppShell } from "../../../components/layout/AppShell/AppShell";

import {
  HeaderRow,
  Title,
  SettingsButton,
  ProfileHeader,
  Avatar,
  UserName,
  UserEmail,
  StatsRow,
  StatCard,
  StatValue,
  StatLabel,
  Section,
  MenuItem,
  MenuLeft,
  MenuLabel,
} from "./Profile.styles";

export const Profile = () => {
  const navigate = useNavigate();

  return (
    <AppShell>
      <HeaderRow>
        <Title>Profile</Title>

        <SettingsButton onClick={() => navigate("/settings")}>
          <IconSettings size={18} />
        </SettingsButton>
      </HeaderRow>

      <ProfileHeader>
        <Avatar>JD</Avatar>

        <UserName>John Doe</UserName>

        <UserEmail>johndoe@gmail.com</UserEmail>
      </ProfileHeader>

      <StatsRow>
        <StatCard>
          <StatValue>128</StatValue>

          <StatLabel>Deliveries</StatLabel>
        </StatCard>

        <StatCard>
          <StatValue>94</StatValue>

          <StatLabel>Completed</StatLabel>
        </StatCard>

        <StatCard>
          <StatValue>12</StatValue>

          <StatLabel>Archive</StatLabel>
        </StatCard>
      </StatsRow>

      <Section>
        <MenuItem>
          <MenuLeft>
            <IconUser size={18} />

            <MenuLabel>Edit Profile</MenuLabel>
          </MenuLeft>

          <IconChevronRight size={18} />
        </MenuItem>

        <MenuItem>
          <MenuLeft>
            <IconMapPin size={18} />

            <MenuLabel>Saved Addresses</MenuLabel>
          </MenuLeft>

          <IconChevronRight size={18} />
        </MenuItem>

        <MenuItem>
          <MenuLeft>
            <IconCreditCard size={18} />

            <MenuLabel>Payment Methods</MenuLabel>
          </MenuLeft>

          <IconChevronRight size={18} />
        </MenuItem>
      </Section>

      <Section>
        <MenuItem>
          <MenuLeft>
            <IconBell size={18} />

            <MenuLabel>Notifications</MenuLabel>
          </MenuLeft>

          <IconChevronRight size={18} />
        </MenuItem>

        <MenuItem>
          <MenuLeft>
            <IconMoon size={18} />

            <MenuLabel>Appearance</MenuLabel>
          </MenuLeft>

          <IconChevronRight size={18} />
        </MenuItem>

        <MenuItem>
          <MenuLeft>
            <IconArchive size={18} />

            <MenuLabel>Archive</MenuLabel>
          </MenuLeft>

          <IconChevronRight size={18} />
        </MenuItem>
      </Section>

      <Section>
        <MenuItem danger>
          <MenuLeft>
            <IconLogout size={18} />

            <MenuLabel>Sign Out</MenuLabel>
          </MenuLeft>
        </MenuItem>
      </Section>
    </AppShell>
  );
};
