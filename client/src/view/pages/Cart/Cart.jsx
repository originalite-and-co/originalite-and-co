import React, { useEffect } from "react";
import { cartOperations } from "../../../redux/features/cart";
import { useDispatch, useSelector } from "react-redux";
import {
  authorizationSelectors,
  authorizeOperations,
} from "../../../redux/features/authorization";
import useAsyncError from "../../hooks/useAsyncError";

Cart.propTypes = {};

function Cart(props) {
  const dispatch = useDispatch();
  const isUserAuthorized = useSelector(authorizationSelectors.authorization);
  const throwAsyncError = useAsyncError();
  useEffect(() => {
    dispatch(authorizeOperations.authorizeUser());
    dispatch(cartOperations.getCart()).catch((err) => throwAsyncError(err));
  }, [isUserAuthorized]);
  return <div>Cart</div>;
}

export default Cart;
