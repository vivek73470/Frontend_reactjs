import React, { useEffect } from 'react'
import './cartAdmin.css'
import { useSelector } from 'react-redux'
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux'
import { deleteProductCart, fetchCart } from '../../Redux/products/action';


function CartAdmin() {
    const dispatch = useDispatch();
    const cart = useSelector((store) => store.ProductReducer.cart)


    const removeProduct = (id) => {
        dispatch(deleteProductCart(id))
      };

    useEffect(() => {
        dispatch(fetchCart());
    }, [dispatch])

    return (
        <>
        <div className='cartadmin-container'>
            <div className='cartadmin-container-ttl'>Total Product in Carts : {cart.length}</div>
            <div className='cart-adminborder'></div>
        <div className='cartadmin-wrapper'>
            {cart.length > 0 && cart.map((item, index) => (
                    <div  key={index} className='ordersaadmin-degn-flx'>
                        <div className='cartitmadmin-bdr-ims'>
                            <img src={item.image} alt="" />
                        </div>
                        <div className='cartitmadmin-bdr'>
                            <h4>{item.title}</h4>
                            <p className='orderadmin-description'>{item.description}</p>
                            <p className='cartadmin-add-price-order'>रु.{item.price}</p>
                            <button onClick={() => removeProduct(item.id)} className='rmv-btn-admin'>
                <MdDelete />   Remove  </button>
                        </div>
                    </div>
            ))}
        </div>
        </div>
    </>
    )
}

export default CartAdmin