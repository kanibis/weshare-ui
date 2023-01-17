import React from 'react'
// import Currency from './Currency'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Link} from 'react-router-dom';
import CurrencySelector from './CurrencySelector'
import Help from './Help'
import Language from './Language'
import Logo from './Logo'
import Supplier from './Supplier'
import Login from './user-account/Login'
import SignUp from './user-account/SignUp'

export default function header() {
  return (
    
    <header>
        <nav className="header-container">
            <div className="header-logo-container">
                <div className="logo-container">
                    <Logo/>
                </div>    
            </div>
            <div className="header-menu-container">
                <ul className="navigation-menu">
                
                    <li className="menu-item"><Language/></li>
                    <li className="menu-item"><CurrencySelector/></li>
                    <li className="menu-item"><Help/></li>
                    <li className="menu-item"><Supplier/></li>
                    <li className="menu-item">
                    <Link to='/login' className='login'>
                        Login
                    </Link>
                    </li>
                    <li className="menu-item">
                    <Link to='/signup' className='signup'>
                        Signup
                    </Link>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
  )
}
