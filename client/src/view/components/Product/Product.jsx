import React, {useEffect, useState} from 'react';
import ProductInfo from "./Sections/ProductInfo";
import ProductImageSlider from "./Sections/ProductImageSlider";
import ProductStyles from "./Product.module.scss";
import {useRouteMatch} from "react-router-dom";
import {productRequests, sizeRequests} from "../../../api/server";
import useAsyncError from "../../hooks/useAsyncError";
import ViewedProducts from "./Sections/ViewedProducts";

function Product() {

    const [product, setProduct] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)
    const [availableSizes, setAvailableSizes] = useState([])

    const {params, url} = useRouteMatch()

    const itemNumber = params.itemNumber

    const throwAsyncError = useAsyncError()

    useEffect(() => {
        setIsLoaded(false)
        sizeRequests.retrieveSizes()
            .then(sizes => {
                    setAvailableSizes(sizes.map(size => size.name))

                },
                error => throwAsyncError(error))
    }, [])

    useEffect(() => {
            setIsLoaded(false)
            productRequests.retrieveProductByItemNumber(itemNumber)
                .then(product => {
                        setProduct(product)
                        setIsLoaded(true)
                    },
                    error => throwAsyncError(error))
        }, [url]
    )

    return isLoaded ? (
        <section className='wrapper'>
            <div className={ProductStyles.main}>
                <ProductImageSlider detail={product}/>
                <ProductInfo detail={product} availableSizes={availableSizes}/>
            </div>
            <h3 className={ProductStyles.viewed_title}>Recently viewed products</h3>
            <ViewedProducts activeProductNumber={itemNumber}/>
        </section>
    ) : <p>Loading...</p>;
}

export default Product;
