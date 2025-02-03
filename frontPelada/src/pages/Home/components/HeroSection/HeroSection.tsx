import { Button } from '../../../../components/Button';
import {
  HeroSectionContainer,
  HeroSectionText,
  HeroSectionImg
} from './styles';

export function HeroSection() {
  return (
    <HeroSectionContainer>
      <div className="centralizer">
        <HeroSectionText>
          <h1>Junte-se à emoção dos jogos de futebol hoje!</h1>
          <p>
            Bem-vindo ao seu centro de registro de jogos de futebol definitivo!
            Crie sua conta agora para começar a organizar e gerenciar seus jogos
            sem esforço.
          </p>

          <div className="buttonsBox">
            <Button backgroundColor="black">Registrar-se</Button>
            <Button color="black">Entrar</Button>
          </div>
        </HeroSectionText>

        <HeroSectionImg></HeroSectionImg>
      </div>
    </HeroSectionContainer>
  );
}
