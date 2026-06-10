import styled from "styled-components";

export const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 4px 16px 24px;
`;

export const BackButton = styled.div`
  width: 38px;
  height: 38px;

  border-radius: 14px;

  background: #18181e;

  border: 1px solid rgba(255, 255, 255, 0.04);

  display: flex;
  align-items: center;
  justify-content: center;

  color: white;
`;

export const Title = styled.h1`
  font-size: 20px;
  font-weight: 700;

  color: white;
`;

export const BalanceCard = styled.div`
  margin: 0 16px 20px;

  padding: 24px;

  border-radius: 24px;

  background: linear-gradient(135deg, #ff5c2b, #ff8c5a);
`;

export const BalanceLabel = styled.div`
  font-size: 13px;

  color: rgba(255, 255, 255, 0.85);
`;

export const BalanceAmount = styled.div`
  margin-top: 8px;

  font-size: 32px;
  font-weight: 800;

  color: white;
`;

export const SectionTitle = styled.div`
  padding: 0 16px 10px;

  font-size: 14px;
  font-weight: 700;

  color: white;
`;

export const AmountContainer = styled.div`

  margin:
    0
    16px
    18px;

  height: 56px;

  border-radius: 18px;

  background: #18181E;

  border:
    1px solid rgba(255,255,255,.04);

  display: flex;
  align-items: center;

  padding:
    0
    16px;
`;

export const AmountInput = styled.input`

  flex: 1;

  border: none;
  outline: none;

  background: transparent;

  color: white;

  font-size: 16px;

  &::placeholder {

    color: #6F7078;
  }

  &:focus::placeholder {

    opacity: 0;
  }
`;

export const BackspaceButton = styled.button`

  border: none;
  background: transparent;

  color: #8F9098;

  font-size: 18px;

  cursor: pointer;

  width: 36px;
  height: 36px;

  border-radius: 10px;

  transition: all .2s ease;

  &:hover {

    background:
      rgba(255,255,255,.04);
  }

  &:active {

    transform: scale(.94);
  }
`;

export const SuggestionGrid = styled.div`
  display: grid;

  grid-template-columns: repeat(3, 1fr);

  gap: 10px;

  padding: 0 16px 24px;
`;

export const SuggestionButton =
styled.div<SuggestionProps>`

  height: 44px;

  border-radius: 14px;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  transition: all .2s ease;

  background:
    ${({ active }) =>
      active
        ? 'rgba(255,92,43,.12)'
        : '#18181E'};

  border:
    1px solid
    ${({ active }) =>
      active
        ? 'rgba(255,92,43,.2)'
        : 'rgba(255,255,255,.04)'};

  color:
    ${({ active }) =>
      active
        ? '#FF5C2B'
        : 'white'};

  font-size: 13px;
  font-weight: 600;

  &:active {
    transform: scale(.96);
  }
`;

export const ChangeButton = styled.button`

  border:none;

  background:transparent;

  color:#FF5C2B;

  font-size:13px;
  font-weight:700;

  cursor:pointer;

  padding:0;

  &:hover {

    opacity:.8;
  }
`;

export const BankCard = styled.div`

  margin:
    0
    16px
    20px;

  padding: 18px;

  border-radius: 20px;

  background: #18181E;

  border:
    1px solid rgba(255,255,255,.04);

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BankContent = styled.div`

  display:flex;
  align-items:center;

  gap:14px;
`;

export const BankInfo = styled.div``;

export const BankName = styled.div`
  font-size: 14px;
  font-weight: 700;

  color: white;
`;

export const BankNumber = styled.div`
  margin-top: 4px;

  font-size: 12px;

  color: #8f9098;
`;

export const SummaryCard = styled.div`
  margin: 0 16px 180px;

  padding: 18px;

  border-radius: 20px;

  background: #18181e;
`;

export const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 10px 0;
`;

export const SummaryLabel = styled.div`
  color: #8f9098;

  font-size: 14px;
`;

export const SummaryValue = styled.div`
  color: white;

  font-size: 14px;
  font-weight: 700;
`;
