import React, { Component }from 'react'
import { Button, Inputs } from '..'
import "./search.scss"

class SearchBar extends Component{

    state={
        search:""
    }

    getSearchBarFromInputs = (newvalue)=>{
        this.setState({
            search:newvalue
        },()=>{console.log("berhasil pindah data "+this.state.search)

        })
    }


    render(){
        return (
            <div className="search">
                <Inputs onChangeGet={(value)=>this.getSearchBarFromInputs(value)}/>
                <Button getDataSearch={this.state.search}/>
            </div>
            
            
        )


    }
    
}

export default SearchBar
