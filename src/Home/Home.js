import React, { useEffect } from 'react';
import { makeLocalStorage } from '../Cart/cartHelper';
import Footer from '../Components/Footer';
import GetApp from '../Components/GetApp';
import Header from '../Components/Header';
import Hero from '../Components/Hero';
import Restaurants from '../Components/Restaurants';
import Service from '../Components/Service';

const Home = () => {

    useEffect(() => {
        makeLocalStorage();
    }, [])

    return (
        <div className="home">
            <Header />
            <Hero />
            <Restaurants />
            <Service />
            <GetApp />
            <Footer />
        </div>
    )
}

export default Home
