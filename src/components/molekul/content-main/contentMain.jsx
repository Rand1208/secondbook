import React, { Component }from 'react'
import { Content } from '../..'
//import { buku1, buku2, buku3, buku4 } from '../../../assets'
import "./contentMain.scss"
import axios from 'axios';
import { buku1, buku2, buku3, buku4 } from '../../../assets';
import { Carousel } from '@trendyol-js/react-carousel';

class ContentMain extends Component{

    state={
        post:[],
        
    }

    getDataContent = ()=>{
        console.log("asadasd")

    }

    getContentPost = ()=>{
        if(this.state.post !=null){
            this.state.post.map(postt=>
                <Content title={postt.title} price={postt.price} img={postt.img} gettitle={postt.title}  />
           )
        }
        else{
            <Content title="postt.title" price="postt.price" img="postt.img" gettitle="postt.title"  />
            
        }
        
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
                {/* {
                    this.getContentPost()
                } */}
                
                {/* <Content title="postt.title" price="postt.price" img={buku1} gettitle="postt.title"  />
                <Content title="postt.title" price="postt.price" img={buku2} gettitle="postt.title"  />
                <Content title="postt.title" price="postt.price" img={buku3} gettitle="postt.title"  />
                <Content title="postt.title" price="postt.price" img={buku4} gettitle="postt.title"  /> */}


               

                    
                {this.state.post.map(postt=>
                <Content title={postt.title} price={postt.price} img={postt.img} gettitle={postt.title}  />
           )}
                
                </div>
                
            </div>
        )


    }


    
}

export default ContentMain
