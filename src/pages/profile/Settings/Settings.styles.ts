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

export const SectionTitle = styled.div`
  padding: 0 16px 10px;

  font-size: 12px;
  font-weight: 700;

  letter-spacing: 0.4px;

  text-transform: uppercase;

  color: #6f7078;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1px;

  margin: 0 16px 20px;

  background: rgba(255, 255, 255, 0.03);

  border-radius: 20px;

  overflow: hidden;
`;

export const Row = styled.div`
  min-height: 72px;

  background: #18181e;

  padding: 14px 18px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  color: white;
`;

export const RowLeft = styled.div`
  display: flex;
  align-items: center;

  gap: 14px;

  flex: 1;
`;

export const RowContent = styled.div`
  flex: 1;
`;

export const RowLabel = styled.div`
  font-size: 14px;
  font-weight: 600;

  color: white;
`;

export const RowDescription = styled.div`
  margin-top: 4px;

  font-size: 12px;

  line-height: 1.4;

  color: #8f9098;
`;

export const Toggle = styled.div`
  width: 46px;
  height: 28px;

  border-radius: 999px;

  background: #ff5c2b;

  position: relative;

  flex-shrink: 0;

  &::after {
    content: "";

    position: absolute;

    top: 3px;
    right: 3px;

    width: 22px;
    height: 22px;

    border-radius: 999px;

    background: white;
  }
`;
