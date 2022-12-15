import React from 'react'
// import Currency from './Currency'
import CurrencySelector from './CurrencySelector'
import Help from './Help'
import Language from './Language'
import Logo from './Logo'
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
                    <li className="menu-item"><Login/></li>
                    <li className="menu-item"><SignUp/></li>
                </ul>
            </div>
        </nav>
    </header>
  )
}
