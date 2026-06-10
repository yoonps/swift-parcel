import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.label`
  font-size: 13px;
  font-weight: 600;

  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const InputContainer = styled.div`
  height: 56px;

  background: #1a1a22;

  border-radius: 16px;

  padding: 0 18px;

  display: flex;
  align-items: center;

  transition: 0.2s ease;

  &:focus-within {
    background: #20202a;

    box-shadow: 0 0 0 2px rgba(255, 92, 43, 0.25);
  }
`;

export const StyledInput = styled.input`
  flex: 1;

  background: transparent;

  border: none;
  outline: none;

  color: white;

  font-size: 15px;

  &::placeholder {
    color: #6f7078;

    transition: opacity 0.2s ease;
  }

  &:focus::placeholder {
    opacity: 0;
  }
`;