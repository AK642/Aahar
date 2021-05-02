import React, { useState } from 'react'
import '../assets/scss/RestaurantHero.scss'
import Restaurant1 from '../assets/images/burger-restaurant.jpg'
import StarRatings from 'react-star-ratings';
import { Link } from 'react-router-dom';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import MenuBookOutlinedIcon from '@material-ui/icons/MenuBookOutlined';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import AddReview from '../Review/AddReview';
  


const RestaurantHero = ({id, image, name, items, price, rating}) => {

    

    return (
        <div className="restaurantHero">
            <div className="row">
                <div className="col-md-6 image">
                    <img src={image} alt="Restaurant Image"></img>
                </div>
                <div className="col-md-6 description">
                    <h1>{name}</h1>
                    <h3>{items}</h3>
                    <h2>₹{price} <span>Per Person</span></h2>
                    <div className="rating">
                        <StarRatings 
                            rating={rating}
                            starRatedColor="orange"
                            starDimension="30px"
                            starSpacing="5px"
                            numberOfStars={5}
                        />
                        <h3>{rating}</h3>
                    </div>
                    <div className="buttons">
                        <Link to={{pathname: `/reviews/${id}`}} className="showReview"><MenuBookOutlinedIcon className="icon" />Reviews</Link>
                        {/* <Link className="addReview" onClick={handleOpen}><CreateOutlinedIcon className="icon"/>Add Review</Link> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RestaurantHero
