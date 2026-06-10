import styled from 'styled-components';

export const StyledButton = styled.button`
  width: 100%;
  height: 56px;

  border: none;
  outline: none;

  border-radius: 18px;

  background:
    linear-gradient(
      135deg,
      #ff5c2b,
      #ff7b54
    );

  color: white;

  font-size: 15px;
  font-weight: 700;

  cursor: pointer;

  transition: 0.2s ease;

  box-shadow:
    0 12px 30px rgba(255, 92, 43, 0.25);

  &:hover {
    transform: translateY(-1px);
  }

  &:active {
    transform: scale(0.99);
  }
`;