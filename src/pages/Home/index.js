import React from 'react'
import { Banner, ContentMain, Gap, GapWidth, Navbar } from '../../components'
import ContentHeader from '../../components/molekul/contentHeader/contentHeader'
import "./home.scss"



const Home = () => {
    return (
        <div className="main-page">
            <Navbar className="navbar"/>
            <Gap/>
            <Gap/>
            <Banner/>
            <Gap/>
            <ContentHeader/>
            <Gap/>
            <ContentMain title="Buku Bekas" link="http://localhost:2001/post"/>
            <Gap/>
            <ContentMain title="Pinjam Buku" link="http://localhost:2001/pinjambuku" />
            
            <div className="footer">footer</div>
        </div>
    )
}

export default Home
