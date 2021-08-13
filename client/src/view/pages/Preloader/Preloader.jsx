import React, { useEffect, useState } from 'react';
import ReactLoading from 'react-loading';

import { withStyles } from '@material-ui/core/styles';
import Style from './Preloader.module.scss';
import PropTypes from 'prop-types';
import { green } from '@material-ui/core/colors';

// Preloader.propTypes = {
// };

function Preloader(props) {

   const [data, setData] = useState([]);
   const [Done, setDone] = useState(undefined);

   useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/posts/1')
         .then((response) => response.json())
         .then((json) => {
            setData(json);
         });
   }, [])

    return (
       <>
          <ReactLoading type={bars} color={green} height={'667'} width={'375'} />
        </>
    );
}

export default Preloader;
