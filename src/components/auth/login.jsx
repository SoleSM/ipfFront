import styled from 'styled-components';
import imagenLogo from '../../assets/logo.png';
import { useForm } from '../../hooks/useForm';
import { login } from '../../redux/actions/auth';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Banner = styled.div`
    background-color: #673ab7;
    height: 370px;
    margin-top: -45px
`;
const Title = styled.h1`
    font-family: Candara;
    font-weight: bold;
    position: relative;
    top: 30px;
    color: white;
    font-size: 50px;
`;

const Login = () => {

 
    const {uid} = useSelector(state => state.login.user)
    const dispatch = useDispatch();
const navigate = useNavigate();
    
    const [formLoginValues, handleInputChange] = useForm({
        loginEmail: '',
        loginPassword: ''
    });

    const { loginEmail, loginPassword } = formLoginValues;

    const handleOnSubmit = async (e) => {
        e.preventDefault()
        dispatch(login(loginEmail, loginPassword));
    }

 useEffect(()=> {
    if(uid){
        navigate('/home')
    }
 }, [uid])
    return (
        <>
            <section className="text-center">

                <Banner>
                    <Title>Instituto Random</Title>
                    <img src={imagenLogo} height="200px" />
                </Banner>

                <div style={{ 'justifyContent': 'center', 'display': 'flex'}}>
                    <div className="card mx-4 mx-md-5 shadow-5-strong" style={{
                        'marginTop': '-100px',
                        'background': ' hsla(0, 0%, 100%, 0.8)',
                        'backdropFilter': 'blur(30px)',
                        'width': '50%',
                        'borderRadius':'20px',
                    }}>
                        <div className="card-body py-5 px-md-5">

                            <div className="row d-flex justify-content-center">
                                <div className="col-lg-8">
                                    <h2 className="fw-bold mb-5" style={{ 'fontFamily': 'Candara', 'fontWeight': 'bolder' }}>LOGIN</h2>

                                    <form onSubmit={(e) => handleOnSubmit(e)} >
                                        <div className="form-outline mb-4" style={{ 'textAlign': 'left', 'alignItems': 'left' }}>
                                            <input type="email"
                                                name="loginEmail"
                                                value={loginEmail}
                                                onChange={handleInputChange}
                                                className="form-control"
                                            />
                                            <label className="form-label"  style={{'fontFamily': 'Candara'}}>Email</label>
                                        </div>

                                        <div className="form-outline mb-4" style={{ 'textAlign': 'left', 'alignItems': 'left' }}>
                                            <input type="password"
                                                name="loginPassword"
                                                value={loginPassword}
                                                onChange={handleInputChange} 
                                                className="form-control"
                                            />
                                            <label className="form-label"  style={{'fontFamily': 'Candara'}}>Contraseña</label>
                                        </div>

                                        <div style={{ 'justifyContent': 'center', 'display': 'flex'}}>
                                            <button type="submit" className="btn btn-primary btn-block mb-4" style={{ 'width': '50%', 'borderRadius': '10px', 'fontFamily': 'Candara'}}>
                                                Iniciar Sesion
                                            </button>
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}


export default Login;