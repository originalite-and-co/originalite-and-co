import React, {useEffect, useState} from 'react';

import Box from '@material-ui/core/Box';
import HeaderDropdown from "../../../HeaderDropdown/HeaderDropdown";
import {ListItem, ListItemUpper} from "../../dropdowns/BurgerDropdown/ListItem";
import Social from "../../dropdowns/BurgerDropdown/Social/Social";

import styles from './Burger.module.scss';

import {useDispatch, useSelector} from "react-redux";
import {isAnyDropdownOpenActions, isAnyDropdownOpenSelectors} from "../../../../../../redux/features/dropdown";

function Burger() {
    const [isDropdownActive, setActiveDropdown] = useState(false);
    const dispatch = useDispatch();
    const isAnyDropdownOpen = useSelector(isAnyDropdownOpenSelectors.getIsAnyDropdownOpen);

    useEffect(() => {
        if (!isAnyDropdownOpen){
            setActiveDropdown(false);
        }
    }, [isAnyDropdownOpen, isDropdownActive]);

    const handleBurgerIconClick = (event) => {
        if (isDropdownActive){
            dispatch(isAnyDropdownOpenActions.closedDropdown());
            setActiveDropdown(false);
        } else {
            dispatch(isAnyDropdownOpenActions.closedDropdown());
            // setTimeout(() => {
                setActiveDropdown(true);
                dispatch(isAnyDropdownOpenActions.openedDropdown())
            // }, 0)
        }
    }

    const burgerDropdownContent = <>
        <Box className={`${styles.auth} wrapper`}>
            <button type="button" className={styles.btn}>Log In /</button>
            <button type="button" className={styles.btn}>Sign Up</button>
        </Box>
        <Box className={styles.list}>
            <ListItem text="New collection"/>
            <ListItem text="New arrivals"/>
            <ListItemUpper text="women collection"/>
            <ListItemUpper text="men collection"/>
            <ListItemUpper text="accessory"/>
        </Box>
        <Social/>
    </>


    return (
        <>
            <Box className={styles.container}>
                <div onClick={handleBurgerIconClick} className={styles.wrapper}>
                    <span className={styles.line}/>
                    <span className={styles.middleLine}/>
                    <span className={styles.line}/>
                </div>
            </Box>
            <HeaderDropdown
                classNames={{
                    closed: styles.dropdown,
                    active: styles.dropdownActive,
                }}
                isActive={isDropdownActive}
                lockBodyScrolling
                children={burgerDropdownContent}
            />
        </>
    );
}

export default Burger;
