import actions from './actions'

const authorizeUser = () => (dispatch) => {
    const isAuthorized = sessionStorage.getItem('token') || localStorage.getItem('token')
    if (isAuthorized){
        dispatch(actions.authorizeCustomer(true))
    } else {
        dispatch(actions.authorizeCustomer(false))
    }
}
const loggOutUser = () => (dispatch) => {
    sessionStorage.removeItem('token')
    localStorage.removeItem('token')
    dispatch(actions.loggOutCustomer(false))
}

export default {
    authorizeUser,
    loggOutUser
}