import React from 'react'
import { Banner, ContentMain, Footer, Gap, GapWidth, Navbar, SearchBar } from '../../components'
import ContentHeader from '../../components/molekul/contentHeader/contentHeader'

import "./home.scss"



const Home = () => {
    return (
        <div className="main-page">
            <Navbar className="navbar"/>
            <Gap/>
            <Banner/>
            <Gap/>
            <ContentHeader/>
            <Gap/>
            <ContentMain title="Buku Bekas" link="http://localhost:2001/post"/>
            <Gap/>
            <ContentMain title="Pinjam Buku" link="http://localhost:2001/pinjambuku" />
            <Gap/>
            <SearchBar/>
            <Gap/>
            <Footer/>

            
            
        </div>
    )
}

export default Home
