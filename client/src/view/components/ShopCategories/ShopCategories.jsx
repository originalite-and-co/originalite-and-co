import {useEffect, useState} from "react";
import {catalogRequests} from "../../../api/server";
import useAsyncError from "../../hooks/useAsyncError";
import styles from "./ShopCategories.module.scss"
import CategoryCard from "../CategoryCard/CategoryCard";
import {Grid} from "@material-ui/core";

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

    const list = categoryList.map((product, index) =>
    {
        const isLast = categoryList.length === index+1;
        return <CategoryCard size={isLast? 12 : 4} product={product} key={product._id}/>
    }
    )


    return (
        <div className={styles.shopCategoryWrapper}>
            <div className={styles.shopCategory} >Shop by Category</div>

            <Grid container direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  spacing={2}
                  className={styles.categoryWrapper}
            >
            {list}
            </Grid>
        </div>
    );

};

export default ShopCategories;
