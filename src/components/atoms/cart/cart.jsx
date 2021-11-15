import React, { Component }from 'react'
import { cart } from '../../../assets'
import "./cart.scss"


class Cart extends Component  {

    state={
        order:3
    }

    pertambahanKeranjang = ()=>{
        this.setState({
            order: this.state.order + 1

        },()=>{
            alert(this.state.order)
        })
        
    }


    render() {
        return (
        <div className="header-cart"  onClick={this.pertambahanKeranjang} > 
            
            <div className="count" >{this.state.order}</div>
            <img className="img-cart" src={cart}  />
            

        </div>
       
        
        )}
    
    
        
}

export default Cart
