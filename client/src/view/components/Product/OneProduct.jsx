
import React, {useEffect, useState} from 'react';
import Axios from 'axios'
import OneProductInfo from "./Sections/OneProductInfo";
import ImageMagnify from "./Sections/ImageMagnify";
import OneProductStyles from "./OneProduct.module.scss";


const productOne =
    {
        "enabled": true,
        "imageUrls": [
            "https://res.cloudinary.com/originalite-and-co/image/upload/v1629374957/benjamin-rascoe-Z7b2Px6yT40-unsplash_jzhfue.jpg",
            "https://res.cloudinary.com/originalite-and-co/image/upload/v1629374957/benjamin-rascoe-Eav5V0COmQ4-unsplash_yvc00e.jpg",
            "https://res.cloudinary.com/originalite-and-co/image/upload/v1629374956/benjamin-rascoe-Ci_fZ5cL9Jo-unsplash_apbp39.jpg",
        ],
        "quantity": 156,
        "_id": "5da463678cca382250dd7bc7",
        "name": "Product 1",
        "currentPrice": 100,
        "previousPrice": 250,
        "categories": "men",
        "color": ["red", "blue", "yellow"],
        "sizes": ["S", "M", "L"],
        "productUrl": "/men",
        "brand": "braaaand",
        "myCustomParam": "some string or json for custom param",
        "itemNo": "291759",
        "date": "2019-10-14T12:00:39.679Z",
        "__v": 0,
        "oneMoreCustomParam": {
            "description": "blablabla",
            "rate": 4.8,
            "likes": 20
        }
    }


function OneProduct () {

    // const itemNo = props.match.params.itemNo

    // const [Product, setProduct] = useState([])

    // useEffect(() => {
    //     Axios
    //         .get(`/api/products/products_by_id?id=${itemNo}&type=single`) //query string строка запроса.Это параметры ключ=значение которые располагаются в request line после указания метода GET
    //         .then(response => {
    //             setProduct(response.data[0]) // need only one product info
    //         })
    //
    // }, [])

    return (
        <section className={OneProductStyles.container}>
            <div className={OneProductStyles.main}>
                <ImageMagnify detail={productOne}/>
                <OneProductInfo detail={productOne} />
            </div>
            <div>
                <h3>Recently viewed products</h3>
                <div className={OneProductStyles.images}>

                </div>
            </div>
        </section>
    );
}

export default OneProduct;
