import { ReactNode } from 'react';
import { ButttonContainer } from './styles';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  backgroundColor?: string;
  color?: string;
}

export function Button({ children, backgroundColor, color, ...rest }: ButtonProps) {
  return (
    <ButttonContainer {...rest} backgroundColor={backgroundColor} color={color}>
      {children}
    </ButttonContainer>
  );
}
