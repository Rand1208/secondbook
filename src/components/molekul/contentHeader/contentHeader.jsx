import React, { Component }from 'react'
import { GapWidth, MiniContent } from '../..'
import { bookcontent, paperplane, trophy } from '../../../assets'
import "./contentHeader.scss"

class ContentHeader extends Component{
    render(){
        return (
            <div className="contentheader-main">
                <MiniContent title="Buku Bekas" img={bookcontent}/>
                <GapWidth/>
                <MiniContent title="Pinjam Buku" img={paperplane}/>
                <GapWidth/>
                <MiniContent title="Review Buku" img={trophy}/>
            </div>
        )


    }


    
}

export default ContentHeader
