const addFilter = (state, payload) => {
  let stateCopy = { ...state };
  Object.keys(payload).forEach((key) => {
    if (stateCopy[key]) {
      if (Array.isArray(payload[key])) {
        stateCopy[key] = [...stateCopy[key], ...payload[key]];
        return;
      }
      stateCopy[key] = [payload[key]];
      return;
    }

    stateCopy = {
      ...stateCopy,
      ...payload
    };
  });

  return stateCopy;
};

const deleteFilterValue = (state, payload) => {
  const stateCopy = { ...state };
  const filterValue = stateCopy[payload.filterName];

  stateCopy[payload.filterName] = filterValue.filter(
    (value) => value !== payload.filterValue
  );

  //can't use a variable here because its value doesn't update
  if (!stateCopy[payload.filterName].length) {
    delete stateCopy[payload.filterName];
  }

  return stateCopy;
};

const utils = {
  addFilter,
  deleteFilterValue
};

export default utils;
