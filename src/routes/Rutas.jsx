import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';

import Login from '../components/auth/Login';
import LandingPage from '../components/landing/landingPage';
import LandingLogueado from '../components/landing/landingLogueado';
import RegistroUsuario from '../components/Registro/RegistroUser';

const Rutas = () => {
    return (
        <Router>
            <Routes>
                <Route exact path='/' element={<LandingPage />} />
                <Route exact path='/InicioSesion' element={<Login />} />
                <Route exact path='/Home' element={<LandingLogueado />} />
                <Route exact path='/RegistroUsuarios' element={<RegistroUsuario />} />
            </Routes>
        </Router>
    )
}

export default Rutas;