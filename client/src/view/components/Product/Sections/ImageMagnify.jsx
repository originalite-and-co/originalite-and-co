import React from 'react';

export default function ImageMagnify(props) {
  const renderSlides = () =>
    props.detail.imageUrls.map((num) => (
      <div>
        <img src={num} alt="" />
      </div>
    ));

  return <div className="App"></div>;
}
