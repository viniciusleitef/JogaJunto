import { LoginContainer, LoginPageButton, LoginPageInput } from "./styles";
import video from '../../assets/loginVideo.mp4'

export function Login(){
    return (
        <LoginContainer>
            <div className="imageBox">
                <video autoPlay muted loop>
                    <source src={video} type="video/mp4"/>
                </video>
            </div>

            <div className="box">
                <h1>JojaJunto</h1>

                <form>
                    <LoginPageInput type="text" placeholder="User name or Email" />
                    <LoginPageInput type="text" placeholder="Password" />

                    <LoginPageButton>Registrar</LoginPageButton>
                    <LoginPageButton>Entrar com Google</LoginPageButton>

                    <p>Esqueceu sua senha ?</p>
                </form>
            </div>
        </LoginContainer>
    )
}