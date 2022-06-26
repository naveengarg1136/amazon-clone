import React from 'react'
import { useStateValue } from '../contextAPI/StateProvider';
import "./checkoutProduct.css"

function CheckoutProduct(props) {
    
    const {id,title,image,price,rating}=props;
    const [{basket},dispatch]= useStateValue();

    const removeFrombasket=()=>{
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id:id,
        })
    }
  return (
    <div className='checkoutProduct'>
        <img className='checkoutProduct__image' src={image}/>

        <div className='checkoutProduct__info'>
            <p className='checkoutProduct__title'>{title}</p>
            <p className='checkoutProduct__price'>
                <small>₹</small>
                <strong>{price}</strong>
            </p>
            <div className='checkoutProduct__rating'> 
                {Array(rating).fill().map((_,i)=>(
                    <p>⭐</p>
                ))}
                
            </div>
            <button onClick={removeFrombasket} >Remove from Cart</button>
        </div>
    </div>
  )
}

export default CheckoutProduct