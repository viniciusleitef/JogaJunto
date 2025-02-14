import { Button } from '../../components/Button';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { HeroSection } from './styles';
import { useNavigate } from 'react-router';

export function Hub() {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <HeroSection>
        <div className="centralizer">
          <h1>Bem vindo ao seu Hub de jogos de Futebol</h1>
          <p>
            Junte-se à emoção do futebol criando e gerenciando seus jogos. Fique
            conectado com suas partidas e estatísticas favoritas em um só lugar.
          </p>
          <div className="buttonsBox">
            <Button color="white" backgroundColor='black' onClick={() => navigate('/createGame/name')}>Criar jogo</Button>
            <Button color='black'>Ver jogos</Button>
          </div>
        </div>
      </HeroSection>
      <Footer />
    </>
  );
}
