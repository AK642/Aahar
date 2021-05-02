import { Container } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import Fooditem from './Fooditem'
// import MacD from '../assets/images/mac-d-fries.png'
// import { restaurants } from './Data'
import { useParams } from 'react-router'
import '../assets/scss/Menu.scss'
import { loadCart } from '../Cart/cartHelper'
import { db } from '../firebase'

const Menu = ({ setReload = f => f, reload }) => {

    // const [reload, setReload] = useState(false);
    const [product, setProduct] = useState([]);
    const [restaurants, setRestaurants] = useState([])
    // const [reload, setReload] = useState(false);

    // setReload(!reload)

    useEffect(() => {
        // makeLocalStorage();
        setProduct(loadCart());

        //Restaurant Data................
        db.collection("restaurants").onSnapshot(snapshot => {
            setRestaurants(snapshot.docs.map(doc => doc.data()));
        })
    }, [reload]);


    const { id } = useParams();
    const restaurant = restaurants.find(restaurant => restaurant.id == id);

    console.log(id)
    console.log("Menu>>>",restaurant)

    return (
        <div className="menu">
            <Container className="menu__section">
                <h1>All Items</h1>
                <div className="food">
                    {
                        restaurant?.menu.map((item) => (
                            <Fooditem restaurantId={item?.restaurantId} id={item?.menuId} image={item?.photo} name={item?.name} detail={item?.description} price={item?.price} item={item} setReload={setReload}
                            reload={reload} product={product}/>
                        ))
                    }
                </div>
            </Container>
        </div>
    )
}

export default Menu
