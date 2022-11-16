import { NavBarInicio, Footer } from '../../components/navbars/NavBarInicio'
import styled from 'styled-components';


const ContenedorFooter = styled.div`
    height: 4rem;
    margin-top: calc(100% - 4rem)
    
`;
const LandingPage = () => {
    return (
        <>

            <NavBarInicio />

            <ContenedorFooter>
                <Footer />
            </ContenedorFooter>


        </>
    )
}
export default LandingPage;