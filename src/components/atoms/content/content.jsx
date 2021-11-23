import React from 'react'
import { bell, bg, buku1} from '../../../assets'
import "./content.scss"

const Content = (props) => {
    return (
        <div className="content-main" >
            <img className="img-content"  src={props.img} onClick={()=>console.log(props.gettitle)}  />
            <div className="content-center">
                <div>
                    <p className="title-content">{props.title}</p>
                    <p className="price-content">{props.price}</p>
                </div>
                <img src={bell}/>
            </div>
            <div className="content-footer">
                <p>Jakarta</p>
                <p>Hari ini</p>
            </div>
            
        </div>
    )
}

Content.defaultProps={
    img: bg,
    title:"untitled",
    price:"0000",

}

export default Content
