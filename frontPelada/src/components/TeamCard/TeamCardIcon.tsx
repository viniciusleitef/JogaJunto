import { IconType } from 'react-icons';
import { TeamCardIconContainer } from './styles';

interface TeamCardIconProps {
  icon: IconType;
  size?: number;
}

export function TeamCardIcon({ icon: Icon, size }: TeamCardIconProps) {
  return (
    <TeamCardIconContainer>
      <Icon size={size} />
    </TeamCardIconContainer>
  );
}
