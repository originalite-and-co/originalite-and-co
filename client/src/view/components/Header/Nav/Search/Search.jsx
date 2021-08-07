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
            setActiveDropdown(true)
            dispatch(isAnyDropdownOpenActions.openedDropdown())
        }
    }

    const handleSubmitButtonClick = (event) => {
        setLoaded(false);
        productRequests.searchForProduct({query: searchValue})
            .then(
                data => {
                    setSearchResult(data);
                    setLoaded(true);
                    if (data.length){
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
                <img src={search} alt="search icon"/>
            </Box>
              <HeaderDropdown
                lockBodyScrolling
                classNames={{
                    closed: styles.dropdown,
                    active: styles.dropdownActive,
                }}
                isActive={isDropdownActive}
                children={dropdownContent}
            />}
        </>
    );
}

export default Search;