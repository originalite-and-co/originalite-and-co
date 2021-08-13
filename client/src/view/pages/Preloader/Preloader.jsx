import React, { useEffect, useState } from 'react';
import ReactLoading from 'react-loading';


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
