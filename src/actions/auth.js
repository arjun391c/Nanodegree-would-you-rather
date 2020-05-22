import { showLoading, hideLoading } from 'react-redux-loading'
import { getUser } from '../utils/api'

export const AUTH_LOGIN = 'AUTH_LOGIN'
export const AUTH_LOGOUT = 'AUTH_LOGOUT'

export function recieveUserLogin( user ) {
    return {
        type: AUTH_LOGIN,
        loggedState: true,
        loggedUser: user
    }
}

export function recieveUserLogout() {
    return {
        type: AUTH_LOGOUT,
        loggedState: false,
        loggedUser: null
    }
}

export function handleLogin(id) {
    return (dispatch) => {
        dispatch(showLoading())
        getUser(id).then((user) => {
            dispatch(recieveUserLogin(user))
            dispatch(hideLoading())
        })
    }
}

export function handleLogout() {
    return (dispatch) => {
        dispatch(showLoading())
        dispatch(recieveUserLogout())
        dispatch(hideLoading())
    }
}
