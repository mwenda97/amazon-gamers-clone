/* eslint-disable no-unused-vars */
import { Link ,useNavigate} from 'react-router-dom'
import React, { useState } from 'react'
import './login.css'
import {auth} from './firebase'


export default function Login() {
    const navigate = useNavigate()
   const [email,setEmail]=useState('')
   const [password,setPassword]=useState('')


   const signIn = e =>{
       e.preventDefault()//prevent refreshing and signin
       auth.signInWithEmailAndPassword(email,password)
       .then((auth)=>{
        console.log(auth)
        if (auth) {

            navigate('/')
        }
    })
    .catch(error=>alert(error.message))
       
      
   }
   const register = e =>{
       e.preventDefault()//register
       auth.createUserWithEmailAndPassword(email,password)
       .then((auth)=>{
           console.log(auth)
           if (auth) {

               navigate('/')
           }
       })
       .catch(error=>alert(error.message))
   }
    return (
        <div className='login'>
            <Link to='/'>
                <img src="/assets/header/amazon_PNG11.png" alt="" className="login__logo" />
            </Link>
            <div className="login__container">
                <h1>Sign in</h1>
                <form>
                    <h5>Email</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                    <button type='submit' className='login__signInButton' onClick={signIn}>
                        Sign In</button>
                </form>
                <p>
                    By signing-in you agree to AMAZON FAKE CLONE 
                    Conditions of use & sale.Please 
                    see our Privacy Notice, our Cookies Notice 
                    and Our Interest-Based Ads 
                    Notice
                </p>
                <button onClick={register} className='login__registerButton'>
                    Create Your Amazon Account</button>
            </div>
        </div>
    )
}
