import { IconType } from 'react-icons';

interface FeatureCardIconProps {
  icon: IconType;
  size: number;
}

export function FeatureCardIcon({ icon: Icon, size }: FeatureCardIconProps) {
  return (
    <div>
      <Icon size={size}/>
    </div>
  );
}
