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
import Publicaciones from '../components/publicaciones/publicaciones';

const Rutas = () => {

    const { uid } = useSelector(state => state.login.user)
    const dispatch = useDispatch();

    console.log("uid del rutas", uid)
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
                                <Route path='/publicaciones' element={<Publicaciones/>} />
                            </Routes>
                        </PrivateRoutes>
                    }
                />
            </Routes>
        </BrowserRouter>
   
    )


}

export default Rutas;