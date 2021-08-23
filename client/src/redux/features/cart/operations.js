import {cartRequests} from '../../../api/server';
import actions from './actions';

const getCart = () => async (dispatch) => {
  try{
    const response = await cartRequests.retrieveCart();
    const data = response.products.map(({ cartQuantity, product }) => ({
      cartQuantity,
      _id: product._id,
    }));
    dispatch(actions.getCart(data));
  }catch (error) {
    console.error(error)
  }
};

const addProductToCart = (id) => async (dispatch) => {
  try{

  } catch (error) {

  }
};

const operations = {
  getCart,

};

function getCartProducts (cart) {

}

export default operations;