/* eslint-disable no-unused-vars */
import { Star } from '@material-ui/icons'
import React from 'react'
import './checkoutproduct.css'
import { useStateValue } from '../../stateprovider/StateProvider'

export default function CheckoutProduct({id,image,title,price,rating}) {
    const[{basket},dispatch]=useStateValue()
    //remove from basket
    const removeFromBasket =()=>{
        dispatch({
            type:'REMOVE_FROM_BASKET',
            id:id,
        })
    }
    return (
        <div className='checkoutProduct'>
            <img src={image} alt="" className="checkoutProduct__img" />
            <div className="checkoutProduct__info">
                <p className='checkoutProduct__title'>{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating)
                    .fill()
                    .map((_,i)=>(
                        <p key={i}><Star/></p>
                    ))}
                </div>
                <button onClick={removeFromBasket} className="productCheckout__button">Remove from basket</button>
            </div>
        </div>
    )
}
