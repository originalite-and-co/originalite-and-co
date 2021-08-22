import React from 'react';
import { useDispatch } from 'react-redux';

import Slider from '@material-ui/core/Slider';
import { filterActions } from '../../../../../redux/features/filters/index';

import usePriceStyle from './style';

const PriceFilter = () => {
  const dispatch = useDispatch();
  const PriceSlider = usePriceStyle(Slider);

  return (
    <PriceSlider
      defaultValue={[0, 10000]}
      onChangeCommitted={(_, range) => {
        const [minPrice, maxPrice] = range.map(String);
        dispatch(
          filterActions.addFilter({
            minPrice,
            maxPrice,
          })
        );
      }}
      valueLabelDisplay="auto"
      aria-labelledby="range-slider"
    />
  );
};

export default PriceFilter;
