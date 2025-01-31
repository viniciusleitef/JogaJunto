import { ReactNode } from 'react';
import { CardContainer } from './styles';
interface FeatureCardRootProps {
  children: ReactNode;
}

export function FeatureCardRoot({ children }: FeatureCardRootProps) {
    return (
        <CardContainer>
            {children}
        </CardContainer>
    )
}
