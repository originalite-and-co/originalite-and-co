import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {Box} from "@material-ui/core";
import LocalMallIcon from '@material-ui/icons/LocalMall';
import {makeStyles} from "@material-ui/styles";
import Button from "../../../components/Button/Button";
import useWindowSize from "../../../hooks/useWindowSize";
import constants from "../../../constants";
import {Typography} from "@material-ui/core";
import {generateStyles} from "./Styles";

MyWishlist.propTypes = {
    wishlist: PropTypes.object.isRequired
};

function MyWishlist({wishlist}) {
    const useStyles = makeStyles(generateStyles)
    const classes = useStyles()

    const {width} = useWindowSize()

    const [isDesktop, setIsDesktop] = useState()

    useEffect(() => {
        setIsDesktop(width >= constants.WINDOW_DESKTOP_SIZE);
    }, [width])

    let wishlistList;
    wishlist !== null && wishlist !== undefined
        ?
        wishlistList =
            wishlist.products.map(wish => (
                <Box key={Math.floor(Math.random() * 100000)} className={classes.purchaseItem}>
                    <Box className={classes.imageAndInfo}>
                        <Box>
                            <img className={classes.purchaseItemImg} src={wish.imageUrls[0]} alt="item"/>
                        </Box>
                        <Box className={classes.itemInfoBlock}>
                            <p className={classes.purchaseItemTitle}>{wish.name}</p>
                            <p className={classes.purchaseItemAddInfo}>REF: {wish.itemNo}</p>
                            <p className={classes.purchaseItemAddInfo}>Color {wish.color}</p>
                            <p className={classes.purchaseItemAddInfo}> Price ${wish.currentPrice} USD</p>
                        </Box>
                    </Box>
                    <Box className={classes.btnsWrapper}>
                        {isDesktop
                            ? <Button color="#FFFFFF" onClick={() => {
                                console.log('add to cart')
                            }} backgroundColor="#000000" text="ADD TO CART" type="button"/>
                            : <button className={classes.cartBtn} onClick={() => {
                                console.log('add to cart')
                            }}>add to {<LocalMallIcon/>}</button>
                        }
                        <button className={classes.removeBtn} onClick={() => {
                            console.log('remove from cart')
                        }}>remove
                        </button>
                    </Box>
                </Box>
            ))
        :
        wishlistList = <Typography
            style={{textAlign: "center"}}
            variant='body1'
            component="h2"
            color="textSecondary"
        >
            Your wishlist is empty
        </Typography>

    return (
        <Box>
            {wishlistList}
        </Box>
    );
}


export default MyWishlist;