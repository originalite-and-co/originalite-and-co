
import React, {useEffect, useState} from 'react';
import Axios from 'axios'
import OneProductInfo from "./Sections/OneProductInfo";
import ImageMagnify from "./Sections/ImageMagnify";
import OneProductStyles from "./OneProduct.module.scss";

const productOne = {
        enabled: true,
        imageUrls: [
        "image1.jpg",
        "image2.jpg",
        "image3.jpg",
        ],
        quantity: 156,
        _id: 1,
        name: "Product 1",
        currentPrice: 100,
        previousPrice: 250,
        categories: "men",
        color: ["red", "blue", "black"],
        sizes: ["L", "M", "S"],
        productUrl: "/men",
        brand: "braaaand",
        myCustomParam: "some string or json for custom param",
        itemNo: 291759,
        date: "2019-10-14T12:00:39.679Z",
        __v: 0,
        description: "dfjkdfjkdjfkdjkdjfk"
}


function OneProduct () {

    // const productId = props.match.params.productId

    // const [Product, setProduct] = useState([])

    // useEffect(() => {
    //     Axios
    //         .get(`/api/products/products_by_id?id=${productId}&type=single`) //query string строка запроса.Это параметры ключ=значение которые располагаются в request line после указания метода GET
    //         .then(response => {
    //             setProduct(response.data[0]) // need only one product info
    //         })
    //
    // }, [])

    // setProduct(productOne)

    return (
        <section className={OneProductStyles.container}>
            <div className={OneProductStyles.main}>
                <ImageMagnify detail={productOne}/>
                <OneProductInfo detail={productOne}/>
            </div>
            <div>
                <h3>COMPLETE YOUR LOOK</h3>
                <div className={OneProductStyles.images}>
                    <img src="image1.jpg"alt=""/>
                    <img src="image2.jpg" alt=""/>
                    <img src="image3.jpg" alt=""/>
                    <img src="image1.jpg" alt=""/>
                </div>
            </div>
        </section>
    );
}

export default OneProduct;
