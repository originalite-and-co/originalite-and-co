import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import OneProductStyles from "../OneProduct.module.scss";

export default function ImageMagnify(props) {
    const renderSlides = () =>
        props.detail.imageUrls.map(num => (
            <div>
                <img src={num} alt=""/>
            </div>
        ));

    return (
        <div className="App">
            <Slider dots={true} infinite={true} speed={1000} slidesToScroll={1} arrows={true} slidesToShow={1} className={OneProductStyles.slider}>
                {renderSlides()}
            </Slider>
        </div>
    );
}