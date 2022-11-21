
import Swal from 'sweetalert2';
import { fetchSinToken, fetchConToken } from '../../helpers/fetch';

import {
    FETCH_LOGIN,
    LOGIN_FAIL,
    LOGIN_OKAY,
    CHECKING_FINISH,

} from './types';

//Cuando se esté procesando la petición de logueo
export const fetch_login = () => {
    return {
        type: FETCH_LOGIN
    }
}

//Login  exitoso
export const loginOkay = (user) => {
    return {
        type: LOGIN_OKAY,
        payload:{ user}
        
    }
}

//No se pudo loguear
export const loginError = (error) => {
    return {
        type: LOGIN_FAIL,
        payload: {error}
        
    }
}

//Termina el proceso de logueo
const checkingFinish = () => {
    return {
        type: CHECKING_FINISH
    }
}

//Renovación de token para mantener la sesión iniciada
export const startChecking = () => {
    return async (dispatch) => {
        const res = await fetchConToken('auth/renew');
        const body = await res.json()

        if (body.ok) {
            //setea el token del localstorage con un nuevo token 
            localStorage.setItem('token', body.token)
            localStorage.setItem('token-creado', new Date().getTime())

            dispatch(loginOkay({
                uid: body.usuario.uid,
                nombre: body.usuario.nombre
            }))

        } else {
            dispatch(checkingFinish());
        }
    }
}



export const login = (email, password) => {

    return async (dispatch) => {

        dispatch(fetch_login())
        const res = await fetchSinToken('auth/login', { email, password }, 'POST');
        const body = await res.json();
    

        if (body.ok) {
            //graba el token 
            localStorage.setItem('token', body.token);
            localStorage.setItem('token-creado', new Date().getTime());

            dispatch(loginOkay({
                uid: body.usuario.uid,
                nombre: body.usuario.nombre
            }))
            dispatch(checkingFinish());
            return Swal.fire({ icon: 'success', title: `${body.msg}`, showConfirmButton: false, timer: 1200 })

        }else {
            dispatch(loginError(body.msg));
            return Swal.fire('Error', body.msg, 'error')
        }
           
    }
}

