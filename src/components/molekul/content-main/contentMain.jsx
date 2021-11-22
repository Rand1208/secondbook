import React, { Component }from 'react'
import { Content } from '../..'
//import { buku1, buku2, buku3, buku4 } from '../../../assets'
import "./contentMain.scss"
import axios from 'axios';

class ContentMain extends Component{

    state={
        post:[],
        
    }

    getDataContent = ()=>{
        console.log("asadasd")

    }

    



    componentDidMount(){
        // fetch(this.props.link)
        // .then(response => response.json())
        // .then(jsonn => this.setState({
        //     post:jsonn
        // }))
        axios({
            method:'get',
            url:this.props.link
            
        }).then((res)=>{
            this.setState({post:res.data})
        }

        )
    }

    render(){
        return (
            <div className="content-bukubekas">
                <div className="content-bukubekas-title"><p>{this.props.title}</p></div>
                <div className="content-bukubekas-content">
                {this.state.post.map(postt=>
                     <Content title={postt.title} price={postt.price} img={postt.img} gettitle={postt.title} onClick={()=>console.log(postt.title)} />
                )}
                
                </div>
                
            </div>
        )


    }


    
}

export default ContentMain
