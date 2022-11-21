import {
    BrowserRouter,
    Route,
    Routes,
    Navigate
} from 'react-router-dom';

import Login from '../components/auth/Login';
import LandingPage from '../components/landing/landingPage';
import LandingLogueado from '../components/landing/landingLogueado';
import RegistroUsuario from '../components/Registro/RegistroUser';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { startChecking } from '../redux/actions/auth';
import PublicRoutes from './RutasPublicas';
import PrivateRoutes from './RutasPrivadas';

const Rutas = () => {


    const { uid } = useSelector(state => state.login)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(startChecking());
    }, [dispatch])


    return (

        <BrowserRouter>
            <Routes>
                <Route
                    path="auth/*"
                    element={
                        <PublicRoutes isLogged={!!uid}>
                            <Routes>
                                <Route path='/login' element={<Login />} />
                                <Route path='/landing' element={<LandingPage />} />
                                <Route path="/*" element={<Navigate to="/landing" />} />
                            </Routes>
                        </PublicRoutes>
                    }
                />
                <Route
                    path="/*"
                    element={
                        <PrivateRoutes isLogged={!!uid}>
                            <Routes>
                                <Route path='/home' element={<LandingLogueado />} />
                                <Route path='/registroUsuarios' element={<RegistroUsuario />} />
                            </Routes>
                        </PrivateRoutes>
                    }
                />
            </Routes>
        </BrowserRouter>
        // autenticado 
        //     ? 
        //     <BrowserRouter>
        //         <Routes>
        //             <Route path='/Home' element={<LandingLogueado />} />
        //             <Route path='/RegistroUsuarios' element={<RegistroUsuario />} />
        //         </Routes>
        //     </BrowserRouter>
        //     :
        //     <BrowserRouter>
        //         <Routes>
        //             <Route path='/InicioSesion' element={<Login />} />
        //             <Route path='/Landing' element={<LandingPage />} />
        //             <Route path='*' element={<LandingPage />} />
        //         </Routes>
        //     </BrowserRouter>

    )


}

export default Rutas;