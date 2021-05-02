import React from 'react'
import { useParams } from 'react-router'
import '../assets/scss/Food.scss'
import FoodView from './FoodView'
import { restaurants } from '../Components/Data'
import Header from '../Components/Header'

const Food = () => {

    const { id } = useParams();

    console.log(id)

    const restaurant = restaurants.find((restaurant) => restaurant.menu.find((menu) => menu.menuId == id))

    console.log("restaurant",restaurant)

    const menu = restaurant.menu.find((menu) => menu.menuId == id)
    console.log("Menu>>",menu)

    return (
        <div className="food">
            <Header />
            <FoodView id={menu.menuId} image={menu.photo} name={menu.name} description={menu.description} calories={menu.calories} price={menu.price} />
        </div>
    )
}

export default Food
