import React from 'react'
import '../assets/scss/RestaurantCard.scss'
import { Link } from 'react-router-dom'

const RestaurantCard = ({id, image, name, rating, items, duration, price}) => {

    return (
        <Link className="restaurantCard" to={{pathname: `/restaurant/${id}`}}>
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
        </Link>
    )
}

export default RestaurantCard
