import React, { useEffect } from 'react';
import Header from '../../components/Header/Header';
import Styles from './Member.module.scss';
import { Box } from '@material-ui/core';
import MemberTabs from './MemberTabs/MemberTabs';
import { useDispatch } from 'react-redux';
import { cartOperations } from '../../../redux/features/cart';
import { useHistory } from 'react-router-dom';

Member.propTypes = {};

function Member() {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(cartOperations.getCart()).catch((error) => {
      if (Number(error.status) === 401) {
        history.push('/auth/login');
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
