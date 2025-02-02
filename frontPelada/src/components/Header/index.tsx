import { HeaderContainer } from './styles';
import { IoMenu } from 'react-icons/io5';

export function Header() {
  return (
    <HeaderContainer>
      <div className="centralizer">
        <div className="logo">Logo</div>

        <nav>
          <p>Home Page</p>

          <p>Game Stats</p>

          <p>Players Profiles</p>

          <p>More Options</p>
        </nav>

        <div className="join">Join</div>

        <div className="responsiveMenu">
          <IoMenu size={36} />
        </div>
      </div>
    </HeaderContainer>
  );
}
