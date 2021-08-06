import actions from "./actions";

// const openModal = (id) => (dispatch) => {
//         dispatch(actions.openedModal(id))
// }
// const closeModal = () => (dispatch) => {
//     dispatch(actions.closedModal(null))
// }

const toggleModal = (id) => (dispatch, getState) => {
    const modalState = getState().modal
    const modalIsOpen = modalState.some(modalId => modalId === id)
    console.log(modalIsOpen)
    if (modalIsOpen){
        dispatch(actions.closedModal(null))
    } else {
        dispatch(actions.openedModal(id))
    }
}

export default {
    toggleModal
}