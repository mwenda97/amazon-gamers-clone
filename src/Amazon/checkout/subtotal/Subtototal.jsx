/* eslint-disable no-unused-vars */
import React from 'react'
import './subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from '../../stateprovider/StateProvider'
import { getBasketTotal } from '../../reducer/Reducer'
import { useNavigate } from 'react-router-dom'


export default function Subtototal() {
    const navigate = useNavigate()
    const[{basket},dispatch]=useStateValue()
    return (
        <div className='subtotal'>
            <CurrencyFormat 
            renderText={(value) =>(
                <div>
                    <p>
                        Subtotal ({basket.length} items):
                        <strong>{value}</strong>
                    </p>
                    <small className='subtotal__gift'>
                        <input type={'checkbox'}/>
                        This order contains a gift
                    </small>
                </div>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={'text'}
            thousandSeparator={true}
            prefix='$'
            />
            <button onClick={e=>navigate('/payment')} >Proceed to Checkout</button>
        </div>
    )
}
