import React, {useState} from 'react'
import OneProductStyles from '../Product.module.scss'



function ProductInfo({availableSizes, detail, availableColors}) {

    // const [isActiveColor, setActiveColor] = useState(null);
    const [activeSize, setActiveSize] = useState(null)

    const {sizes, name, currentPrice, itemNo, color, description} = detail

    const productColor = availableColors.find(item => item.name === color)

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
            <div className={OneProductStyles.color}>
                <button
                    type='radio'
                    style={{background: productColor.cssValue}}>
                </button>
            </div>
            <h3>Details</h3>
            <div className={OneProductStyles.description}>{description}</div>
            <h3>Size</h3>
            <div >
                <ul className={OneProductStyles.sizes}>
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
            <div className={OneProductStyles.button_addToCart}>
                <button className={activeSize !== null ? OneProductStyles.active : OneProductStyles.button}>
                    Add to cart
                </button>
            </div>
        </div>
    )
}

export default ProductInfo