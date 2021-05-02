import { createGenerateClassName } from '@material-ui/styles'
import React from 'react'
import Image from '../assets/images/baked-fries.jpg'
import '../assets/scss/ItemsList.scss'

const ItemsList = ({image, name, price, description}) => {
    return (
        <div className="itemsList">
            <div className="card">
                <div className="item__detail">
                    <img src={image} alt="Food Image"></img>
                    <div className="details">
                        <h2>{name}</h2>
                        <h3>{description}</h3>
                    </div>
                </div>  
                <div className="price">
                    <h2>{price}</h2>
                </div>
            </div>
        </div>
    )
}

export default ItemsList
