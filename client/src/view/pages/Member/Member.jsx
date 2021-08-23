import React from 'react';
import Header from '../../components/Header/Header';
import Styles from './Member.module.scss';
import { Box } from '@material-ui/core';
import MemberTabs from './MemberTabs/MemberTabs';

function Member() {
  return (
    <div>
      <Header />
      <Box className={Styles.container}>
        <MemberTabs />
      </Box>
    </div>
  );
}

export default Member;
