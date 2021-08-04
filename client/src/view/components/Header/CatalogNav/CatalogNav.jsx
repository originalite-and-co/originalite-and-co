import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';
import CatalogNavStyles from './CatalogNav.module.css';
import WomenDropdown from './Dropdowns/WomenDropdown';

function CatalogNav() {
  const [womenToggle, setWomenToggle] = useState(false);

  const handleWomenBtnClick = () => {
    setWomenToggle(!womenToggle);
  };

  return (
    <Box className={CatalogNavStyles.catalogNavWrapper}>
      <Box>
        <Link to="/">
          <button type="button" className={womenToggle ? CatalogNavStyles.NavItemBtnActive : CatalogNavStyles.NavItemBtnInactive} onClick={handleWomenBtnClick}>women</button>
        </Link>
      </Box>
      <Box>
        <Link to="/">
          <button type="button" className={CatalogNavStyles.NavItemBtnInactive}>men</button>
        </Link>
      </Box>
      <Box>
        <Link to="/">
          <button type="button" className={CatalogNavStyles.NavItemBtnInactive}>accessory</button>
        </Link>
      </Box>
      {womenToggle && <WomenDropdown womenToggle={womenToggle} />}
    </Box>
  );
}

export default CatalogNav;
