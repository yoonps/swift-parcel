import {
  IconChevronLeft,
  IconChevronRight,
  IconMoon,
  IconLanguage,
  IconTextSize,
  IconBell,
  IconMail,
  IconPackage,
  IconHelpCircle,
  IconShield,
} from "@tabler/icons-react";

import { useNavigate } from "react-router-dom";

import { AppShell } from "../../../components/layout/AppShell/AppShell";

import {
  HeaderRow,
  BackButton,
  Title,
  SectionTitle,
  Section,
  Row,
  RowLeft,
  RowContent,
  RowLabel,
  RowDescription,
  Toggle,
} from "./Settings.styles";

export const Settings = () => {
  const navigate = useNavigate();

  return (
    <AppShell showBottomNav={false}>
      <HeaderRow>
        <BackButton onClick={() => navigate("/profile")}>
          <IconChevronLeft size={18} />
        </BackButton>

        <Title>Settings</Title>

        <div style={{ width: 38 }} />
      </HeaderRow>

      <SectionTitle>Notifications</SectionTitle>

      <Section>
        <Row>
          <RowLeft>
            <IconBell size={18} />

            <RowContent>
              <RowLabel>Push Notifications</RowLabel>

              <RowDescription>Receive app alerts and updates</RowDescription>
            </RowContent>
          </RowLeft>

          <Toggle />
        </Row>

        <Row>
          <RowLeft>
            <IconMail size={18} />

            <RowContent>
              <RowLabel>Email Notifications</RowLabel>

              <RowDescription>Get updates through email</RowDescription>
            </RowContent>
          </RowLeft>

          <Toggle />
        </Row>

        <Row>
          <RowLeft>
            <IconPackage size={18} />

            <RowContent>
              <RowLabel>Order Updates</RowLabel>

              <RowDescription>
                Delivery and parcel status updates
              </RowDescription>
            </RowContent>
          </RowLeft>

          <Toggle />
        </Row>
      </Section>

      <SectionTitle>Appearance</SectionTitle>

      <Section>
        <Row>
          <RowLeft>
            <IconMoon size={18} />

            <RowContent>
              <RowLabel>Dark Mode</RowLabel>

              <RowDescription>Use dark appearance</RowDescription>
            </RowContent>
          </RowLeft>

          <Toggle />
        </Row>

        <Row>
          <RowLeft>
            <IconTextSize size={18} />

            <RowContent>
              <RowLabel>Text Size</RowLabel>

              <RowDescription>Adjust application font size</RowDescription>
            </RowContent>
          </RowLeft>

          <IconChevronRight size={18} />
        </Row>
      </Section>

      <SectionTitle>Preferences</SectionTitle>

      <Section>
        <Row>
          <RowLeft>
            <IconLanguage size={18} />

            <RowContent>
              <RowLabel>Language</RowLabel>

              <RowDescription>English (US)</RowDescription>
            </RowContent>
          </RowLeft>

          <IconChevronRight size={18} />
        </Row>

        <Row>
          <RowLeft>
            <IconLanguage size={18} />

            <RowContent>
              <RowLabel>Region</RowLabel>

              <RowDescription>Myanmar</RowDescription>
            </RowContent>
          </RowLeft>

          <IconChevronRight size={18} />
        </Row>
      </Section>

      <SectionTitle>Support</SectionTitle>

      <Section>
        <Row>
          <RowLeft>
            <IconHelpCircle size={18} />

            <RowContent>
              <RowLabel>Help Center</RowLabel>

              <RowDescription>FAQs and customer support</RowDescription>
            </RowContent>
          </RowLeft>

          <IconChevronRight size={18} />
        </Row>

        <Row>
          <RowLeft>
            <IconShield size={18} />

            <RowContent>
              <RowLabel>Privacy Policy</RowLabel>

              <RowDescription>Terms and privacy information</RowDescription>
            </RowContent>
          </RowLeft>

          <IconChevronRight size={18} />
        </Row>
      </Section>
    </AppShell>
  );
};
