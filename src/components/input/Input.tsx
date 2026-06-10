import type { InputHTMLAttributes } from 'react';

import {
  Wrapper,
  Label,
  InputContainer,
  StyledInput,
} from './Input.styles';

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input = ({
  label,
  ...props
}: InputProps) => {
  return (
    <Wrapper>
      {label && <Label>{label}</Label>}

      <InputContainer>
        <StyledInput {...props} />
      </InputContainer>
    </Wrapper>
  );
};