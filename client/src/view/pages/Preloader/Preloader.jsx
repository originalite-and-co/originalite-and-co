import React, { useEffect, useState } from 'react';
import ReactLoading from 'react-loading';
import Style from './Preloader.module.scss';

Preloader.propTypes = {
};

function Preloader(props) {

   const [data, setData] = useState([]);
   const [done, setDone] = useState(undefined);

   useEffect(() => {
         fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((json) => {
               console.log(json);
               setData(json);
               setDone(true);
            });
   }, []);

    return (
       <>
          {!done ? (
            <ReactLoading
                type={'bars'}
                color={'bleack'}
                height={200}
                width={200}
            />
         ) : (
               <ul>
               {
                  data.map(post => (
                     <li key={post.id}>{post.title}</li>
                  ))
               }
            </ul> 
            )
          }
        </>
    );
}

export default Preloader;
