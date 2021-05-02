import React, { useEffect, useState } from 'react'
import IconButton from './IconButton'
import '../assets/scss/Restaurants.scss'
import { Container } from '@material-ui/core'
import RestaurantCard from './RestaurantCard'
import { db } from '../firebase'

const Restaurants = () => {

    const [categories, setCategories] = useState([]);
    const [restaurants, setRestaurants] = useState([]);
    const [value, setValue] = useState("9");
    // setValue(0);

    console.log(value)

    useEffect(() => {
        //Category Data..............
        db.collection("categories").onSnapshot(snapshot => {
            setCategories(snapshot.docs.map(doc => doc.data()));
        })

        //Restaurant Data................
        db.collection("restaurants").onSnapshot(snapshot => {
            setRestaurants(snapshot.docs.map(doc => doc.data()));
        })
    }, [])

    console.log("Categories:->",categories)

    const restaurantsList = restaurants.filter(restaurant => restaurant.categories.find((val) => val===value));
    console.log(restaurantsList)

    return (
        <Container className="restaurants">
            <div className="navigation">
                {
                    categories.map((category) => (
                        <IconButton image={category.icon} name={category.name} id={category.id} onChange={val => setValue(val)}/>
                    ))
                }
            </div>
            <div className="restaurants__cards">
                {
                    restaurantsList.map((restaurant) => (
                        <RestaurantCard image={restaurant.photo} name={restaurant.name} rating={restaurant.rating} items={restaurant.items} duration={restaurant.duration} price={restaurant.price} id={restaurant.id}/>
                    ))
                }
            </div>
        </Container>
    )
}

export default Restaurants
