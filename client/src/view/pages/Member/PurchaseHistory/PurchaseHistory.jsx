import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {ordersRequests} from "../../../../api/server";
import useAsyncError from "../../../hooks/useAsyncError";
import {Box, List, ListItem} from "@material-ui/core";
import useStyles from './PurchaseHistoryStyles'

PurchaseHistory.propTypes = {
    orders: PropTypes.array.isRequired
};

function PurchaseHistory({orders}) {
    const {purchaseItem,
        purchaseItemImg,
        purchaseItemTitle,
        purchaseItemAddInfo,
        itemInfoBlock
    } = useStyles()

    const ordersArray = orders.map(order => order.products)
    console.log(ordersArray)
    const productsArray = ordersArray.map(orderProduct => orderProduct[0].product)
    const productsList = productsArray.map(product => (
        <ListItem key={Math.floor(Math.random() * 10000)} className={purchaseItem}>
            <Box>
                <img className={purchaseItemImg} src={product.imageUrls[0]} alt="purchased item"/>
            </Box>
            <Box className={itemInfoBlock}>
                <p className={purchaseItemTitle}>{product.name}</p>
                <p className={purchaseItemAddInfo}>Size {product.size}</p>
                <p className={purchaseItemAddInfo}>Color {product.color}</p>
                <p className={purchaseItemAddInfo}>Total price ${product.currentPrice} USD</p>
            </Box>
        </ListItem>
    ))

    return (
        <>
            <List data-testid="purchase-history-list">
                {productsList}
            </List>
        </>
    );
}

export default PurchaseHistory;