import { IconChevronLeft } from "@tabler/icons-react";

import { useNavigate } from "react-router-dom";

import { AppShell } from "../../../components/layout/AppShell/AppShell";

import { Button } from "../../../components/button/Button";

import {
  HeaderRow,
  BackButton,
  Title,
  BalanceCard,
  BalanceLabel,
  BalanceAmount,
  SummaryCard,
  SummaryRow,
  SummaryLabel,
  SummaryValue,
  Tabs,
  Tab,
  SectionTitle,
  TransactionList,
  TransactionCard,
  TransactionTitle,
  TransactionAmount,
  TransactionDate,
  BottomAction,
} from "./WithdrawCOD.styles";

export const WithdrawCOD = () => {
  const navigate = useNavigate();

  return (
    <AppShell showBottomNav={false}>
      <HeaderRow>
        <BackButton onClick={() => navigate(-1)}>
          <IconChevronLeft size={18} />
        </BackButton>

        <Title>Withdraw COD</Title>

        <div style={{ width: 38 }} />
      </HeaderRow>

      <BalanceCard>
        <BalanceLabel>Available Balance</BalanceLabel>

        <BalanceAmount>120,000 MMK</BalanceAmount>
      </BalanceCard>

      <SummaryCard>
        <SummaryRow>
          <SummaryLabel>COD In</SummaryLabel>

          <SummaryValue positive>+220,000</SummaryValue>
        </SummaryRow>

        <SummaryRow>
          <SummaryLabel>Fee Out</SummaryLabel>

          <SummaryValue>-12,000</SummaryValue>
        </SummaryRow>

        <SummaryRow>
          <SummaryLabel>Net</SummaryLabel>

          <SummaryValue positive>208,000</SummaryValue>
        </SummaryRow>
      </SummaryCard>

      <Tabs>
        <Tab active>All</Tab>

        <Tab>COD</Tab>

        <Tab>Fee</Tab>

        <Tab>Withdraw</Tab>
      </Tabs>

      <SectionTitle>Recent Transactions</SectionTitle>

      <TransactionList>
        <TransactionCard>
          <div>
            <TransactionTitle>COD Received</TransactionTitle>

            <TransactionDate>Today</TransactionDate>
          </div>

          <TransactionAmount positive>+20,000</TransactionAmount>
        </TransactionCard>
      </TransactionList>
      <BottomAction>
        <Button
          fullWidth
          onClick={() => {
            navigate('/wallet/withdrawRequest')
          }}
        >
          Withdraw Balance
        </Button>
      </BottomAction>
    </AppShell>
  );
};
