import { FeatureCard } from '../../../../components/FeatureCard';
import { FeatureCardRoot } from '../../../../components/FeatureCard/FeatureCardRoot';
import {
  JoinUsSectionContainer,
  JoinUsSectionContent,
  JoinUsSectionImg,
} from './style.s';

export function JoinUsSection() {
  return (
    <JoinUsSectionContainer>
      <div className="centralizer">
        <JoinUsSectionContent>
          <div className='header'>
            <h1>Desbloqueie seu jogo: crie sua conta e divirta-se!</h1>
            <p>
              Criar uma conta é o primeiro passo para participar de partidas de
              futebol emocionantes. Aproveite o gerenciamento contínuo do jogo e
              acompanhe seu desempenho sem esforço.
            </p>
          </div>

          <div className="cardsBox">
            <FeatureCard.Root>
              <FeatureCard.Content
                title="Easy"
                text="Quick registration process for instant access."
                pWidth={200}
              />
            </FeatureCard.Root>

            <FeatureCardRoot>
              <FeatureCard.Content
                title="Secure"
                text="Your data is protected with top-notch security."
                pWidth={200}
              />
            </FeatureCardRoot>
          </div>
        </JoinUsSectionContent>

        <JoinUsSectionImg></JoinUsSectionImg>
      </div>
    </JoinUsSectionContainer>
  );
}
