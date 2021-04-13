import React, { useEffect, useState } from 'react'
import IconButton from './IconButton'
import '../assets/scss/Restaurants.scss'
import { Container } from '@material-ui/core'
import RestaurantCard from './RestaurantCard'

import Pizza from '../assets/images/pizza.png'
import HotDog from '../assets/images/hotdog.png'
import Drink from '../assets/images/drink.png'
import Salad from '../assets/images/salad.png'
import Noodle from '../assets/images/noodle.png'
import Fries from '../assets/images/fries.png'
import Sushi from '../assets/images/sushi.png'
import Rice from '../assets/images/rice-bowl.png'

import Restaurant1 from '../assets/images/burger-restaurant.jpg'
import Restaurant2 from '../assets/images/pizza-restaurant.jpg'
import Restaurant3 from '../assets/images/hot-dog-restaurant.jpg'
import Restaurant4 from '../assets/images/japanese-restaurant.jpg'
import Restaurant5 from '../assets/images/noodle-shop.jpg'
import Restaurant6 from '../assets/images/kek-lapis-shop.jpg'

const Restaurants = () => {

    const [value, setValue] = useState(9)
    // setValue(0);

    const categories = [
        {
            id: 1,
            name: 'Pizza',
            icon: Pizza
        },
        {
            id: 2,
            name: 'HotDog',
            icon: HotDog
        },
        {
            id: 3,
            name: 'Drink',
            icon: Drink
        },
        {
            id: 4,
            name: 'Salad',
            icon: Salad
        },
        {
            id: 5,
            name: 'Noodle',
            icon: Noodle
        },
        {
            id: 6,
            name: 'Fries',
            icon: Fries
        },
        {
            id: 7,
            name: 'Sushi',
            icon: Sushi
        },
        {
            id: 8,
            name: 'Rice',
            icon: Rice
        }
    ]

    const restaurants = [
        {
          id: 1,
          name: 'Crest Cafe',
          rating: 4.8,
          items: 'Burger . Snacks',
          categories: [9,6],
          price: 100,
          photo: Restaurant1,
          duration: '30 - 45 min'
        },
        {
          id: 2,
          name: 'The Hearty Slice',
          rating: 3.2,
          items: 'Noodles . Salads . Pizza',
          categories: [9,5,4,1],
          price: 150,
          photo: Restaurant2,
          duration: '15 - 20 min'
        },
        {
          id: 3,
          name: 'Shalimar Restaurant',
          rating: 3.7,
          items: 'Hot Dogs',
          categories: [9,2],
          price: 150,
          photo: Restaurant3,
          duration: '20 - 25 min'
        },
        {
          id: 4,
          name: 'The Raw Herbivore',
          rating: 4.8,
          items: 'Sushi',
          categories: [9,7],
          price: 200,
          photo: Restaurant4,
          duration: '10 - 15 min'
        },
        {
          id: 5,
          name: 'Namastey Lounge',
          rating: 4.8,
          items: 'Rice . Noodles',
          categories: [9,8,5],
          price: 100,
          photo: Restaurant5,
          duration: '15 - 20 min'
        },
        {
          id: 6,
          name: 'Dessert First',
          rating: 4.9,
          items: 'Desserts . Drinks',
          categories: [9,3],
          price: 150,
          photo: Restaurant6,
          duration: '35 - 40 min'
        }
      ];

      console.log(value)

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
                        <RestaurantCard image={restaurant.photo} name={restaurant.name} rating={restaurant.rating} items={restaurant.items} duration={restaurant.duration} price={restaurant.price}/>
                    ))
                }
            </div>
        </Container>
    )
}

export default Restaurants
