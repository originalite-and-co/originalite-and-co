import React from 'react';
import { useDispatch } from 'react-redux';

import Slider from '@material-ui/core/Slider';
import { filterActions } from '../../../../../redux/features/filters/index';

import PriceStyle from './style';

const PriceSlider = PriceStyle(Slider);

const PriceFilter = () => {
  const min = 0;
  const max = 10000;
  const dispatch = useDispatch();

  return (
    <PriceSlider
      min={min}
      max={max}
      defaultValue={[min, max]}
      onChangeCommitted={(_, range) => {
        const [minPrice, maxPrice] = range.map(String);
        dispatch(
          filterActions.addFilter({
            minPrice,
            maxPrice,
          }),
        );
      }}
      valueLabelDisplay="auto"
      aria-labelledby="range-slider"
    />
  );
};

export default PriceFilter;
