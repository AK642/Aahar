import { Button } from '@material-ui/core'
import React from 'react'
import '../assets/scss/FoodView.scss'
import { useStateValue } from '../Redux/StateProvider';


const FoodView = ({id, image, name, description, calories, price}) => {

    const [{ basket }, dispatch] = useStateValue()

    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                image: image,
                name: name,
                detail: description,
                price: price
            }
        })
    }

    return (
        <div className="foodView">
            <div className="row">
                <div className="col-md-6 image__section">
                    <div className="image">
                        <img src={image} alt="Food Image"></img>
                    </div>
                </div>
                <div className="col-md-6 food__description">
                    <h1>{name}</h1>
                    <h3>{description}</h3>
                    <h4>{calories} cal <span>🔥</span></h4>
                    <h2>₹{price}</h2>
                    <Button className="button" onClick={addToBasket}>
                        Add to Cart
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default FoodView
