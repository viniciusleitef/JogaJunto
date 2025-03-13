import { HeaderContainer } from './styles';
import { IoMenu } from 'react-icons/io5';
import { useNavigate } from 'react-router';
import { useAuth } from '../../hooks/useAuth';

interface HeaderProps {
  joinBtn?: boolean;
}

export function Header({ joinBtn }: HeaderProps) {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

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

        {isAuthenticated && joinBtn == undefined ? (
          <div>Profile</div>
        ) : (
          <div
            className="join"
            onClick={() => {
              navigate('/login');
            }}
          >
            Join
          </div>
        )}

        <div className="responsiveMenu">
          <IoMenu size={36} />
        </div>
      </div>
    </HeaderContainer>
  );
}
