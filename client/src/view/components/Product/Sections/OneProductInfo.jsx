import React, {useState} from 'react'
import OneProductStyles from '../OneProduct.module.scss'


function OneProductInfo({availableSizes, detail}) {

    // const [isActiveColor, setActiveColor] = useState(null);
    const [activeSize, setActiveSize] = useState(null)

    const {sizes, name, currentPrice, itemNo, color} = detail


    const onSelectSize = (index) => {
        setActiveSize(index)
    }

    // const onSelectColor = (index) => {
    //     setActiveColor(index)
    // }

    return (
        <div className={OneProductStyles.info}>
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
            <h3>Size</h3>
            <div className={OneProductStyles.sizes}>
                <ul>
                    {availableSizes.map((item, index) => (
                        <li
                            key={item}
                            onClick={() => onSelectSize(index)}
                            className={
                                !sizes.includes(item) ? OneProductStyles.disabled : "" ||
                                activeSize === index ? OneProductStyles.active : ''}>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
            <button className={activeSize !== null ? OneProductStyles.active_button : OneProductStyles.button}>
                Add to cart
            </button>
        </div>
    )
}

export default OneProductInfo