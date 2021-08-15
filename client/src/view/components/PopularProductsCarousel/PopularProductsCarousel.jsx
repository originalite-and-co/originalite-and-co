import SwiperCore, { Navigation, Pagination, Scrollbar,A11y } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import ProductCard from "../ProductCard/ProductCard";
import React, {useEffect, useState} from "react";
import {productRequests} from "../../../api/server";
import useAsyncError from "../../hooks/useAsyncError";
import Carousel, {popularProductCard} from "../Carousel";
import {Typography} from "@material-ui/core";

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const PopularProductsCarousel = () => {
    const {slide, carousel} = popularProductCard;
    const [productList, setProductList] = useState([]);
    const [apiError, setApiError] = useState('');
    const throwError = useAsyncError();
    useEffect(() => {
        productRequests.retrieveProduct()
            .then(
                res => setProductList(res),
                error => {
                    throwError(error)
                    setApiError(error);

                }
            );


    }, [])
    const slides = productList.map((product) => (
        <ProductCard product={product} key={product._id}/>))
    return (
        <div data-testid={"popular-product-carousel"} className={"carousel"}>
            <Typography>Popular</Typography>
                <Carousel components={slides}
                          carouselProps={carousel} slideProps={slide}/>
        </div>)
}

export default PopularProductsCarousel;