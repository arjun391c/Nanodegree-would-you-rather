import { AUTH_LOGOUT, AUTH_LOGIN } from '../actions/auth'

export default function auth (state = {}, action) {
    switch (action.type) {
        case AUTH_LOGIN:
            return {
                ...state,
                loggedState: action.loggedState,
                loggedUser: action.loggedUser
            }
        case AUTH_LOGOUT:
            return {
                ...state,
                loggedState: action.loggedState,
                loggedUser: action.loggedUser
            }
        default: 
            return state;
    }
}