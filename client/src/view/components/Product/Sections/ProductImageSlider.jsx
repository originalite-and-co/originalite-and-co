import React, {useMemo} from "react";
import Carousel, {productPage} from '../../../components/Carousel';
import { Box } from '@material-ui/core';
import Image from '../../../components/Image';
import ProductStyles from "../Product.module.scss";

export default function ProductImageSlider(props) {

    const { slideProduct, carouselProduct, useStylesProduct } = productPage;
    const classes = useStylesProduct();

    const renderSlides = useMemo(
        () =>
            props.detail.imageUrls.map(( item, id ) => (
                <Image key={id} src={item}  className="swiper__image" />
            )),
        [props.detail.imageUrls]
    );

    return (
        <Box className={ProductStyles.wrapper_carousel_product}>
            <Box className={classes.headerCarousel}>
                <Carousel
                    slides={renderSlides}
                    slideProps={slideProduct}
                    carouselProps={carouselProduct}
                />
            </Box>
        </Box>
    );
}