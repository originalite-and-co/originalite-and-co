import React, {useMemo, useState} from 'react';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import CloseIcon from '@material-ui/icons/Close';
import PropTypes from 'prop-types';
import DropdownStyles from './SearchDropdown.module.scss';
import Button from '../../../../Button/Button';
import {useDispatch, useSelector} from "react-redux";
import {modalSelectors} from "../../../../../../redux/features/modal";
import {productRequests} from "../../../../../../api/server";
import useAsyncError from "../../../../../hooks/useAsyncError";
import Toast from "../../../../Toast/Toast";
import {searchResultActions} from "../../../../../../redux/features/searchResult";
import {useHistory} from "react-router-dom";

function SearchDropdown() {
    const [searchValue, setSearchValue] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const [isLoaded, setLoaded] = useState(false);

    const throwAsyncError = useAsyncError();
    const dispatch = useDispatch();
    const activeModal = useSelector(modalSelectors.modal);
    const history = useHistory();

    const modalIsActive = activeModal.some(stateId => stateId === 'search-modal');

    const handleInputChange = (event) => {
        setSearchValue(event.target.value);
    }

    const handleButtonClick = (event) => {
        setLoaded(false);
        productRequests.searchForProduct({query: searchValue})
            .then(
                data => {
                    setSearchResult(data);
                    setLoaded(true);
                    data.length && dispatch(searchResultActions.setSearchResult(data));
                    data.length && history.push("/products/search")
                },
                error => throwAsyncError(error)
            )
    }

    const informationToast = useMemo(() => <Toast message="No items have been found "/>, []);

    return (
        <Box className={modalIsActive ? DropdownStyles.active : DropdownStyles.closed}>
            <Box className={DropdownStyles.textfieldWrapper}>
                <TextField value={searchValue} onChange={handleInputChange} fullWidth label="Search for item"/>
                <CloseIcon className={DropdownStyles.closeIcon}/>
            </Box>
            <Button text="search" backgroundColor="#000000" color="#FFFFFF" onClick={handleButtonClick}/>
            {isLoaded && !searchResult.length && informationToast}
        </Box>
    );
}


export default SearchDropdown;
