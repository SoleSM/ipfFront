import { NavBarInicio, Footer } from '../../components/navbars/NavBarInicio'
import styled from 'styled-components';
import { Title } from './landingLogueado';

const ContenedorFooter = styled.div`
    height: 4rem;
    margin-top: calc(100% - 4rem)
`;
const LandingPage = () => {
    return (
        <>
            <NavBarInicio />
            <Title style={{"color": "black"}}>¡Bienvenido a Intituto Random!</Title>
            <ContenedorFooter>
                <Footer />
            </ContenedorFooter>

        </>
    )
}
export default LandingPage;