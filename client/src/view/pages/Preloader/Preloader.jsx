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
            console.log(json);
            setData(json);
            setDone(true);
         });
   }, []);

    return (
       <>
          
             !done ? <ReactLoading type={'bars'} color={'green'} height={100} width={100} />
          
        </>
    );
}

export default Preloader;
