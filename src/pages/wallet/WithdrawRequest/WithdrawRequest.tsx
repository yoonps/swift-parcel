import { IconChevronLeft, IconBuildingBank } from "@tabler/icons-react";

import { useNavigate } from "react-router-dom";

import { useState } from "react";

import { AppShell } from "../../../components/layout/AppShell/AppShell";

import { Button } from "../../../components/button/Button";

import { BottomAction } from "../../../components/bottomAction/BottomAction.styles";

import {
  HeaderRow,
  BackButton,
  Title,
  BalanceCard,
  BalanceLabel,
  BalanceAmount,
  SectionTitle,
  AmountContainer,
  AmountInput,
  BackspaceButton,
  SuggestionGrid,
  SuggestionButton,
  ChangeButton,
  BankContent,
  BankCard,
  BankInfo,
  BankName,
  BankNumber,
  SummaryCard,
  SummaryRow,
  SummaryLabel,
  SummaryValue,
} from "./WithdrawRequest.styles";

export const WithdrawRequest = () => {
  const navigate = useNavigate();
  const [amount, setAmount] = useState("");

  interface SuggestionProps {
    active?: boolean;
  }

  return (
    <AppShell showBottomNav={false}>
      <HeaderRow>
        <BackButton onClick={() => navigate(-1)}>
          <IconChevronLeft size={18} />
        </BackButton>

        <Title>Withdraw Balance</Title>

        <div style={{ width: 38 }} />
      </HeaderRow>

      <BalanceCard>
        <BalanceLabel>Available Balance</BalanceLabel>

        <BalanceAmount>120,000 MMK</BalanceAmount>
      </BalanceCard>

      <SectionTitle>Withdraw Amount</SectionTitle>

      <AmountContainer>
        <AmountInput
          type="text"
          inputMode="numeric"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value.replace(/\D/g, ""))}
        />

        {amount && (
          <BackspaceButton onClick={() => setAmount(amount.slice(0, -1))}>
            ⌫
          </BackspaceButton>
        )}
      </AmountContainer>

      <SuggestionGrid>
        <SuggestionButton
          active={amount === "1000"}
          onClick={() => setAmount("1000")}
        >
          1,000 Ks
        </SuggestionButton>

        <SuggestionButton
          active={amount === "5000"}
          onClick={() => setAmount("5000")}
        >
          5,000 Ks
        </SuggestionButton>

        <SuggestionButton
          active={amount === "10000"}
          onClick={() => setAmount("10000")}
        >
          10,000 Ks
        </SuggestionButton>

        <SuggestionButton
          active={amount === "50000"}
          onClick={() => setAmount("50000")}
        >
          50,000 Ks
        </SuggestionButton>
      </SuggestionGrid>

      <SectionTitle>Bank Account</SectionTitle>

      <BankCard>
        <BankContent>
          <IconBuildingBank size={20} />

          <BankInfo>
            <BankName>KBZ Bank</BankName>

            <BankNumber>**** 1234</BankNumber>
          </BankInfo>
        </BankContent>

        <ChangeButton>Change</ChangeButton>
      </BankCard>

      <SectionTitle>Summary</SectionTitle>

      <SummaryCard>
        <SummaryRow>
          <SummaryLabel>Withdraw Amount</SummaryLabel>

          <SummaryValue>50,000 Ks</SummaryValue>
        </SummaryRow>

        <SummaryRow>
          <SummaryLabel>Transfer Fee</SummaryLabel>

          <SummaryValue>500 Ks</SummaryValue>
        </SummaryRow>

        <SummaryRow>
          <SummaryLabel>Total</SummaryLabel>

          <SummaryValue>50,500 Ks</SummaryValue>
        </SummaryRow>
      </SummaryCard>

      <BottomAction>
        <Button fullWidth onClick={() => navigate("/wallet/withdraw/success")}>
          Continue
        </Button>
      </BottomAction>
    </AppShell>
  );
};
