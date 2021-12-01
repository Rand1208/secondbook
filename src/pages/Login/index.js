import React from 'react'
import { ButtonLogin, ListLogin, MiniInput } from '../../components/atoms'
import Inputs from '../../components/atoms/input/input'
import "./login.scss"

const Login = () => {
    return (
        <div className="main-login">
             <div className="bg-login"> </div>
             <div className="blur">
                 <div className="text-all">
                     <p className="title-text">Hello Again!</p>
                    <p className="title-desc">Wellcome back you'he been missed!</p>
                 </div>
                 <MiniInput placeholder="Enter username"/>
                 <MiniInput placeholder="Enter password"/>
                 <div className="pass-recovery"><p>Recovery Password</p></div>
                 <ButtonLogin/>
                 <p className="text-other-login">--- Or continue with --- </p>
                 <ListLogin/>
    
            </div>
        </div>
        
    )
}

export default Login
