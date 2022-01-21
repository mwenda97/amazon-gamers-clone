/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
import { useStateValue } from '../../stateprovider/StateProvider'
import './payment.css'
import CheckoutProduct from '../checkoutproduct/CheckoutProduct'

export default function Payment() {
    const [{basket ,user},dispatch] = useStateValue()
    return (
        <div className='payment'>
            <div className="payment__container">
                <h1>
                    <div>
                    checkout
                     <Link to='/checkout'> ({basket?.length} items)</Link>
                    </div>
                </h1>
                <div className="payment__section">{/*delivery address*/}
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>Embu</p>
                        <p>Embu ,Kenya</p>
                    </div>
                </div>
                <div className="payment__section">{/*review section*/}
                <div className="payment__title">
                    <h3>Review items and delivery</h3>
                    </div>
                    <div className="payment__items">
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
                <div className="payment__section">{/*payment method*/}
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">{/*stripe magic*/}
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
