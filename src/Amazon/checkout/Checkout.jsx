/* eslint-disable no-unused-vars */
import React from 'react'
import { useStateValue } from '../stateprovider/StateProvider'
import './checkout.css'
import CheckoutProduct from './checkoutproduct/CheckoutProduct'
import Subtototal from './subtotal/Subtototal'

export default function Checkout() {
   const[{basket,user},dispatch] =useStateValue()
    return (
        <div className='checkout'>
            <div className="checkout__left">
                <img src="assets/products/games/1.jpg" alt="" className="checkout__ad" />
                <div>
                    <h3>Hello,{user?.email}</h3>
                    <h2 className="checkout__title">
                        shopping basket
                    </h2>
                {basket.map((item,index)=>(
                    <CheckoutProduct key={index}
                    id={item.id}
                    title={item.title}
                    image = {item.image}
                    price = {item.price}
                    rating = {item.rating}
                    />
                ))}
                </div>
            </div>
            <div className="chekout__right">
                <Subtototal/>
            </div>
        </div>
    )
}
