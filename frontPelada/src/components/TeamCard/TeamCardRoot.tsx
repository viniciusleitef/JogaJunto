import { ReactNode } from 'react';
import { TeamCardContainer } from './styles';

interface TeamCardRootProps {
  children: ReactNode;
}

export function TeamCardRoot({ children }: TeamCardRootProps) {
  return <TeamCardContainer>{children}</TeamCardContainer>;
}
