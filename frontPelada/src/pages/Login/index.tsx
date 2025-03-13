import { LoginContainer, LoginPageButton, LoginPageInput } from './styles';
import video from '../../assets/loginVideo.mp4';
import { useNavigate } from 'react-router';
import { GoogleLogin, CredentialResponse } from '@react-oauth/google';
import { useUser } from '../../hooks/useUser';
import { useEffect } from 'react';
import { useAuth } from '../../hooks/useAuth';

export function Login() {
  const navigate = useNavigate();
  const { loginGoogle } = useUser();
  const { isAuthenticated, loading } = useAuth();

  const responseMessage = async (
    response: CredentialResponse,
  ): Promise<void> => {
    if (response.credential) {
      const token = await loginGoogle({ credential: response.credential });
      console.log(token);
      if (token) {
        localStorage.setItem('token', token);
        navigate('/hub');
      }
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/hub');
    }
  }, [loading]);

  return (
    <LoginContainer>
      <div className="imageBox">
        <video autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </video>
      </div>

      <div className="box">
        <h1>JogaJunto</h1>

        <form>
          <LoginPageInput type="text" placeholder="User name or Email" />
          <LoginPageInput type="text" placeholder="Password" />

          <LoginPageButton onClick={() => navigate('/hub')}>
            Entrar
          </LoginPageButton>
          <GoogleLogin onSuccess={responseMessage} />

          <p>Esqueceu sua senha ?</p>
        </form>
      </div>
    </LoginContainer>
  );
}
