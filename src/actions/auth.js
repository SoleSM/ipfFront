import axios from 'axios';
import {
    LOGIN_FAIL,
    LOGIN_OKAY,
    AUTH_ERROR
} from './types';
import setAuthToken from '../utils/setAuthToken';

export const login = (email, password) => async dispatch => {
    

    const body = JSON.stringify({email, password})

    //console.info('body=>',body)

    try {
        const res = await axios.post('localhost:5000/user/login', body)

        console.log(res.data)

        dispatch({
            type: LOGIN_OKAY,
            payload: res.data
        })

        dispatch(loadUser())
        
    } catch (err) {

        const errors = err.response.data.errors

        if(errors){
            console.log(errors)
        }
        
        dispatch({
            type: LOGIN_FAIL
        })
    }
}



export const loadUser = () => async dispatch => {

    if(localStorage.token) {
        setAuthToken(localStorage.token)
    }

    try {
        
        const res = await axios.get('localhost:5000/user/login')

        dispatch({
            type: USER_LOADED,
            payload: res.data
        })

    } catch (error) {
        dispatch({
            type: AUTH_ERROR
        })
    }
}