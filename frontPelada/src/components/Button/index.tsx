import { ReactNode } from 'react';
import { ButttonContainer } from './styles';

interface ButtonProps {
  children: ReactNode;
  backgroundColor?: string;
  color?: string;
}

export function Button({ children, backgroundColor, color }: ButtonProps) {
  return (
    <ButttonContainer backgroundColor={backgroundColor} color={color}>
      {children}
    </ButttonContainer>
  );
}
