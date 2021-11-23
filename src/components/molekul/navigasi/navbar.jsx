import React, {Component} from 'react'
import { Cart, SearchBar } from '../../atoms'
import { logoapps, reorder } from '../../../assets'

import "./navbar.scss"


class Navbar extends Component {
    render(){return (
        
           
            <div className="navbar-down">
                <div className="hamburgericon"><img src={reorder} alt="icon humburger" srcset="" /></div>
                <div className="navbar-logo">
                    <img src={logoapps} alt="logo"/>
                </div>
                <Cart className="navbar-cart"/>
            </div>
        
    )}
    
}

export default Navbar

