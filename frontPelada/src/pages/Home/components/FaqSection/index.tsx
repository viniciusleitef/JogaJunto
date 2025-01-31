import { Button } from '../HeroSection/styles';
import { FaqCard, FaqContainer } from './styles';

export function FacSection() {
  return (
    <FaqContainer>
      <div className="centralizer">
        <header>
          <h1>FAQs</h1>
          <p>
            Encontre respostas para suas perguntas sobre como usar nosso site de
            registro de jogos de futebol.
          </p>
        </header>

        <div className="questions">
          <FaqCard>
            <h3>Como criar uma conta ?</h3>
            <p>
              Para criar uma conta, clique no botão ‘Cadastre-se’. Preencha seus
              dados e envie. Você receberá um e-mail de confirmação para ativar
              sua conta.
            </p>
          </FaqCard>

          <FaqCard>
            <h3>Como criar uma jogo ?</h3>
            <p>
              Após fazer login, navegue até a seção ‘Criar jogo’. Preencha as
              informações necessárias sobre a partida. Depois de enviado, seu
              jogo será listado em seu perfil.
            </p>
          </FaqCard>

          <FaqCard>
            <h3>Quais informações são rastreadas?</h3>
            <p>
              Acompanhamos várias estatísticas de partidas, incluindo gols,
              assistências e jogadas defensivas. Isso permite analisar o
              desempenho do jogo. Você pode ver essas informações no resumo do
              jogo.
            </p>
          </FaqCard>

          <FaqCard>
            <h3>Eu posso editar os jogos ?</h3>
            <p>
              Sim, você pode editar os detalhes do jogo após a criação. Basta ir
              à sua lista de jogos e selecionar o jogo que deseja modificar.
              Faça suas alterações e salve-as.
            </p>
          </FaqCard>

          <FaqCard>
            <h3>Existe um aplicativo móvel?</h3>
            <p>
              Atualmente, não temos um aplicativo móvel. No entanto, nosso site
              está totalmente otimizado para uso móvel. Você pode acessar todos
              os recursos do navegador do seu smartphone.
            </p>
          </FaqCard>
        </div>

        <footer>
            <h1>Ainda tem dúvidas?</h1>
            <p>Entre em contato com nossa equipe de suporte para obter assistência.</p>
            <Button color='black'>Entre em contato</Button>
        </footer>
      </div>
    </FaqContainer>
  );
}
