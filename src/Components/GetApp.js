import React from 'react'
import '../assets/scss/GetApp.scss'

import MobileApp from '../assets/images/mobile_app.jpg'
import { Button } from '@material-ui/core'

const GetApp = () => {
    return (
        <div className="getApp">
            <div className="row">
                <div className="col-md-6 image__section">
                    <img src={MobileApp} alt="Mobile Application Image"></img>
                </div>
                <div className="col-md-6 description__section">
                    <div className="description">
                        <h1>Get the Aahar App</h1>
                        <h4>Download app from</h4>
                        <a href="https://drive.google.com/file/d/1n0xVI7P8HN7c-or_G-y5o9R9a0-r9B6S/view?usp=sharing" className="btn">Download Now</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GetApp
