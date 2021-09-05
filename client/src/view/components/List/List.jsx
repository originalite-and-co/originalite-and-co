import React, { useMemo } from 'react';

import PropTypes from 'prop-types';

List.propTypes = {
  data: PropTypes.array.isRequired,
  setKey: PropTypes.func.isRequired,
  component: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired
};

function List({ setKey, data, component, className }) {
  const components = useMemo(
    () =>
      data.map((props) => (
        <React.Fragment key={setKey(props)}>{component(props)}</React.Fragment>
      )),
    [component, data, setKey]
  );

  return <div className={className}>{components}</div>;
}

export default List;
