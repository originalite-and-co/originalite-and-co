import actions from './actions'

const authorizeUser = () => (dispatch) => {
    const isAuthorized = sessionStorage.getItem('token') || localStorage.getItem('token')
    if (isAuthorized){
        dispatch(actions.authorizeCustomer(true))
    } else {
        dispatch(actions.authorizeCustomer(false))
    }
}

export default {
    authorizeUser
}