const slide = {
    className: 'swiper__slide'
};

const carousel = {
    effect: 'cube',
    navigation: true,
    pagination: {
        clickable: true
    },
    className: "popularProdCard"
};

const popularProductsSlide = {
    className: "popularSlide"
};
const popularProductsCarousel = {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 20,
    pagination: {
        clickable: true
    },
}

export default { slide, carousel,popularProductsCarousel,popularProductsSlide };