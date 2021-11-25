import React from 'react'
import { Gap } from '../..'
import { fb, instagram, logoapps, twitter } from '../../../assets'
import "./footer.scss"

const Footer = () => {
    return (
        <div className="footer">
            <img src={logoapps} alt="logo"/>
            <p className="footer-text">Toko buku bekas terbesar,terlengkap dan terpercaya di indonesia</p>
            <div className="footer-medsos">
                <img src={fb} alt=""/>
                <img src={twitter} alt=""/>
                <img src={instagram} alt=""/>
            </div>
            <p className="footer-text-bottom">@secondbook PT.RanSutTech </p>

            
        </div>
    )
}

export default Footer
