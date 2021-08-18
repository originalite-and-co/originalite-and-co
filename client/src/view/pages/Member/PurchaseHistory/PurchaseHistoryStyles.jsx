import React from 'react';
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
    purchaseItem: {
        display: 'flex',
        alignItems: 'flex-start',
        marginBottom: '5px',
        borderBottom: "1px solid #847A7A",
        borderTop: "1px solid #847A7A"
    },
    itemInfoBlock: {
      marginLeft: '20px'
    },
    purchaseItemImg: {
        height: '97px'
    },
    purchaseItemTitle: {
        textTransform: 'capitalize',
        fontFamily: "Open Sans",
        fontSize: '14px',
        lineHeight: '19px',
        color: '#000000'
    },
    purchaseItemAddInfo: {
        fontFamily: "Open Sans",
        fontSize: '12px',
        lineHeight: '16px',
        color: '#847A7A'
    }
})

export default useStyles;