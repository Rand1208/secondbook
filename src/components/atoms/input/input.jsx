import React, { Component }from 'react'

import "./input.scss"

class Inputs extends Component {

  handleSearch = (event)=>{
    this.props.onChangeGet(event.target.value)
  }
  render(){
    return (
      <input 
              
              onChange={this.handleSearch}
              type="text"     
              placeholder={'cari buku anda disini'} 
              className="input-search"/>
  )

  }

   

    
}

export default Inputs
