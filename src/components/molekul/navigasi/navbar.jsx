import React, {Component} from 'react'
import { Cart, SearchBar } from '../../atoms'
import { logoapps } from '../../../assets'

import "./navbar.scss"


class Navbar extends Component {
    render(){return (
        <div className="main-navbar">
           
            <div className="navbar-down">
                <div className="navbar-logo">
                    <img src={logoapps} alt="logo"/>
                </div>
                <SearchBar className="searchbar"/>
                <Cart className="navbar-cart"/>
            </div>
        </div>
    )}
    
}

export default Navbar

