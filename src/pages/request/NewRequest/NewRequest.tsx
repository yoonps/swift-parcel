import { AppShell } from "../../../components/layout/AppShell/AppShell";

import { PageHeader } from "../../../components/layout/PageHeader/PageHeader";

import { Button } from "../../../components/button/Button";

import { BottomAction } from "../../../components/bottomAction/BottomAction.styles";

import {
  Section,
  SectionTitle,
  InputGroup,
  Label,
  Input,
  Row,
  Half,
  MethodRow,
  MethodTitle,
  MethodCard,
  MethodDescription
} from "./NewRequest.styles";

export const NewRequest = () => {

  return (
    <AppShell showBottomNav={false}>
      <PageHeader title="New Request" />
        <Section>
          <SectionTitle>Pickup Details</SectionTitle>

          <InputGroup>
            <Label>Sender Name</Label>

            <Input placeholder="Enter sender name" />
          </InputGroup>

          <InputGroup>
            <Label>Pickup Address</Label>

            <Input placeholder="Pickup address" />
          </InputGroup>
        </Section>

        <Section>
          <SectionTitle>Receiver Details</SectionTitle>

          <InputGroup>
            <Label>Receiver Name</Label>

            <Input placeholder="Receiver name" />
          </InputGroup>

          <InputGroup>
            <Label>Delivery Address</Label>

            <Input placeholder="Delivery address" />
          </InputGroup>
        </Section>

        <Section>
          <SectionTitle>Parcel Info</SectionTitle>

          <Row>
            <Half>
              <InputGroup>
                <Label>Weight</Label>

                <Input placeholder="0.0 kg" />
              </InputGroup>
            </Half>

            <Half>
              <InputGroup>
                <Label>COD</Label>

                <Input placeholder="0 Ks" />
              </InputGroup>
            </Half>
          </Row>

          <InputGroup>
            <Label>Parcel Description</Label>

            <Input placeholder="Parcel detail" />
          </InputGroup>
        </Section>
        <Section>
          <SectionTitle>Delivery Method</SectionTitle>

          <MethodRow>
            <MethodCard active>
              <MethodTitle>Standard</MethodTitle>

              <MethodDescription>2-3 business days</MethodDescription>
            </MethodCard>

            <MethodCard>
              <MethodTitle>Express</MethodTitle>

              <MethodDescription>Same day delivery</MethodDescription>
            </MethodCard>
          </MethodRow>
        </Section>
        <BottomAction>
          <Button>Create Request</Button>
        </BottomAction>
    </AppShell>
  );
};
