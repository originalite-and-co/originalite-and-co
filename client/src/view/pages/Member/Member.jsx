import React from 'react';
import PropTypes from 'prop-types';
import Button from "../../components/Button/Button";
import {useDispatch} from "react-redux";
import {
    authorizationActions,
    authorizeOperations
} from "../../../redux/features/authorization";
import Header from "../../components/Header/Header";
import Styles from './Member.module.scss'
import {Box} from "@material-ui/core";
import MemberTabs from "./MemberTabs/MemberTabs";

Member.propTypes = {

};


function Member(props) {
  const dispatch = useDispatch();
  const handleSignOut = () => {
    dispatch(authorizeOperations.loggOutUser());
  };

    return (
        <div>
            <Header/>
            <Box className={Styles.container}>
                <MemberTabs/>
                <Button
                    onClick={handleSignOut}
                    type="button"
                    text="SIGN OUT"
                    color="black"/>
            </Box>

        </div>
    );
}

export default Member;