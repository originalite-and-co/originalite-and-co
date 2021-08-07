import React, {useEffect, useState} from 'react';
import Box from '@material-ui/core/Box';
import BurgerStyles from './Burger.module.scss';
import HeaderDropdown from "../../../HeaderDropdown/HeaderDropdown";
import BurgerDropdownStyles from "../../dropdowns/BurgerDropdown/BurgerDropdown.module.scss";
import {ListItem, ListItemUpper} from "../../dropdowns/BurgerDropdown/ListItem";
import Social from "../../dropdowns/BurgerDropdown/Social/Social";
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
            setTimeout(() => {
                setActiveDropdown(false);
                dispatch(isAnyDropdownOpenActions.openedDropdown())
            }, 0)
        }
    }

    const burgerDropdownContent = <>
        <Box className={BurgerDropdownStyles.auth}>
            <button type="button" className={BurgerDropdownStyles.btn}>Log In /</button>
            <button type="button" className={BurgerDropdownStyles.btn}>Sign Up</button>
        </Box>
        <Box className={BurgerDropdownStyles.list}>
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
            <Box className={BurgerStyles.container}>
                <div onClick={handleBurgerIconClick} className={BurgerStyles.wrapper}>
                    <span className={BurgerStyles.line}/>
                    <span className={BurgerStyles.middleLine}/>
                    <span className={BurgerStyles.line}/>
                </div>
            </Box>
            <HeaderDropdown
                classNames={{
                    closed: "",
                    active: ""
                }}
                isActive={isDropdownActive}
                lockBodyScrolling
                children={burgerDropdownContent}
            />
        </>
    );
}

export default Burger;
