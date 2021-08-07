import React from 'react';
import Header from "../../components/Header/Header";
import {Box} from "@material-ui/core";
import {useSelector} from "react-redux";
import {searchResultSelectors} from "../../../redux/features/searchResult";

function SearchResult() {
    const searchResult = useSelector(searchResultSelectors.getSearchResult);

    const res = searchResult.map(item => <p>{item.name}</p>)
    return (
        <>
            <Header/>
            <Box component="main">
                <Box sx={{
                    fontSize: "48px",
                    color: "red",
                    margin: "20px"
                }} component="section">
                    ProductList
                    {res}
                </Box>
            </Box>

        </>
    );
}

export default SearchResult;