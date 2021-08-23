import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function ImageMagnify(props) {
  const renderSlides = () =>
    props.detail.imageUrls.map((num) => (
      <div>
        <img src={num} alt="" />
      </div>
    ));

  return <div className="App"></div>;
}
