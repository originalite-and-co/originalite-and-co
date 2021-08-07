import React, {useCallback, useEffect, useState} from 'react';
import Box from '@material-ui/core/Box';
import {Link} from 'react-router-dom';
import CatalogNavStyles from './CatalogNav.module.css';
import WomenDropdown from './Dropdowns/WomenDropdown';
import useWindowSize from "../../../hooks/useWindowSize";
import constants from '././.././.././../constants';
import {CatalogNavLink, CatalogNavButton} from './LinkButtonGenerators'
import {useDispatch, useSelector} from "react-redux";
import {modalOperations, modalSelectors} from "../../../../redux/features/modal";
import MenDropdown from "./Dropdowns/MenDropdown";
import {catalogRequests} from "../../../../api/server";
import useAsyncError from "../../../hooks/useAsyncError";

function CatalogNav() {
    const dispatch = useDispatch()
    const sizes = useWindowSize()
    const [isDesktop, setIsDesktop] = useState();
    const [catalog, setCatalog] = useState([]);
    const throwError = useAsyncError();

    useEffect(useCallback(()=> {
        catalogRequests.getCatalog()
            .then(
                data => setCatalog(data),
                error => throwError(error)
            );
    }, [catalog]), []);

    useEffect(() => {
        sizes.width >= constants.WINDOW_DESKTOP_SIZE ? setIsDesktop(true) : setIsDesktop(false)
    }, [])

    const activeModal = useSelector(modalSelectors.modal)
    const womenModalIsActive = activeModal.some(stateId => stateId === 'women-modal')
    const menModalIsActive = activeModal.some(stateId => stateId === 'men-modal')



    const handleWomenBtnClick = () => {
        dispatch(modalOperations.toggleModal("women-modal"))
    };
    const handleMenBtnClick = () => {
        dispatch(modalOperations.toggleModal("men-modal"))
    };

    console.log(catalog)
    const mainCategoryLinks = catalog
        .filter(category => category.parentId === "null")
        .map(category => {
        return(<Box key={category._id}>
            {isDesktop
                ?
                <CatalogNavLink
                    pathTo={`/catalog/${category.id}`}
                    onHoverFunc={handleWomenBtnClick}
                    styles={womenModalIsActive ? CatalogNavStyles.NavItemBtnActive : CatalogNavStyles.NavItemBtnInactive}
                    text={category.name}/>
                :
                <CatalogNavButton
                    onClickFunc={handleWomenBtnClick}
                    styles={womenModalIsActive ? CatalogNavStyles.NavItemBtnActive : CatalogNavStyles.NavItemBtnInactive}
                    text={category.name}/>
            }
        </Box>)
    })

    return (
        <Box className={CatalogNavStyles.catalogNavWrapper} data-testid="catalog-nav">
            {/*<Box>*/}
            {/*    {isDesktop*/}
            {/*        ?*/}
            {/*        <CatalogNavLink*/}
            {/*            pathTo="/"*/}
            {/*            onHoverFunc={handleWomenBtnClick}*/}
            {/*            styles={womenModalIsActive ? CatalogNavStyles.NavItemBtnActive : CatalogNavStyles.NavItemBtnInactive}*/}
            {/*            text="women"/>*/}
            {/*        :*/}
            {/*        <CatalogNavButton*/}
            {/*            onClickFunc={handleWomenBtnClick}*/}
            {/*            styles={womenModalIsActive ? CatalogNavStyles.NavItemBtnActive : CatalogNavStyles.NavItemBtnInactive}*/}
            {/*            text="women"/>*/}
            {/*    }*/}
            {/*</Box>*/}
            {/*<Box>*/}
            {/*    {isDesktop*/}
            {/*        ?*/}
            {/*        <CatalogNavLink*/}
            {/*            pathTo="/"*/}
            {/*            onHoverFunc={handleMenBtnClick}*/}
            {/*            styles={menModalIsActive ? CatalogNavStyles.NavItemBtnActive : CatalogNavStyles.NavItemBtnInactive}*/}
            {/*            text="men"/>*/}
            {/*        :*/}
            {/*        <CatalogNavButton*/}
            {/*            onClickFunc={handleMenBtnClick}*/}
            {/*            styles={menModalIsActive ? CatalogNavStyles.NavItemBtnActive : CatalogNavStyles.NavItemBtnInactive}*/}
            {/*            text="men"/>*/}
            {/*    }*/}
            {/*</Box>*/}
            {/*<Box>*/}
            {/*    <Link to="/">*/}
            {/*        <button type="button" className={CatalogNavStyles.NavItemBtnInactive}>accessory</button>*/}
            {/*    </Link>*/}
            {/*</Box>*/}
            {/*{mainCategoryLinks}*/}
            {<WomenDropdown onLeave={handleWomenBtnClick}/>}
            {<MenDropdown onLeave={handleMenBtnClick}/>}
        </Box>
    );
}

export default CatalogNav;
