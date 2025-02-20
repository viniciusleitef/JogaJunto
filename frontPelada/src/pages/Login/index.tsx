import { LoginContainer, LoginPageButton, LoginPageInput } from './styles';
import video from '../../assets/loginVideo.mp4';
import { useNavigate } from 'react-router';
import { GoogleLogin, CredentialResponse } from '@react-oauth/google';

export function Login() {
  const navigate = useNavigate();

  const responseMessage = (response: CredentialResponse): void => {
    console.log(response);
    navigate('/hub');
  };

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
          <GoogleLogin onSuccess={responseMessage}/>

          <p>Esqueceu sua senha ?</p>
        </form>
      </div>
    </LoginContainer>
  );
}
