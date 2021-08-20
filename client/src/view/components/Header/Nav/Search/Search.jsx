import React, { useEffect, useMemo, useState } from 'react';

import useAsyncError from '../../../../hooks/useAsyncError';
import useWindowSize from '../../../../hooks/useWindowSize';
import constants from '../../../../constants';

import { useDispatch, useSelector } from 'react-redux';
import { searchResultActions } from '../../../../../redux/features/searchResult';
import { isAnyDropdownOpenActions, isAnyDropdownOpenSelectors } from '../../../../../redux/features/dropdown';

import { useHistory } from 'react-router-dom';
import { productRequests } from '../../../../../api/server/index';

import Toast from '../../../Toast/Toast';
import Dropdown from '../../../Dropdown/Dropdown';
import Button from '../../../Button/Button';
import { Box, TextField } from '@material-ui/core';

import search from '../icons/search.svg';
import styles from './Search.module.scss';

import { Formik } from 'formik';
import * as Yup from 'yup';

Search.propTypes = {};

function Search(props) {
  const [searchResult, setSearchResult] = useState([]);
  const [isLoaded, setLoaded] = useState(false);
  const [isDropdownActive, setActiveDropdown] = useState(false);
  const [isDesktop, setIsDesktop] = useState();

  const isAnyDropdownOpen = useSelector(isAnyDropdownOpenSelectors.getIsAnyDropdownOpen);
  const dispatch = useDispatch();

  const throwAsyncError = useAsyncError();
  const history = useHistory();

  const { width } = useWindowSize();

  useEffect(() => {
    setIsDesktop(width >= constants.WINDOW_DESKTOP_SIZE);
  }, [width]);

  useEffect(() => {
    if (!isAnyDropdownOpen) {
      setActiveDropdown(false);
    }
  }, [isAnyDropdownOpen, isDropdownActive]);

  const handleIconClick = (event) => {
    if (isDropdownActive) {
      dispatch(isAnyDropdownOpenActions.closedDropdown());
      setActiveDropdown(false);
    } else {
      //close all dropdowns that are active
      dispatch(isAnyDropdownOpenActions.closedDropdown());

      /**
       * These setTimeouts are important for functionality,
       * as they are asynchronous and somehow guarantee that the code
       * in their callback will be executed only
       * when call stack in event loop is empty. This means that
       * all setState and useEffect callbacks will be executed properly
       */
      setTimeout(() => {
        dispatch(isAnyDropdownOpenActions.openedDropdown());
      }, 0);

      setTimeout(() => {
        setActiveDropdown(true);
      });
    }
  };

  const handleSubmit = (values, actions) => {
    setLoaded(false);
    productRequests.searchForProduct({ query: values.search })
      .then(
        data => {
          setSearchResult(data);
          setLoaded(true);
          if (data.length) {
            dispatch(searchResultActions.setSearchResult(data));
            history.push(`/products/search?query=${values.search}`);
            setActiveDropdown(false);
            dispatch(isAnyDropdownOpenActions.closedDropdown());
          }
        },
        error => throwAsyncError(error),
      );
  };


  const informationToast = useMemo(() => <Toast
    className={styles.informationToast}
    message='No items have been found '
  />, []);

  const dropdownContent = (
    <>
      <Formik
        initialValues={{
          search: '',
        }}
        validationSchema={Yup.object().shape({
          search: Yup
            .string()
            .min(2, 'It\'s required to type at least two characters')
            .required('Fill in this field, please'),

        })}
        onSubmit={handleSubmit}
      >
        {(
          {
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => {
          return (
            <form onSubmit={handleSubmit} className={styles.form}>

              <Box className={`${styles.textFieldWrapper} wrapper`}>
                <TextField
                  color='primary'
                  value={values.search}
                  fullWidth
                  label='Search for item'
                  inputProps={{
                    onChange: handleChange,
                    onBlur: handleBlur,
                    name: 'search',
                    className: styles.input,
                  }}
                />

                {errors.search && touched.search && <p className={styles.error}>{errors.search}</p>}
              </Box>
              <Box className={styles.btnWrapper}>
                <Button text='search' type='submit' backgroundColor='#000000' color='#FFFFFF' />
              </Box>
            </form>
          );
        }}
      </Formik>
      {isLoaded && !searchResult.length && informationToast}
    </>
  );

  return (
    <>
      <Box onClick={handleIconClick} className={styles.imageWrapper} data-testid='nav-item-search'>
        <img className={styles.icon} src={search} alt='search icon' />
        {isDesktop && <p>Search</p>}
      </Box>
      <Dropdown
        lockBodyScrolling
        classNames={{
          closed: styles.dropdown,
          active: styles.dropdownActive,
        }}
        isActive={isDropdownActive}
        children={dropdownContent}
      />
    </>
  );
}

export default Search;