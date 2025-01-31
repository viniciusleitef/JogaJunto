import { TeamCard } from '../../../../components/TeamCard';
import { TeamCardContent } from '../../../../components/TeamCard/TeamCardContent';
import { TeamCardIcon } from '../../../../components/TeamCard/TeamCardIcon';
import { TeamCardIcons } from '../../../../components/TeamCard/TeamCardIcons';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { OurTeamContainer } from './styles';

export function OurTeamSection() {
  return (
    <OurTeamContainer>
      <div className="centralizer">
        <header>
          <h1>Nosso Time</h1>
          <p>Conheça os indivíduos dedicados por trás de nossa plataforma.</p>
        </header>

        <div className="teamBox">
          <TeamCard.root>
            <TeamCardContent src='https://avatars.githubusercontent.com/u/144750077?v=4' name='Ryan Duarte' role='Desenvolvedor'/>
            <TeamCardIcons>
              <TeamCardIcon icon={FaInstagram} size={20} />
              <TeamCardIcon icon={FaLinkedin} size={20} />
              <TeamCardIcon icon={FaGithub} size={20} />
            </TeamCardIcons>
          </TeamCard.root>

          <TeamCard.root>
            <TeamCardContent src='https://avatars.githubusercontent.com/u/79729340?v=4' name='Vinícius Leite' role='CEO / Desenvolvedor'/>
            <TeamCardIcons>
              <TeamCardIcon icon={FaInstagram} size={20} />
              <TeamCardIcon icon={FaLinkedin} size={20} />
              <TeamCardIcon icon={FaGithub} size={20} />
            </TeamCardIcons>
          </TeamCard.root>

          <TeamCard.root>
            <TeamCardContent src='https://avatars.githubusercontent.com/u/57454262?v=4' name='Eduardo Henrique' role='Desenvolvedor'/>
            <TeamCardIcons>
              <TeamCardIcon icon={FaInstagram} size={20} />
              <TeamCardIcon icon={FaLinkedin} size={20} />
              <TeamCardIcon icon={FaGithub} size={20} />
            </TeamCardIcons>
          </TeamCard.root>

          
        </div>
      </div>
    </OurTeamContainer>
  );
}
