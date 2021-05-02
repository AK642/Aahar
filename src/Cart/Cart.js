import { Container } from '@material-ui/core'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import React, { useEffect, useState } from 'react'
import '../assets/scss/Cart.scss'
import Header from '../Components/Header'
import CartItems from './CartItems'
import EmptyCart from './EmptyCart'
import TotalAmount from './TotalAmount'
import { useStateValue } from '../Redux/StateProvider';
import { loadCart } from './cartHelper';
import { restaurants } from '../Components/Data'


const Cart = () => {

    // const [{ basket }, dispatch] = useStateValue()
    const [items, setItems] = useState([]);
    const [reload, setReload] = useState(false);


    useEffect(() => {
        setItems(loadCart());
    }, [reload]);

    console.log("items-->",items)
    var amount=0;
    
    items.map(item => {
        amount = amount + item.price
    })

    console.log("Amount=>",amount)

    return (
        <div className="cart">
            <Header reload={reload} />
            {
                items?.length==0 ? <EmptyCart /> : 
                <Container className="cart__section">  
                <div className="row">
                    <div className="col-md-8 foodItems">
                        <div className="order__title">
                            <ShoppingCartIcon />
                            <h1>Shopping Bag</h1>
                        </div>
                        <div className="item__list">
                            {
                                items.map(item => (
                                    <CartItems 
                                        id={item.menuId}
                                        image={item.photo}
                                        name={item.name}
                                        detail={item.description}
                                        price={item.price}
                                        setReload={setReload}
                                        reload={reload}
                                    />
                                ))
                            }
                        </div>
                    </div>
                    <div className="col-md-4 amount">
                        <TotalAmount amount={amount} length={items.length} items={items} />
                    </div>
                </div>
            </Container>
            }
            
            
        </div>
    )
}

export default Cart
