import ProductCard from '../ProductCard/ProductCard';
import styles from "./CardList.module.scss";
import {useEffect, useState} from "react";
import {productRequests} from "../../../api/server";
import useAsyncError from "../../hooks/useAsyncError";
import {Grid} from "@material-ui/core";


const CardList = () => {
    const [productList, setProductList] = useState([]);
    const [apiError, setApiError] = useState('');
    // const products = productRequests.retrieveProduct();
    const throwError = useAsyncError();
    useEffect(()=> {
        productRequests.retrieveProduct()
        .then(
            res => setProductList(res),
            error => {
                throwError(error)
            setApiError(error);
            }
        );


    }, [])
 if (apiError)
 {
     return (
         <div>ERROR</div>
     )
 }

    return (
        <div data-testid={"product-list"} className={styles.cardListCards}>
            {
                productList.map((product) => (<ProductCard product={product} key={product._id}/>))
            }

        </div>
    );

};

export default CardList;
