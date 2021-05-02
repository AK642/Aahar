import { Container } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import OrderList from './OrderList'
import '../assets/scss/Order.scss'
import { loadCart, makeEmptyCart } from '../Cart/cartHelper'
import { db } from '../firebase'
import { useAuth } from "../Authentication/AuthContext"


const Order = () => {

    const [orders, setOrders] = useState([])
    const { currentUser } = useAuth()

    useEffect(() => {
        db.collection("Orders").onSnapshot(snapshot => {
            setOrders(snapshot.docs.map(doc => doc.data()));
        })
    }, [])

    const order = orders.filter(order => order.userId == currentUser.uid)

    console.log("Orders>>>>",orders)
    console.log("Order: ",order)

    return (    
        <div className="order">
            <Header />
            <div className="order__section">
                <Container className="container">
                    {
                        orders.map((order) => (
                            <OrderList order={order} />
                        ))
                    }
                </Container>
            </div>
        </div>
    )
}

export default Order
