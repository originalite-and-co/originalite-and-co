import React from "react";
import ReactImageMagnify from "react-image-magnify";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import OneProductStyles from "../OneProduct.module.scss";

export default function ImageMagnify(props) {
    const renderSlides = () =>
        props.detail.imageUrls.map(num => (
            <div>
                <ReactImageMagnify
                    {...{
                        smallImage: {
                            isFluidWidth: false,
                            src: num,
                            width: 400,
                            height: 500,
                            // sizes: '(max-width: 480px) 100vw, (max-width: 1200px) 30vw, 360px'
                        },
                        largeImage: {
                            src: num,
                            width: 600,
                            height: 800
                        }
                    }}
                />
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