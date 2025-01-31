import { CallToActionContainer, CallToActionContent, CallToActionImg } from './styles';
import { Button } from '../HeroSection/styles';

export function CallToActionSection() {
  return (
    <CallToActionContainer>
      <div className="centralizer">
        <CallToActionImg></CallToActionImg>

        <CallToActionContent>
            <h1>Entre no Jogo Hoje!</h1>
            <p>Crie sua conta agora para gerenciar e acompanhar todos os seus jogos de futebol sem esforço.</p>
            <div className="buttonsBox">
                <Button background='black'>Entrar</Button>
                <Button color='black'>Registrar</Button>
            </div>
        </CallToActionContent>
      </div>
    </CallToActionContainer>
  );
}
