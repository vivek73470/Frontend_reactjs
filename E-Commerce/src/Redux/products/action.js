import axios from 'axios';
import * as types from './actionType';
// import { type } from '@testing-library/user-event/dist/type';

const fetchDataRequest = () => {
    return {
        type: types.FETCH_DATA_REQUEST,

    }
}

const fetchDataSuccess = (payload) => {
    return {
        type: types.FETCH_DATA_SUCCESS,
        payload,
    }
}

const fetchDataFailure = () => {
    return {
        type: types.FETCH_DATA_FAILURE,

    }
}


const fetchData = (params) => (dispatch) => {
    console.log("par",params)
    dispatch(fetchDataRequest());
    axios.get(`http://localhost:8080/products`, params)
        .then((r) => dispatch(fetchDataSuccess(r.data)))
        // This response(r) object contains various properties including the data property, which holds the response data returned from the server.
        .catch((e) => dispatch(fetchDataFailure(e.data)))
};


const getSingleProductRequest = () => {
    return {
        type: types.GET_SINGLE_PRODUCT_REQUEST,

    }
}

const getSingleProductSuccess = (payload) => {
    return {
        type: types.GET_SINGLE_PRODUCT_SUCCESS,
        payload,
    }
}

const getSingleProductFailure = () => {
    return {
        type: types.GET_SINGLE_PRODUCT_FAILURE,

    }
}

const getSingleProduct = (id) => (dispatch) => {
    dispatch(getSingleProductRequest())
    axios.get(`http://localhost:8080/products/${id}`)
        .then(r => dispatch(getSingleProductSuccess(r.data)))
        .catch(e => dispatch(getSingleProductFailure(e.data)))
}

const addProductCartRequest = () => {
    return {
        type: types.ADD_PRODUCT_CART_REQUEST,

    }
}

const addProductCartSuccess = (payload) => {
    return {
        type: types.ADD_PRODUCT_CART_SUCCESS,
        payload,
    }
}

const addProductCartFailure = () => {
    return {
        type: types.ADD_PRODUCT_CART_FAILURE,

    }
}

// prod is a parameter representing the product that you want to add to the cart
const addProductCart = (prod) => (dispatch) => {
    dispatch(addProductCartRequest());
    axios.post(`http://localhost:8080/cart`, prod)
        .then(r => dispatch(addProductCartSuccess(r.data)))
        .catch(e => dispatch(addProductCartFailure(e.data)))
}

const fetchCartRequest = () => {
    return {
        type: types.FETCH_CART_REQUEST,

    }
}

const fetchCartSuccess = (payload) => {
    return {
        type: types.FETCH_CART_SUCCESS,
        payload,
    }
}

const fetchCartFailure = () => {
    return {
        type: types.FETCH_CART_FAILURE,

    }
}

const fetchCart = (payload) => (dispatch)=>{
    dispatch(fetchCartRequest());
    axios.get(`http://localhost:8080/cart`)
    .then(r => dispatch(fetchCartSuccess(r.data)))
    .catch(e => dispatch(fetchCartFailure(e.data)))

}


const deleteProductCartRequest = () => {
    return {
        type: types.REMOVE_PRODUCT_CART_REQUEST,

    }
}

const deleteProductCartSuccess = (payload) => {
    return {
        type: types.REMOVE_PRODUCT_CART_SUCCESS,
        payload,
    }
}

const deleteProductCartFailure = () => {
    return {
        type: types.REMOVE_PRODUCT_CART_FAILURE,

    }
}

const deleteProductCart =(id)=> (dispatch) =>{
    dispatch(deleteProductCartRequest())
    axios.delete(`http://localhost:8080/cart/${id}`)
    .then((r) => {
     dispatch(deleteProductCartSuccess(r.data))
 } )
 .then(() => dispatch(fetchCart()))
    .catch((e) => dispatch(deleteProductCartFailure(e.data)))
}

 const addOrderRequest = () =>{
    return{
        type:types.ADD_ORDER_REQUEST
    }
 }
 const addOrderSuccess = (payload) =>{
    return{
        type:types.ADD_ORDER_SUCCESS,
        payload,
    }
 }
 const addOrderFailure = (payload) =>{
    return{
        type:types.ADD_ORDER_FAILURE,
        payload,
    }
 }

const addOrder = (payload) => (dispatch) => {
    dispatch(addOrderRequest());

    axios.post(`http://localhost:8080/orders`, payload)
        .then(response => {
            // Dispatch action indicating success and possibly pass response data
            dispatch(addOrderSuccess(response.data));
        })
        .then(()=>dispatch(emptyCart(payload)))
        .catch(error => {
            // Dispatch action indicating failure and possibly pass error data
            dispatch(addOrderFailure(error));
        });
}

const emptyCartRequest =()=>{
    return{
        type: types.EMPTY_CART_REQUEST
    }
}
const emptyCartSuccess =()=>{
    return{
        type: types.EMPTY_CART_SUCCESS
    }
}
const emptyCartFailure  =()=>{
    return{
        type: types.EMPTY_CART_FAILURE
    }
}

const emptyCart =(payload)=>(dispatch)=>{
dispatch(emptyCartRequest());
const deleteOrders = [];
for (let obj of payload){
    let temp = dispatch(deleteProductCart(obj.id));
    deleteOrders.push(temp)
}
Promise.all(deleteOrders)
.then((r)=>dispatch(emptyCartSuccess()))
.catch((e)=>dispatch(emptyCartFailure()))
}


const fetchOrderRequest = () => {
    return {
        type: types.FETCH_ORDER_REQUEST,

    }
}

const fetchOrderSuccess = (payload) => {
    console.log("pay",payload)
    return {
        type: types.FETCH_ORDER_SUCCESS,
        payload,
    }
}

const fetchOrderFailure = () => {
    return {
        type: types.FETCH_ORDER_FAILURE,

    }
}

const fetchOrder = (payload) => (dispatch)=>{
    dispatch(fetchOrderRequest());
    axios.get(`http://localhost:8080/orders`)
    .then(r => dispatch(fetchOrderSuccess(r.data)))
    .catch(e => dispatch(fetchOrderFailure(e.data)))

}


export { fetchData,emptyCart, fetchOrder, getSingleProduct, addProductCart,fetchCart,deleteProductCart,addOrder };
