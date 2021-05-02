import React from 'react'
import '../assets/scss/CartItems.scss'
import { useStateValue } from '../Redux/StateProvider';
import { removeItemFromCart } from './cartHelper'

const CartItems = ({
    id, 
    image, 
    name, 
    detail, 
    price, 
    setReload = f => f,
    //function(f){return f}
    reload = undefined
}) => {

    // const [{ basket }, dispatch] = useStateValue()

    const removeFromCart = () => {
        removeItemFromCart(id);
        setReload(!reload);
    }

    return (
        <div className="cartitem">
            <div className="item">
                <div className="description">
                    <img src={image} alt="Food Image"></img>
                    <div className="item__details">
                        <h1 className="item__name">{name}</h1>
                        <span className="item__description">{detail}</span>
                    </div>
                </div>
                <div className="price">
                    <span className="item__price">₹{price}</span>
                    <a className="remove" onClick={removeFromCart}>Remove</a>
                </div>
            </div>
        </div>
    )
}

export default CartItems
