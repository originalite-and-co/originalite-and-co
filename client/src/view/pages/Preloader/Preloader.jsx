import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Lottie from "react-lottie";
import styles from './Preloader.module.scss';

import * as location from './1055-world-locations.json'

const defaultOptions = {
   loop: true,
   autoplay: true,
   animationData: location.default,
   rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
   }
 };

// Preloader.propTypes = {
// };

function Preloader(props) {

   const [data, setData] = useState([]);
   const [loading, setloading] = useState(undefined);
   // const [complited, setcomplited] = useState(undefined);

   useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
         .then((response) => response.json())
         .then((json) => {
            console.log(json);
            setData(json);
            setloading(true);

            // setTimeout(() => {
            //    setcomplited(true);
            // }, 1000);
         });
   }, []);

   return (
      <>
         <div className={styles.ContainerPreloader}>
         {!loading ? (
            
            <Lottie options={defaultOptions}
              height={500}
              width={500}
            />
         ) : (
               <h1></h1>
            )}
            </div>
      </>
   );
}

export default Preloader;