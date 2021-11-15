import React, { Component }from 'react'
import { searchIcons } from '../../../assets'
import "./button.scss"

class Button extends Component  {

    state={
        searchGetData:""
    }


    

    showDataClick= ()=>{
        this.setState({
            searchGetData: this.props.getDataSearch
        },()=>{console.log(this.state.searchGetData)
        })
    }



    render(){
        return (
            <button className="button" ><img src={searchIcons} alt="img"onClick={this.showDataClick} /></button>
        )

    }

    
}

export default Button
