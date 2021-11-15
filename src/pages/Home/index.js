import React from 'react'
import { Banner, Gap, Navbar } from '../../components'
import "./home.scss"



const Home = () => {
    return (
        <div className="main-page">
            <Navbar className="navbar"/>
            <Gap/>
            <Banner/>
            <div className="content">Content</div>
            <div className="footer">footer</div>
        </div>
    )
}

export default Home
