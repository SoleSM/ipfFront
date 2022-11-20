
import Swal from 'sweetalert2';
import { fetchSinToken, fetchConToken } from '../../helpers/fetch';

import {
    LOGIN_FAIL,
    LOGIN_OKAY,
    CHECKING_FINISH
} from './types';

export const fetchLoginOkay = (user) => {
    return {
        type: LOGIN_OKAY,
        payload: {
            user
        }
    }
}

export const fetchLoginError = (error) => {
    return {
        type: LOGIN_FAIL,
        payload: {
            error
        }
    }
}

const checkingFinish = () => {
    return{
        type: CHECKING_FINISH
    }
}

export const startChecking = () => {
    return async (dispatch) => {
        const res = await fetchConToken('auth/renew');
        const body = await res.json()

        console.log("datos startcheking", body.usuario, body.token)
        if (res.ok) {
            //graba el token con el token que viene en el body
            localStorage.setItem('token', body.token)
            localStorage.setItem('token-creado', new Date().getTime())
        
            dispatch(fetchLoginOkay({
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

       
        const res = await fetchSinToken('auth/login', { email, password }, 'POST');

        const { usuario, token, msg } = await res.json();

        if (res.ok) {
            //graba el token con el token que viene en el body
            localStorage.setItem('token', token);
            localStorage.setItem('token-creado', new Date().getTime());

            dispatch(fetchLoginOkay({
                uid: usuario.uid,
                nombre: usuario.nombre
            }))
            return Swal.fire({icon: 'success', title: `${msg}`, showConfirmButton: false, timer: 1200})

        } else {
            dispatch(fetchLoginError(msg));
            return Swal.fire('Error', msg, 'error')
        }
    }
}

