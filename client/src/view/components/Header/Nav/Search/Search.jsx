import React, {useEffect, useMemo, useState} from 'react';

import useAsyncError from "../../../../hooks/useAsyncError";

import {useDispatch, useSelector} from "react-redux";
import {searchResultActions} from "../../../../../redux/features/searchResult";
import {isAnyDropdownOpenActions, isAnyDropdownOpenSelectors} from "../../../../../redux/features/dropdown";

import {useHistory} from "react-router-dom";
import {productRequests} from "../../../../../api/server";

import Toast from "../../../Toast/Toast";
import HeaderDropdown from "../../HeaderDropdown/HeaderDropdown";
import Button from "../../../Button/Button";
import {Box, InputAdornment, TextField} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

import search from "../icons/search.svg";
import styles from "./Search.module.scss";
import useWindowSize from "../../../../hooks/useWindowSize";
import constants from "../../../../constants";
import NavItemsStyles from "../NavItems/NavItems.module.scss";

Search.propTypes = {};

function Search(props) {
    const [searchValue, setSearchValue] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const [isLoaded, setLoaded] = useState(false);
    const [isDropdownActive, setActiveDropdown] = useState(false);

    const isAnyDropdownOpen = useSelector(isAnyDropdownOpenSelectors.getIsAnyDropdownOpen);
    const dispatch = useDispatch()
    const throwAsyncError = useAsyncError();
    const history = useHistory();

    const [isDesktop, setIsDesktop] = useState()
    const {width} = useWindowSize();

    useEffect(() => {
        setIsDesktop(width >= constants.WINDOW_DESKTOP_SIZE);
    }, [width])

    useEffect(() => {
        if (!isAnyDropdownOpen) {
            setActiveDropdown(false)
        }
    }, [isAnyDropdownOpen, isDropdownActive]);


    const handleInputChange = (event) => {
        setSearchValue(event.target.value);
    }

    const handleIconClick = (event) => {
        if (isDropdownActive) {
            dispatch(isAnyDropdownOpenActions.closedDropdown())
            setActiveDropdown(false)
        } else {
            //close all dropdowns that are active
            dispatch(isAnyDropdownOpenActions.closedDropdown())

            /**
             * These setTimeouts are important for functionality,
             * as they are asynchronous and somehow guarantee that the code
             * in their callback will be executed only
             * when call stack in event loop is empty. This means that
             * all setState and useEffect callbacks will be executed properly
             */
            setTimeout(() => {
                dispatch(isAnyDropdownOpenActions.openedDropdown())
            }, 0);

            setTimeout(() => {
                setActiveDropdown(true)
            });
        }
    }

    const handleSubmitButtonClick = (event) => {
        setLoaded(false);
        productRequests.searchForProduct({query: searchValue})
            .then(
                data => {
                    setSearchResult(data);
                    setLoaded(true);
                    if (data.length) {
                        dispatch(searchResultActions.setSearchResult(data));
                        history.push(`/products/search?query=${searchValue}`)
                        setActiveDropdown(false)
                        dispatch(isAnyDropdownOpenActions.closedDropdown());
                    }
                },
                error => throwAsyncError(error)
            )
    }


    const informationToast = useMemo(() => <Toast
        message="No items have been found "
    />, []);
    const dropdownContent = <>
        <Box className={`${styles.textFieldWrapper} wrapper`}>
            <TextField
                value={searchValue}
                onChange={handleInputChange}
                fullWidth
                label="Search for item"
            />
        </Box>
        <Box className={styles.btnWrapper}>
            <Button text="search" backgroundColor="#000000" color="#FFFFFF" onClick={handleSubmitButtonClick}/>
        </Box>
        {isLoaded && !searchResult.length && informationToast}
    </>

    return (
        <>
            <Box onClick={handleIconClick} className={styles.imageWrapper} data-testid="nav-item-search">
                <img className={styles.icon} src={search} alt="search icon"/>
                {isDesktop && <p>Search</p>}
            </Box>
            <HeaderDropdown
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