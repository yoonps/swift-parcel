import { IconCheck } from "@tabler/icons-react";

import { useNavigate } from "react-router-dom";

import { AppShell } from "../../../components/layout/AppShell/AppShell";

import { Button } from "../../../components/button/Button";

import { BottomAction } from "../../../components/bottomAction/BottomAction.styles";

import {
  Container,
  SuccessIcon,
  Title,
  Description,
  DetailCard,
  DetailRow,
  DetailLabel,
  DetailValue,
  SecondaryButton
} from "./WithdrawSuccess.styles";

export const WithdrawSuccess = () => {
  const navigate = useNavigate();

  return (
    <AppShell showBottomNav={false}>
      <Container>
        <SuccessIcon>
          <IconCheck size={40} />
        </SuccessIcon>

        <Title>Withdrawal Successful</Title>

        <Description>
          Your withdrawal request has been submitted successfully.
        </Description>

        <DetailCard>
          <DetailRow>
            <DetailLabel>Amount</DetailLabel>

            <DetailValue>50,000 Ks</DetailValue>
          </DetailRow>

          <DetailRow>
            <DetailLabel>Transfer Fee</DetailLabel>

            <DetailValue>500 Ks</DetailValue>
          </DetailRow>

          <DetailRow>
            <DetailLabel>Bank</DetailLabel>

            <DetailValue>KBZ Bank</DetailValue>
          </DetailRow>

          <DetailRow>
            <DetailLabel>Account</DetailLabel>

            <DetailValue>****1234</DetailValue>
          </DetailRow>

          <DetailRow>
            <DetailLabel>Reference ID</DetailLabel>

            <DetailValue>WD-202506001</DetailValue>
          </DetailRow>

          <DetailRow>
            <DetailLabel>Date</DetailLabel>

            <DetailValue>02 Jun 2026</DetailValue>
          </DetailRow>
        </DetailCard>

        <BottomAction>
          <Button fullWidth onClick={() => navigate("/wallet/withdraw")}>
            View Transactions
          </Button>

          <SecondaryButton onClick={() => navigate("/home")}>
            Back To Home
          </SecondaryButton>
        </BottomAction>
      </Container>
    </AppShell>
  );
};
