import types from "./types";

const {
    OPENED_DROPDOWN,
    CLOSED_DROPDOWN
} = types;

const openedDropdown = () => ({
    type: OPENED_DROPDOWN,
})

const closedDropdown = () => ({
    type: CLOSED_DROPDOWN,
})

const actions = {
    openedDropdown,
    closedDropdown
};

export default actions;