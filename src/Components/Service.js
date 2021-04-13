import { Container } from '@material-ui/core'
import React from 'react'
import '../assets/scss/Service.scss'

import Hook1 from '../assets/images/Hook1.png'
import Hook2 from '../assets/images/Hook2.png'
import Hook3 from '../assets/images/Hook3.png'

const Service = () => {
    return (
        <div className="service">
            <Container className="service__section">
                <div className="service__heading">
                    <h1>HOW IT WORKS</h1>
                </div>
                <div className="anchor__design">
                    <div className="line1"></div>
                    <div className="hook1">
                        <div className="image">
                            <img src={Hook1} alt="Hook1"></img>
                        </div>
                        <div className="content">
                            <h3>CHOOSE</h3>
                            <p>Select food, Which you like most and <br/> Don't forget about drinks</p>
                        </div>
                    </div>
                    <div className="line2"></div>
                    <div className="hook2">
                        <div className="image">
                            <img src={Hook2} alt="Hook2"></img>
                        </div>
                        <div className="content">
                            <h3>MAKE AN ORDER</h3>
                            <p>Order the food you want to eat and <br/> Wait for order delivery</p>
                        </div>
                    </div>
                    <div className="line3"></div>
                    <div className="hook3">
                        <div className="image">
                            <img src={Hook3} alt="Hook3"></img>
                        </div>
                        <div className="content">
                            <h3>RECEIVE</h3>
                            <p>Get your order as quickly as possible and <br/> Enjoy your meal</p>
                        </div>
                    </div>
                    
                </div>
    

                
            </Container>
        </div>
    )
}

export default Service
