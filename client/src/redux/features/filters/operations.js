import actions from "./actions";

const getFilters = () => (dispatch, getState) => {
    const {filters} = getState();
    const dataFromSessionStorage = JSON.parse(sessionStorage.getItem("filters"));
    const data = dataFromSessionStorage || filters || [];

    dispatch(actions.getFilters(data));
};


const operations = {
  getFilters,
};

export default operations;