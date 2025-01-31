import { FeatureSectionContainer } from './styles';
import { FeatureCard } from '../../../../components/FeatureCard';
import { FeatureCardContent } from '../../../../components/FeatureCard/FeatureCardContent';
import { FeatureCardIcon } from '../../../../components/FeatureCard/FeatureCardIcon';

import { FaParachuteBox } from 'react-icons/fa6';
import { FeatureCardAction } from '../../../../components/FeatureCard/FeatureCardAction';

export function FeatureSection() {
  return (
    <FeatureSectionContainer>
      <div className="centralizer">
        <h1>
          Desbloqueie sua experiência de futebol: crie, gerencie e jogue sem
          esforço
        </h1>

        <div className="cardsBox">
          <FeatureCard.Root>
            <FeatureCardIcon icon={FaParachuteBox} size={30} />
            <FeatureCardContent
              title="Junte-se à comunidade: crie sua conta e comece a jogar hoje"
              text="Easily create an account to access all features and connect with players."
            />
            <FeatureCardAction
              text="Click-me"
              onAction={() => console.log('hello')}
            />
          </FeatureCard.Root>

          <FeatureCard.Root>
            <FeatureCardIcon icon={FaParachuteBox} size={30} />
            <FeatureCardContent
              title="Projete suas partidas: crie jogos com regras e detalhes personalizados"
              text="Craft your unique games, setting rules and tracking key match details."
            />
            <FeatureCardAction
              text="Click-me"
              onAction={() => console.log('hello')}
            />
          </FeatureCard.Root>

          <FeatureCard.Root>
            <FeatureCardIcon icon={FaParachuteBox} size={30} />
            <FeatureCardContent
              title="Analyze Performance: View Detailed Game Statistics and Insights"
              text="Access comprehensive statistics to evaluate performance and improve your game."
            />
            <FeatureCardAction
              text="Click-me"
              onAction={() => console.log('hello')}
            />
          </FeatureCard.Root>
        </div>
      </div>
    </FeatureSectionContainer>
  );
}
