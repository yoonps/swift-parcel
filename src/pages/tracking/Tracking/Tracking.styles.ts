import styled, { css } from "styled-components";

interface StatusProps {
  delivered?: boolean;
}

export const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 4px 16px 18px;
`;

export const Title = styled.h1`
  font-size: 28px;
  font-weight: 800;

  letter-spacing: -0.5px;

  color: white;
`;

export const SearchBar = styled.div`
  margin: 0 16px 18px;

  height: 54px;

  border-radius: 18px;

  background: #18181e;

  border: 1px solid rgba(255, 255, 255, 0.04);

  display: flex;
  align-items: center;

  gap: 10px;

  padding: 0 16px;

  color: #6f7078;

  transition:
    border 0.2s ease,
    box-shadow 0.2s ease,
    transform 0.15s ease;

  &:focus-within {
    border: 1px solid rgba(255, 92, 43, 0.18);

    box-shadow: 0 0 0 4px rgba(255, 92, 43, 0.06);
  }

  &:active {
    transform: scale(0.995);
  }
`;

export const SearchInput = styled.input`
  flex: 1;

  border: none;
  outline: none;

  background: transparent;

  color: white;

  font-size: 14px;

  &::placeholder {
    color: #6f7078;
  }

  &:focus::placeholder {
    opacity: 0;
  }
`;

export const TrackingList = styled.div`
  display: flex;
  flex-direction: column;

  gap: 14px;

  padding: 0 16px 140px;
`;

export const TrackingCard = styled.div`
  background: #18181e;

  border-radius: 22px;

  padding: 16px;

  border: 1px solid rgba(255, 255, 255, 0.04);
`;

export const TrackingTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TrackingId = styled.div`
  font-size: 14px;
  font-weight: 700;

  color: white;
`;

export const Status = styled.div<StatusProps>`
  padding: 6px 10px;

  border-radius: 999px;

  background: rgba(155, 109, 255, 0.12);

  color: #9b6dff;

  font-size: 10px;
  font-weight: 700;

  ${({ delivered }) =>
    delivered &&
    css`
      background: rgba(38, 217, 138, 0.12);

      color: #26d98a;
    `}
`;

export const TrackingRoute = styled.div`
  margin-top: 14px;

  display: flex;
  align-items: center;

  gap: 6px;

  font-size: 13px;

  color: #8f9098;
`;

export const TrackingMeta = styled.div`
  margin-top: 12px;

  font-size: 11px;

  color: #6f7078;
`;

export const HeaderActions = styled.div`
  display: flex;
  align-items: center;

  gap: 10px;
`;

export const FilterButton = styled.div`
  width: 38px;
  height: 38px;

  border-radius: 14px;

  background: #18181e;

  border: 1px solid rgba(255, 255, 255, 0.04);

  display: flex;
  align-items: center;
  justify-content: center;

  color: #8f9098;

  transition: all 0.2s ease;

  cursor: pointer;

  &:hover {
    border: 1px solid rgba(255, 92, 43, 0.18);

    color: #ff5c2b;
  }

  &:active {
    transform: scale(0.96);
  }
`;