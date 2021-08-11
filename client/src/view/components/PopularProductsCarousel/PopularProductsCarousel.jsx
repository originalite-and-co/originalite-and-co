// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar,A11y } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import ProductCard from "../ProductCard/ProductCard";
import {useEffect, useState} from "react";
import {productRequests} from "../../../api/server";
import useAsyncError from "../../hooks/useAsyncError";

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const PopularProductsCarousel = () => {
    const [productList, setProductList] = useState([]);
    const [apiError, setApiError] = useState('');
    const throwError = useAsyncError();
    useEffect(()=> {
        productRequests.retrieveProduct()
            .then(
                res => setProductList(res),
                error => {
                    throwError(error)
                    setApiError(error);

                }
            );


    }, [])
    return (
        <div>
            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                {
                    productList.map((product) => (
                        <SwiperSlide className="slide">
                        <ProductCard product={product} key={product._id}/>
                        </SwiperSlide>))
                }
        </Swiper>
        </div>
    );
};
export default PopularProductsCarousel;