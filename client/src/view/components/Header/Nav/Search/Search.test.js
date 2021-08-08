import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "../../../../../redux/store/store";
import React from "react";
import Search from "./Search";
import {render} from "@testing-library/react";

const TestSearch = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <Search/>
            </Provider>
        </BrowserRouter>
    )
}

test("Search component", () => {
    render(<TestSearch/>)
})