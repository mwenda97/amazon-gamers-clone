import React from 'react'
import './header.css'
import {Search,ShoppingBasket} from '@material-ui/icons'
import { Link } from 'react-router-dom'
import { useStateValue } from '../stateprovider/StateProvider'
import { auth } from '../authentications/login/firebase'

export default function Header() {
    // eslint-disable-next-line no-unused-vars
    const[{ basket,user },dispatch] = useStateValue()
    const handleAuthentication =()=>{
        auth.signOut()
    }
    return (
        <div className='header'>
            <Link to ={'/'}>
            <img src="/assets/header/amazon_PNG11.png" alt="" className="header__logo" />
            </Link>
            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <Search/>
            </div>
            <div className="header__nav">
                <Link to={!user && '/login'}>
                    <div onClick={handleAuthentication} className="header__option">
                        <span className="header__optionLineOne">Hello ,{!user ? 'Guest' : user.email}</span>
                        <span className="header__optionLineTwo">{user?
                        'Sign Out': 'Sign In'}</span>
                    </div>
                </Link>
                <div className="header__option">
                    <span className="header__optionLineOne">Return</span>
                    <span className="header__optionLineTwo">Orders</span>
                </div>
                <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div>
                <Link to='checkout'>
                    <div className="header__optionBasket">
                        <ShoppingBasket/>
                        <span className="header__optionLineTwo header__basketCount">
                        {basket?.length}
                        </span>
                    </div>
                </Link>
            </div>
            
        </div>
    )
}
