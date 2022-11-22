import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Footer } from '../navbars/NavBarInicio';
// ----------Iconos-----------
import agregarUsuario from '../../assets/agregarUsuario.png'
import publicaciones from '../../assets/altoparlante.png'
import materias from '../../assets/libros.png'
import inasistencias from '../../assets/calendario.png'

export const Title = styled.h1`
    font-family: Candara;
    font-weight: bold;
    position: relative;
    top: 30px;
    color: white;
    font-size: 50px;
    text-align: center;
    margin-bottom: 40px
`;

export const Container = styled.div`
    min-height: 100vh;
    margin-top: -45px;
    background-color: #7e57c2
`;

const Grid = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
grid-gap: 20px;
bakcground-color: yellow;
margin:  35px 35px 35px 35px
`;

const Opciones = styled.div`
width: 300px;
height: 300px;
background-color: #f3e5f5;
border-radius: 20px;
margin: auto;
text-align: center
`;

const LabelNombre = styled.label`
    display: block;
    font-family: Candara;
    color: black;
    font-size: 20px;
    font-weight: bold
`;


const LandingLogueado = () => {
    return (
        <>
            <Container>
                <Title>Instituto Random</Title>
                <hr style={{"backgroundColor": "#4a148c"}}/>
                <Grid>
                    <Link to="/registroUsuarios">
                        <Opciones>
                            <img src={agregarUsuario} style={{ "width": "150px", "margin-top": "20%" }} />
                            <LabelNombre>Usuarios</LabelNombre>
                        </Opciones>
                    </Link>
                    <Link to="/publicaciones">
                        <Opciones>
                            <img src={publicaciones} style={{ "width": "150px", "margin-top": "20%" }} />
                            <LabelNombre>Publicaciones</LabelNombre>
                        </Opciones>
                    </Link>
                    <Link to="/registroUsuarios">
                        <Opciones>
                            <img src={materias} style={{ "width": "150px", "margin-top": "20%" }} />
                            <LabelNombre>Materias</LabelNombre>
                        </Opciones>
                    </Link>
                    <Link to="/registroUsuarios">
                        <Opciones>
                            <img src={inasistencias} style={{ "width": "150px", "margin-top": "20%" }} />
                            <LabelNombre>Inasistencias</LabelNombre>
                        </Opciones>
                    </Link>
                    <Link to="/registroUsuarios">
                        <Opciones>
                            <img src={agregarUsuario} style={{ "width": "150px", "margin-top": "20%" }} />
                            <LabelNombre>Usuarios</LabelNombre>
                        </Opciones>
                    </Link>
                    <Link to="/registroUsuarios">
                        <Opciones>
                            <img src={agregarUsuario} style={{ "width": "150px", "margin-top": "20%" }} />
                            <LabelNombre>Usuarios</LabelNombre>
                        </Opciones>
                    </Link>
                    <Link to="/registroUsuarios">
                        <Opciones>
                            <img src={agregarUsuario} style={{ "width": "150px", "margin-top": "20%" }} />
                            <LabelNombre>Usuarios</LabelNombre>
                        </Opciones>
                    </Link>
                    <Link to="/registroUsuarios">
                        <Opciones>
                            <img src={agregarUsuario} style={{ "width": "150px", "margin-top": "20%" }} />
                            <LabelNombre>Usuarios</LabelNombre>
                        </Opciones>
                    </Link>
                </Grid>
                <Footer />
            </Container>

        </>
    )
}

export default LandingLogueado;