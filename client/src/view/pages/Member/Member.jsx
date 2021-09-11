import React, { useEffect } from 'react';
import Header from '../../components/Header/Header';
import Styles from './Member.module.scss';
import { Box } from '@material-ui/core';
import MemberTabs from './MemberTabs/MemberTabs';
import { useDispatch } from 'react-redux';
import { cartOperations } from '../../../redux/features/cart';

Member.propTypes = {};

function Member() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(cartOperations.getCart());
  }, []);

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
