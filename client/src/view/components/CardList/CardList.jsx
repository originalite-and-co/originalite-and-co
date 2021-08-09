import ProductCard from '../ProductCard/ProductCard';
import "./CardList.scss";
import {useEffect, useState} from "react";
import {productRequests} from "../../../api/server";


const CardList = () => {
    const [productList, setProductList] = useState([]);
    const products = productRequests.retrieveProduct();
    const throwError = useAsyncError();
    useEffect(()=> {
        productRequests.retrieveProduct()
        .then(
            res => setProductList(res),
            error => throwError(error)
        );


    }, [])


    return (
        <div data-testid={"product-list"} className={"card-list__cards"}>
            {
                productList.map((product) => (<ProductCard product={product} key={product._id}/>))
            }

        </div>
    );

};

export default CardList;
