import React from 'react';
import Pizza from '../assets/images/pizza.png';
import '../assets/scss/IconButton.scss'

const IconButton = ({image, name, id, onChange}) => {
    return (
        <div className="iconButton" onClick={() => {onChange(id)}}>
            <div className="button">
                <div className="image">
                    <img src={image} alt="Icon Image"></img>
                </div>
                <div className="text">
                    <h3>{name}</h3>
                </div>
            </div>
        </div>
    )
}

export default IconButton
