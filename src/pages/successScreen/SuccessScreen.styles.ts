import styled from "styled-components";

export const Container = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
`;

export const Checkmark = styled.div`
  width: 120px;
  height: 120px;

  border-radius: 40px;

  background: linear-gradient(135deg, #ff5c2b, #ff8c5a);

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 54px;
  font-weight: 700;

  color: white;

  box-shadow: 0 20px 60px rgba(255, 92, 43, 0.3);
`;

export const Title = styled.h1`
  margin-top: 36px;

  font-size: 34px;
  font-weight: 800;

  color: white;
`;

export const Subtitle = styled.p`
  margin-top: 14px;

  text-align: center;

  color: #8f9098;

  line-height: 1.7;
`;

export const BottomArea = styled.div`
  padding-top: 28px;
`;
