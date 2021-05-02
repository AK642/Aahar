import React from 'react'
import ItemsList from './ItemsList'
import '../assets/scss/OrderList.scss'

const OrderList = ({order}) => {

    var amount = 0;
    order.items.map(item => {
        amount = amount + item.price;
    })

    console.log("Amount: ",amount)
    console.log("Order_ID: ",order.orderID)

    return (
        <div className="orderList">
            <div className="card">
                <div className="header">
                    <h2>ORDER ID: {order.orderID}</h2>
                    <h3>Time: </h3>
                </div>
                <div className="items__list">
                    {
                        order.items.map((item) => (
                            <ItemsList image={item.photo} name={item.name} price={item.price} description={item.description} />
                        ))
                    }
                    <h2>Total: {amount}</h2>
                </div>      
            </div>
        </div>
    )
}

export default OrderList
