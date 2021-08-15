import React from 'react'
import OneProductStyles from '../OneProduct.module.scss'

function OneProductInfo(props) {

    return (

        <div className={OneProductStyles.info}>
            <div className={OneProductStyles.row}>
                <h2>{props.detail.name}</h2>
                <span>{props.detail.currentPrice} $</span>
            </div>
            <span className={OneProductStyles.itemNo}>{props.detail.itemNo}</span>
            <h3>Color</h3>
            <div className={OneProductStyles.color}>
                {
                    props.detail.color.map(item => (
                        <>
                            <button style={{background: item}}></button>
                        </>

                        )
                    )
                }
            </div>

            <h3>Details</h3>
            <p>{props.detail.description}</p>
            <h3>Size</h3>
            <div className={OneProductStyles.sizes}>
                {
                    props.detail.sizes.map(item => (
                        <span> {item}, </span>
                    ))
                }
            </div>
            <button className={OneProductStyles.button}>Add to cart</button>
        </div>
    )
}

export default OneProductInfo