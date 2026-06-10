import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  gap: 8px;

  margin-top: 28px;
`;

export const Dot = styled.div`
  width: 8px;
  height: 8px;

  border-radius: 999px;

  background: rgba(255, 255, 255, 0.18);
`;

export const ActiveDot = styled.div`
  width: 26px;
  height: 8px;

  border-radius: 999px;

  background: #ff5c2b;
`;
