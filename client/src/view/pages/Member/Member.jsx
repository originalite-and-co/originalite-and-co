import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../components/Button/Button';
import { useDispatch } from 'react-redux';
import {
  authorizationActions,
  authorizeOperations,
} from '../../../redux/features/authorization';

Member.propTypes = {};

function Member(props) {
  const dispatch = useDispatch();
  const handleSignOut = () => {
    dispatch(authorizeOperations.loggOutUser());
  };

  return (
    <div>
      Profile/purchase history/favourites
      <Button
        onClick={handleSignOut}
        type="button"
        text="SIGN OUT"
        color="black"
      />
    </div>
  );
}

export default Member;
