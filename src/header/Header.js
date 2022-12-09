import React from 'react'
import Currency from './Currency'
import Help from './Help'
import Language from './Language'
import Logo from './Logo'
import Login from './user-account/Login'
import SignUp from './user-account/SignUp'

export default function header() {
  return (
    // <header>
    //     <div className='left'>
    //         <Logo/>
    //     </div>
    //     <nav className='navigation-page-header'>
    //         <ul className='navigation-page-list'>
    //             <li><Language/></li>
    //             <li><Currency/></li>
    //             <li><Login/></li>
    //             <li><SignUp/></li>  
    //         </ul>
    //     </nav>
    // </header>

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
                    <li className="menu-item"><Currency/></li>
                    <li className="menu-item"><Help/></li>
                    <li className="menu-item"><Login/></li>
                    <li className="menu-item"><SignUp/></li>
                </ul>
            </div>
        </nav>
    </header>
  )
}
