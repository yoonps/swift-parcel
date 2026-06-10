import styled from "styled-components";

export const TopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 4px 16px 18px;
`;

export const BackButton = styled.div`
  width: 36px;
  height: 36px;

  border-radius: 12px;

  background: #1c1c22;

  display: flex;
  align-items: center;
  justify-content: center;

  color: white;
`;

export const Title = styled.div`
  font-size: 17px;
  font-weight: 700;

  color: white;
`;

export const Section = styled.div`
  background: #18181e;

  border-radius: 20px;

  padding: 16px;

  margin-bottom: 16px;

  border: 1px solid rgba(255, 255, 255, 0.03);
`;

export const SectionTitle = styled.div`
  font-size: 14px;
  font-weight: 700;

  color: white;

  margin-bottom: 18px;
`;

export const InputGroup = styled.div`
  margin-bottom: 16px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Label = styled.div`
  margin-bottom: 8px;

  font-size: 12px;
  font-weight: 500;

  color: #8f9098;
`;

export const Input = styled.input`
  width: 100%;
  height: 52px;

  border: none;
  outline: none;

  border-radius: 14px;

  background: #202028;

  padding: 0 16px;

  color: white;

  font-size: 14px;

  transition:
    border 0.2s ease,
    background 0.2s ease,
    transform 0.12s ease;

  border: 1px solid transparent;

  &::placeholder {
    color: #6f7078;
  }

  &:focus {
    border: 1px solid rgba(255, 92, 43, 0.24);

    background: #24242c;
  }

  &:focus::placeholder {
    opacity: 0;
  }

  &:active {
    transform: scale(0.995);
  }
`;

export const Row = styled.div`
  display: flex;

  gap: 12px;
`;

export const Half = styled.div`
  flex: 1;
`;

export const MethodRow = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 82px;
`;

export const MethodCard = styled.div<{
  active?: boolean;
}>`
  flex: 1;

  padding: 16px;

  border-radius: 18px;

  background: ${({ active }) => (active ? "rgba(255,92,43,.12)" : "#202028")};

  border: 1px solid
    ${({ active }) =>
      active ? "rgba(255,92,43,.24)" : "rgba(255,255,255,.04)"};

  cursor: pointer;

  transition: all 0.2s ease;

  &:active {
    transform: scale(0.98);
  }
`;

export const MethodTitle = styled.div`
  color: white;

  font-size: 14px;
  font-weight: 700;
`;

export const MethodDescription = styled.div`
  margin-top: 6px;

  color: #8f9098;

  font-size: 12px;
`;