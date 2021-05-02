import { Button } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../assets/scss/Fooditem.scss'
import { useStateValue } from '../Redux/StateProvider';
import { connect } from 'react-redux'
import { ADD_TO_BASKET, SET_ID } from '../Redux/actions';
import { addItemToCart, loadCart, makeLocalStorage } from '../Cart/cartHelper';


const Fooditem = ({product, restaurantId, id, image, name, detail, price, item, setReload = f => f, reload=undefined, addToBasket, Id}) => {

    console.log("restaurantId: ", restaurantId)
    // const [flag, setFlag] = useState(true);
    // const [val, setVal] = useState();
    // var val = 0;

   

    console.log("product==> ",product)


    const addToCart = () => {
        
        if(product.length === 0 || product === undefined) {
            console.log("item.restaurantId: ",item.restaurantId)
            const value = item.restaurantId;
            addToBasket(value)
            // setVal(value);
            addItemToCart(item);
            // console.log("val",val)
            setReload(!reload);
        }
        else{
            // console.log("val",val)
            if(item.restaurantId === Id){
                addItemToCart(item);
                setReload(!reload);
            }
            else{
                alert("Different restaurants item can not buy at the same time")
            }
        }

        
        // console.log("Flag>>",flag)
        // if(flag === true){
        //     addItemToCart(item);
        //     setReload(!reload);
        // }
        // else {
        //     alert("Different restaurants item can not buy at the same time")
        // }  
    }

    // const [{ basket }, dispatch] = useStateValue()
    

    // const addToBasket = () => {
    //     dispatch({
    //         type: "ADD_TO_BASKET",
    //         item: {
    //             id: id,
    //             image: image,
    //             name: name,
    //             detail: detail,
    //             price: price
    //         }
    //     })
    // }


    return (
        <div className="fooditem">                
            <div className="card">
                <div className="item__details">
                    <Link to={{pathname: `/food/${id}`}} className="image__link"><img src={image} alt="Food Image"></img></Link>    
                    <div className="item__description">
                        <h2>{name}</h2>
                        <span className="detail">{detail}</span>
                    </div>
                </div>
                <div className="item__price">
                    <span className="price">₹{price}</span>
                    <Button className="add_to_cart" onClick={addToCart}>
                        <span className="plus">+</span>
                        <span>Add</span>
                    </Button>
                    {/* <Button className="add_to_cart" onClick={() => addToBasket(id, image, name, detail, price)}>
                        <span className="plus">+</span>
                        <span>Add</span>
                    </Button> */}
                </div>
            </div>
        </div>
    )
}

//.........REDUX...............
const mapDispatchToProps = (dispatch) => {
    return {
        addToBasket: (val) => {
            dispatch({
                type: SET_ID,
                id: val
            })
        }
    }
}

const mapStateToProps = (store) => {
    const {Id} = store;
    console.log("ID--->",Id)
    return {Id}; 
}
// export default connect(mapDispatchToProps)(Fooditem) 
export default connect(mapStateToProps,mapDispatchToProps)(Fooditem) 


// export default Fooditem
