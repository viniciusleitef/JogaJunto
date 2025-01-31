import { TeamCardIcons } from '../TeamCard/TeamCardIcons';
import { FooterContainer } from './styles';
import { TeamCardIcon } from '../TeamCard/TeamCardIcon';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { TeamCard } from '../TeamCard';

export function Footer() {
  return (
    <FooterContainer>
      <div className="centralizer">
        <div className="header">
          <p>Logo</p>
          <div>
            <TeamCard.root>
              <TeamCardIcons>
                <TeamCardIcon icon={FaGithub} />
                <TeamCardIcon icon={FaLinkedin} />
                <TeamCardIcon icon={FaInstagram} />
              </TeamCardIcons>
            </TeamCard.root>
          </div>
        </div>

        <p>© 2025 Joga Junto. All rights reserved.</p>
      </div>
    </FooterContainer>
  );
}
