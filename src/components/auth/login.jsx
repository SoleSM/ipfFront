import { useForm } from '../../hooks/useForm'
import { connect } from 'react-redux';
import { login } from '../../actions/auth'
import styled from 'styled-components'

const ContainerPrincipal = styled.div`
    min-height: 100vh;
    background-color: white
`;

const ContainerForm = styled.div`
    height: 70%;
    width: 50%;
    background-color: white;
    border-radius: 30px;
    margin: auto;
`;

const Title = styled.h1`
  text-align: center;
  color: black;
  font-family: Cambria;
  padding: 20px;
  font-weight: bold;
  font-size: 40px;
  @media screen and (max-width: 900px){
    font-size: 30px;
    text-align: center;
  }
`;

const Login = ({ login }) => {


    const [formLoginValues, handleInputChange] = useForm({
        loginEmail: 'miliserrrano@gmail.com',
        loginPassword: 'hola123'
    });

    const { loginEmail, loginPassword } = formLoginValues;

    const handleOnSubmit = async (e) => {
        e.preventDefault()
        login(loginEmail, loginPassword)
    }

    return (
        <>
            <ContainerPrincipal>
                <ContainerForm style={{}}>
                    <Title>Login</Title>
                    <form className="form" onSubmit={(e) => handleOnSubmit(e)} style={{'textAlign':'center'}}>

                        <div className="form-group">
                            <input type="email"
                                placeholder="correo electrónico/email"
                                name="loginEmail"
                                value={loginEmail}
                                onChange={handleInputChange}
                                style={{'borderRadius': 'px', 'borderBlock': 'none',}}
                            />
                        </div>

                        <div className="form-group">
                            <input type="password"
                                placeholder="correo electrónico/email"
                                name="loginPassword"
                                value={loginPassword}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="centered">
                            <input type="submit"
                                className="button3d"
                                value="pulse para iniciar sesión_"
                            />
                        </div>

                    </form>
                </ContainerForm>
            </ContainerPrincipal>


        </>
    )
}

const mapStateToProps = state => ({
    autenticado: state.login.data
})

export default connect(mapStateToProps, { login })(Login);