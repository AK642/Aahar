import React, { useState } from 'react'
import '../assets/scss/RestaurantCard.scss'
import Restaurant from '../assets/images/burger-restaurant.jpg'

const RestaurantCard = ({image, name, rating, items, duration, price}) => {

    // const [value, setValue] = useState()

    return (
        <div className="restaurantCard">
            <div className="image">
                <img src={image} alt="Restaurant Image"></img>
                <h3>{duration}</h3>
            </div>
            <h3>{name}</h3>
            <h4>{items}</h4>
            <div className="description">
                <h2>⭐ <span className="rating">{rating}</span></h2>
                <span className="dot">•</span>
                <h5>₹{price} per person</h5>
            </div>
        </div>
    )
}

export default RestaurantCard
