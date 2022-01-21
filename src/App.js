/* eslint-disable no-empty-pattern */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-sequences */
import React,{useEffect} from 'react';
import Header from './Amazon/header/Header';
import Home from './Amazon/home/Home';
import './App.css';
import {BrowserRouter , Route , Routes} from 'react-router-dom'
import Checkout from './Amazon/checkout/Checkout';
import Login from './Amazon/authentications/login/Login';
import { auth } from './Amazon/authentications/login/firebase';
import { useStateValue } from './Amazon/stateprovider/StateProvider';
import Payment from './Amazon/checkout/payment/Payment';


function App() {
  const [{},dispatch] = useStateValue()

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('the user is >>>',authUser)
      if (authUser) {
        //the user is logged in /the user was logged in 
        dispatch({
          type:'SET_USER',
          user:authUser
        })
      }
      else {
       // the user is logged out
       dispatch({
         type:'SET_USER',
         user:null
       })
      }
    })
  },[])
    
  return (
    <BrowserRouter>
      <div className='app'>
      
        <Routes>
          <Route path='/login' element={
            <div>
              <Login/>
            </div>
          }/>
          <Route  path='/' element={<div>
            <Header/>
            <Home/>
          </div> } />
          <Route  path='/checkout' element={<div>
            <Header/>
            <Checkout/>
          </div> } />
          <Route path='/payment' element={
            <div>
              <Header/>
              <Payment/>
            </div>
          }/>

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
