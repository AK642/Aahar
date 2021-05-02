import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import { useParams } from "react-router-dom";
// import { restaurants } from '../Components/Data'
import RestaurantHero from '../Components/RestaurantHero';
import { Container } from '@material-ui/core';
import Menu from '../Components/Menu';
import { makeLocalStorage } from '../Cart/cartHelper';
import { db } from '../firebase';

const Restaurant = () => {

    const [restaurants, setRestaurants] = useState([]);
    const [reload, setReload] = useState(false);

    useEffect(() => {
        db.collection("restaurants").onSnapshot(snapshot => {
            setRestaurants(snapshot.docs.map(doc => doc.data()));
        })
    }, [])

    const { id } = useParams();

    console.log(id)
    console.log(restaurants)


    const restaurant = restaurants.find(restaurant => restaurant.id == id);
    
    console.log(restaurant)

    return (
        <div className="restaurant">
            <Header reload={reload} />
            <RestaurantHero id={id} image={restaurant?.photo} name={restaurant?.name} items={restaurant?.items} price={restaurant?.price} rating={restaurant?.rating} />   
            <Menu setReload={setReload} reload={reload} />
        </div>
    )
}

export default Restaurant
