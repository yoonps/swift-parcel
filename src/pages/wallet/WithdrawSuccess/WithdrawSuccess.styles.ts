import styled from "styled-components";

export const Container = styled.div`
  padding: 40px 16px 34px;

  display: flex;
  flex-direction: column;

  align-items: center;
`;

export const SuccessIcon = styled.div`
  width: 100px;
  height: 100px;

  border-radius: 999px;

  background: rgba(38, 217, 138, 0.12);

  border: 1px solid rgba(38, 217, 138, 0.18);

  display: flex;
  align-items: center;
  justify-content: center;

  color: #26d98a;

  margin-bottom: 24px;
`;

export const Title = styled.h1`
  color: white;

  font-size: 24px;
  font-weight: 800;

  text-align: center;
`;

export const Description = styled.p`
  color: #8f9098;

  text-align: center;

  font-size: 14px;

  margin-top: 10px;
  margin-bottom: 28px;
`;

export const DetailCard = styled.div`
  width: 100%;

  background: #18181e;

  border-radius: 24px;

  border: 1px solid rgba(255, 255, 255, 0.04);

  padding: 20px;

  margin-bottom: 180px;
`;

export const DetailRow = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 12px 0;

  &:not(:last-child) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.04);
  }
`;

export const DetailLabel = styled.div`
  color: #8f9098;

  font-size: 13px;
`;

export const DetailValue = styled.div`
  color: white;

  font-size: 13px;
  font-weight: 700;
`;

export const SecondaryButton = styled.button`
  height: 52px;

  border: none;

  border-radius: 16px;

  background: rgba(255, 255, 255, 0.04);

  color: white;

  font-size: 14px;
  font-weight: 600;

  cursor: pointer;

  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
  }

  &:active {
    transform: scale(0.98);
  }
`;
