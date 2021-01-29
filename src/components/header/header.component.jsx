import React from 'react'
import { Link } from 'react-router-dom'


import './header.styles.scss'

import { ReactComponent as Logo } from '../../assets/crown.svg'

import { useAppContext } from "../../libs/contextLibs";


export default function Header() {

    const { isAuthenticated,userHasAuthenticated } = useAppContext();
    
    return (
        <div className='header'>
        
            <Link className='logo-container' to="/">
                <Logo className='logo'/>
            </Link>
            
            <div className='options' >
                <Link className='option' to='/shop'>
                    SHOP
                </Link>

                <Link className='option' to='/contact'>
                    CONTACT
                </Link>
                {
                    isAuthenticated ? 
                    (<div className='option' onClick={() => userHasAuthenticated(false)}> SIGN OUT </div>)
                    :
                    (<Link className='option' to='/signIn'>
                        SIGN IN
                    </Link>)
                }
            </div>
        </div>
    )
}