import React, {useEffect, useState} from 'react';
import OneProductStyles from '../Product.module.scss';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import {Box} from '@material-ui/core';
import {useDispatch, useSelector} from 'react-redux';
import {wishlistOperations} from '../../../../redux/features/wishlist';
import FavoriteIcon from '@material-ui/icons/Favorite';
import {authorizationSelectors} from '../../../../redux/features/authorization';
import Toast from '../../Toast/Toast';

function ProductInfo({availableSizes, detail, wishlistIDs}) {
    // const [isActiveColor, setActiveColor] = useState(null);
    const [activeSize, setActiveSize] = useState(null);
    const [addedToWishlist, setAddedToWishlist] = useState();
    const [authorizeToaster, setAuthorizeToaster] = useState();
    const dispatch = useDispatch();
    const {sizes, name, currentPrice, itemNo, color, description, _id} = detail;
    const isInWishlist = wishlistIDs.some((id) => id === _id);
    const isAuthorized = useSelector(authorizationSelectors.authorization);

    useEffect(() => {
        isInWishlist ? setAddedToWishlist(true) : setAddedToWishlist(false);
    }, []);

    const onSelectSize = (index) => {
        setActiveSize(index);
    };
    const addToWishlist = () => {
        if (!isAuthorized) {
            setAuthorizeToaster(true);
            return;
        }
        setAddedToWishlist(true);
        dispatch(wishlistOperations.addToWishlist(_id));
    };
    const removeFromWishlist = () => {
        setAddedToWishlist(false);
        dispatch(wishlistOperations.removeFromWishlist(_id));
    };

    let favIcon;

    addedToWishlist
        ? (favIcon = (
            <FavoriteIcon
                color="secondary"
                fontSize="large"
                onClick={removeFromWishlist}
            />
        ))
        : (favIcon = (
            <FavoriteBorderIcon
                color="secondary"
                fontSize="large"
                onClick={addToWishlist}
            />
        ));

    const handleAddToCartBtnClick = (event) => {
        console.log(activeSize)
    }

    return (
        <div className={OneProductStyles.info}>
            {authorizeToaster && (
                <Toast
                    message="Log in to add the item to your wishlist"
                    severity="error"
                />
            )}
            <div className={OneProductStyles.row}>
                <h2>{name}</h2>
                <span>{currentPrice} $</span>
            </div>
            <span className={OneProductStyles.itemNo}>{itemNo}</span>
            <h3>Color</h3>
            {/*<div className={OneProductStyles.color}>*/}
            {/*    {*/}
            {/*        color && color.map((item, index) => (*/}
            {/*            <>*/}
            {/*                <button*/}
            {/*                    type='radio'*/}
            {/*                    key={`${item}_${index}`}*/}
            {/*                    style={{background: item}}*/}
            {/*                    className={isActiveColor === index ? OneProductStyles.active : ''}*/}
            {/*                    onClick={() => onSelectColor(index)}>*/}
            {/*                </button>*/}
            {/*            </>*/}

            {/*            )*/}
            {/*        )*/}
            {/*    }*/}
            {/*</div>*/}
            <h3>Details</h3>
            <div className={OneProductStyles.description}>{description}</div>
            <h3>Size</h3>
            <div>
                <ul className={OneProductStyles.sizes}>
                    {availableSizes.map((item, index) => (
                        <li
                            key={item}
                            onClick={() => onSelectSize(index)}
                            className={
                                !sizes.includes(item)
                                    ? OneProductStyles.disabled
                                    : '' || activeSize === index
                                        ? OneProductStyles.active
                                        : ''
                            }
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
            <div className={OneProductStyles.button_addToCart}>
                <button className={activeSize !== null ? OneProductStyles.active : OneProductStyles.button}>
                    Add to cart
                </button>
            </div>
            <div className={OneProductStyles.button_addToCart}>
                <Box className={OneProductStyles.buttonsGroup}>
                    <button
                        onClick={handleAddToCartBtnClick}
                        className={
                            activeSize !== null
                                ? OneProductStyles.active
                                : OneProductStyles.button
                        }
                    >
                        Add to cart
                    </button>
                    <Box className={OneProductStyles.favIcon}>{favIcon}</Box>
                </Box>
            </div>
        </div>
    );
}

export default ProductInfo;
