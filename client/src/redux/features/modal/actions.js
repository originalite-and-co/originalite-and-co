import types from "./types";

const openedModal = (id) => ({
    type: types.OPENED_MODAL,
    payload: id
})

const closedModal = () => ({
    type: types.CLOSED_MODAL,
    payload: null
})

export default {
    openedModal,
    closedModal
}