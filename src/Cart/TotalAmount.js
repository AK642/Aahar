import { Button } from '@material-ui/core'
import React, { useState } from 'react'
import '../assets/scss/TotalAmount.scss'
import Logo from '../assets/images/FoodLand_LOGO.png'
import axios from 'axios'
import { makeEmptyCart } from './cartHelper'
import { Redirect } from 'react-router'
import { useHistory } from 'react-router-dom'
import { makeOrder } from '../Orders/orderHelper'
import { db } from '../firebase';
import firebase from 'firebase';
import { useAuth } from "../Authentication/AuthContext"

function loadScript(src) {
	return new Promise((resolve) => {
		const script = document.createElement('script')
		script.src = src
		script.onload = () => {
			resolve(true)
		}
		script.onerror = () => {
			resolve(false)
		}
		document.body.appendChild(script)
	})
}

const __DEV__ = document.domain === 'localhost'

const TotalAmount = ({amount, length, items}) => {

    const { currentUser } = useAuth()

	let history = useHistory(); 

    const [name, setName] = useState('Ajay')

	async function displayRazorpay() {
		const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

		if (!res) {
			alert('Razorpay SDK failed to load. Are you online?')
			return
		}

    var amt
    var currency
    var id

    const Tamt = {amount: amount}

		await axios.post('http://localhost:1337/razorpay', Tamt)
      .then(response => {
        amt = response.data.amount;
        currency = response.data.currency;
        id = response.data.id;
      }
			  // console.log("response:",response) 
		)

		// console.log("data:",data)

		const options = {
			key: __DEV__ ? 'rzp_test_OyOlr0ZUAglqVV' : 'PRODUCTION_KEY',
			currency: currency,
			amount: amt.toString(),
			order_id: id,
			name: 'Donation',
			description: 'Thank you for nothing. Please give us some money',
			image: Logo,
			handler: function (response) {
				// alert(response.razorpay_payment_id)
				// console.log(response)
				// makeEmptyCart();
				makeOrder(response)

				db.collection('Orders').add({
					orderID: response.razorpay_order_id,
					userId: currentUser?.uid,
					userName: currentUser?.email,
					items: items,
					timestamp: firebase.firestore.Timestamp.now(),
					// review: ''
				}).then(() => {
					console.log("Submitted successfully")
				})
				.catch((error) => console.log(error))

				history.push('/review')
				// <Redirect to="/review" />
				// razorpay_payment_id
				// alert(response.razorpay_order_id)
				// alert(response.razorpay_signature)
			},
			prefill: {
				name,
				email: 'ajay@gmail.com',
				phone_number: '7096021108'
			}
		}
		const paymentObject = new window.Razorpay(options)
		paymentObject.open()
	}

    return (
        <div className="totalAmount">
            <div className="heading">
                <h1>checkout</h1>
                <span>⇾</span>
            </div>
            <h2>Order Summary:</h2>
            <div className="detail">
                <h1>{length} Items</h1>
                <div className="items__total">
                    <h2>Items Total</h2>
                    <h3>₹{amount}</h3>
                </div>
                <div className="delivery">
                    <h2>Delivery</h2>
                    <h3>Free</h3>
                </div>
                <div className="total__amount">
                    <h2>Total</h2>
                    <h3>₹{amount}</h3>
                </div>
            </div>
            <Button className="button" onClick={displayRazorpay}>
                Proceed to Checkout
            </Button>
        </div>
    )
}

export default TotalAmount
