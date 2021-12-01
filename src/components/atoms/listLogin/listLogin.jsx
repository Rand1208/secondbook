import React from 'react'
import { apple, facebook, google } from '../../../assets'
import "./listLogin.scss"

const ListLogin = () => {
    return (
        <div className="main-list-login">
            <div className="login-way"><img src={google}/></div>
            <div className="login-way"><img src={apple}/></div>
            <div className="login-way"><img src={facebook}/></div>
            
           

            
        </div>
    )
}

export default ListLogin
