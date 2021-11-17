import React from 'react'
import { bookcontent } from '../../../assets'
import "./miniContent.scss"



const MiniContent = (props) => {
    return (
        <div className="minicontent-main">
            
            <div className="minicontent-in">
                <img src={props.img}/>
            </div>
            <p>{props.title}</p>
        </div>
    )
}



export default MiniContent
