import { HeaderContainer } from './styles';
import { IoMenu } from 'react-icons/io5';
import { useNavigate } from 'react-router';
export function Header() {
  const navigate = useNavigate();
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

        <div className="join" onClick={ () => {navigate('/login')}}>Join</div>

        <div className="responsiveMenu">
          <IoMenu size={36} />
        </div>
      </div>
    </HeaderContainer>
  );
}
