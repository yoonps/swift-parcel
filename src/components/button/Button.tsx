import type { ButtonHTMLAttributes } from 'react';
import { StyledButton } from './Button.styles';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
}

export const Button = ({
  children,
  variant = 'primary',
  fullWidth = true,
  ...props
}: Props) => {
  return (
    <StyledButton
      variant={variant}
      fullWidth={fullWidth}
      {...props}
    >
      {children}
    </StyledButton>
  );
};