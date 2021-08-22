import MemberTabs from "./MemberTabs";
import {screen, render} from '@testing-library/react'
import store from './../../../../redux/store/store'
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {Tab} from "@material-ui/core";
import React from "react";

const TestMemberTabs = () => {
    return(
        <BrowserRouter>
            <Provider store={store}>
                <MemberTabs/>
            </Provider>
        </BrowserRouter>
    )
}

describe('MemberTabs component', () => {
    test('should render the MemberTabs component', () => {
        render(<TestMemberTabs/>)
    })

    test('should contain three tabs', () => {
        render(<TestMemberTabs/>)
        const myProfile = screen.getByText(/My Profile/);
        const myWishlist = screen.getByText(/My Wishlist/);
        const purchaseHistory = screen.getByText(/Purchase history/);

        expect(myProfile).toBeInTheDocument();
        expect(myWishlist).toBeInTheDocument();
        expect(purchaseHistory).toBeInTheDocument()
    })

})
