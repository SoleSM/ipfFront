import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import LoginReducer from './reducers/auth'

const reducers = combineReducers({
    LoginReducer
})

const initialState= {};

const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(),
)

export default store;