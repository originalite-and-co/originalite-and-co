import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {Box} from "@material-ui/core";
import LocalMallIcon from '@material-ui/icons/LocalMall';
import {makeStyles} from "@material-ui/styles";
import Button from "../../../components/Button/Button";
import useWindowSize from "../../../hooks/useWindowSize";
import constants from "../../../constants";

MyWishlist.propTypes = {
   wishlist: PropTypes.object.isRequired
};

const useStyles = makeStyles(generateStyles);

function MyWishlist({wishlist}) {
    const classes = useStyles()
    const {width} = useWindowSize()

    const [isDesktop, setIsDesktop] = useState()

    useEffect(() => {
        setIsDesktop(width >= constants.WINDOW_DESKTOP_SIZE);
    }, [width])

    const wishListProducts = wishlist.products

    const wishlistList = wishListProducts.map(wish => (
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
                        ? <Button color="#FFFFFF" onClick={() => {console.log('add to cart')}} backgroundColor="#000000" text="ADD TO CART" type="button"/>
                        : <button className={classes.cartBtn} onClick={() => {console.log('add to cart')}}>add to {<LocalMallIcon/>}</button>
                    }
                    <button className={classes.removeBtn} onClick={() => {console.log('remove from cart')}}>remove</button>
                </Box>
            </Box>
    ))

    return (
        <Box>
            {wishlistList}
        </Box>
    );
}

function generateStyles({breakpoints}) {
    return {
        purchaseItem: {
            display: 'flex',
            justifyContent: "space-between",
            alignItems: 'center',
            marginBottom: '5px',
            paddingBottom: "5px",
            borderBottom: "1px solid #847A7A",

            [breakpoints.up('desktop')]: {
                paddingBottom: '15px',
                paddingTop: '15px'
            }
        },
        itemInfoBlock: {
            marginLeft: '20px'
        },
        purchaseItemImg: {
            height: '97px',

            [breakpoints.up("desktop")]: {
                height: '174px',
            }
        },
        purchaseItemTitle: {
            textTransform: 'capitalize',
            fontFamily: "Open Sans",
            fontSize: '14px',
            lineHeight: '19px',
            color: '#000000',

            [breakpoints.up("desktop")]: {
                fontSize: '18px',
                lineHeight: '25px',
                fontWeight: 'bold',
                textTransform: 'uppercase',
                paddingBottom: '16px'
            }
        },
        purchaseItemAddInfo: {
            fontFamily: "Open Sans",
            fontSize: '12px',
            lineHeight: '16px',
            color: '#847A7A',

            [breakpoints.up('desktop')]: {
                fontSize: '16px',
                lineHeight: '22px',
                paddingBottom: '16px'
            }
        },
        imageAndInfo: {
            display: "flex"
        },
        btnsWrapper: {
            display: "flex",
            flexDirection: 'column'
        },
        cartBtn: {
            fontFamily: "Open Sans",
            fontSize: '14px',
            lineHeight: '12px',
            border: "none",
            backgroundColor: 'white',
            display: 'flex',
            alignItems: 'center',
            marginBottom: '5px'
        },
        removeBtn: {
            fontFamily: "Open Sans",
            fontSize: '14px',
            lineHeight: '12px',
            border: "none",
            backgroundColor: 'white',
            color: "#847A7A",
            marginTop: '5px'
        }
    }
}

export default MyWishlist;