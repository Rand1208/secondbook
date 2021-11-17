import React, { Component }from 'react'
import { Content } from '../..'
import { buku1, buku2, buku3, buku4 } from '../../../assets'
import "./contentMain.scss"

class ContentMain extends Component{
    render(){
        return (
            <div className="content-bukubekas">
                <div className="content-bukubekas-title"><p>Buku Bekas</p></div>
                <div className="content-bukubekas-content">
                    <Content title="Buku Mindset" price="Rp.40.000" img={buku1}/>
                    <Content title="Rich Dad Poor Dad" price="Rp.30.000" img={buku2}/>
                    <Content title="Atomic Habits" price="Rp.50.000" img={buku3}/>
                    <Content title="7 Habits" price="Rp.20.000" img={buku4}/>
                
                    

                </div>
                
            </div>
        )


    }


    
}

export default ContentMain
