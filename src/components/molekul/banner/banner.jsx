import React, { Component } from 'react'
import "./banner.scss"

export default class Banner extends Component {
    render() {
        return (
            <div className="banner-main">
                <div className="banner-left">
                    <img src="https://placeimg.com/750/250/tech" alt="dummy"/>
                </div>
                <div className="banner-right">
                    <div className="banner-right-up">
                        <img src="https://placeimg.com/500/125/arch" alt="dummy"/> 
                    </div>
                    <div className="banner-right-down">
                        <img src="https://placeimg.com/500/125/arch" alt="dummy"/>
                    </div>
                </div>
            </div>
        )
    }
}
