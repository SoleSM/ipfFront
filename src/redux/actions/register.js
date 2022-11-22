import { fetchSinToken } from '../../helpers/fetch'
import {
    REGISTER_FAIL,
    REGISTER_OKAY
} from './types'
import Swal from 'sweetalert2'

export const registerOkay = (user) => {
    return {
        type: REGISTER_OKAY,
        payload: user
    }
}

export const registerFail = (error) => {
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
            dispatch(registerOkay({usuario: body.usuarioRegistrado}))
            return Swal.fire({icon: 'success', title: `${body.msg}`, showConfirmButton: false, timer: 1200})
        } else {
            dispatch(registerFail(body.msg))
            return Swal.fire({icon: 'error', title:`${body.msg}`, showConfirmButton: false, timer: 1500 })

        }
    }
}