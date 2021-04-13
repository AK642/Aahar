import React from 'react';
import food1 from '../assets/images/food1.jpg'
import food2 from '../assets/images/food2.jpg'
import food3 from '../assets/images/food3.jpg'
import '../assets/scss/Hero.scss'
import Carousel from 'react-bootstrap/Carousel'
import { Button } from '@material-ui/core';

  

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero__image">
                <div className="hero__blur">
                    <div className="hero__content">
                        <h1>Meet the good test Today</h1>
                        <div className="button">
                            <Button className="btn">
                                Explore Now
                            </Button>
                        </div>
                        
                    </div>
                 </div>
                <Carousel className="carousel">
                    <Carousel.Item interval={3000} className="carousel__item">
                        <img
                        className="w-100"
                        src={food1}
                        alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={3000} className="carousel__item">
                        <img
                        className="w-100"
                        src={food2}
                        alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={3000} className="carousel__item">
                        <img
                        className="w-100"
                        src={food3}
                        alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
            
        </div>
    )
}

export default Hero
