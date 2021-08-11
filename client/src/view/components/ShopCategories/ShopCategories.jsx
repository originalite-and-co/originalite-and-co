import {useEffect, useState} from "react";
import {catalogRequests} from "../../../api/server";
import useAsyncError from "../../hooks/useAsyncError";
import styles from "./ShopCategories.module.scss"
import CategoryCard from "../CategoryCard/CategoryCard";

const ShopCategories = () => {
    const [categoryList, setCategoryList] = useState([]);
    const [apiError, setApiError] = useState('');
    const throwError = useAsyncError();
    useEffect(()=> {
        catalogRequests.getCatalog()
            .then(
                res => setCategoryList(res.splice(0,4)),
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
        <div className={styles.shopCategoryWrapper}>
            <div className={styles.shopCategory} >Shop by Category</div>
            <div className={styles.categoryWrapper}>
            {
                categoryList.map((product) => (<CategoryCard product={product} key={product._id}/>))
            }
            </div>
        </div>
    );

};

export default ShopCategories;
