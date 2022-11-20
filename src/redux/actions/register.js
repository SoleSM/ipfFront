import { fetchSinToken } from '../../helpers/fetch'
import {
    REGISTER_FAIL,
    REGISTER_OKAY
} from './types'
import Swal from 'sweetalert2'
import { fetchLoginOkay } from './auth'

export const fetchRegOkay = (user) => {
    return {
        type: REGISTER_OKAY,
        payload: user
    }
}

export const fetchRegFail = (error) => {
    return {
        type: REGISTER_FAIL,
        payload: error
    }
}

export const fetchRegisterUser = (nombre, apellido, numeroDni, fechaDeNacimiento, email, password, sexo, tipo) => {

    return async (dispatch) => {

        const res = await fetchSinToken('auth/register', {nombre, apellido, numeroDni, fechaDeNacimiento, email, password, sexo, tipo}, 'POST');
        const body = await res.json();
        
        if (body.ok) {

            localStorage.setItem("token", body.token);
            localStorage.setItem("token-init-date", new Date().getTime());
      
            dispatch(fetchLoginOkay({
                uid: body.usuarioRegistrado.uid,
                nombre: body.usuarioRegistrado.nombre
            }));
            return Swal.fire({icon: 'success', title: `${body.msg}`, showConfirmButton: false, timer: 1200})


        } else {
            dispatch(fetchRegFail(body.msg))
            return Swal.fire({icon: 'error', title:`${body.msg}`, showConfirmButton: false, timer: 1500 })

        }
    }
}