import React, { useEffect, useState } from 'react'
import '../assets/scss/AddReview.scss'
import ReactStars from "react-rating-stars-component";
import { Button } from '@material-ui/core';
import axios from 'axios';
import { db } from '../firebase';
import firebase from 'firebase';
import { useAuth } from "../Authentication/AuthContext"
import { loadCart } from '../Cart/cartHelper';
import { loadOrder } from '../Orders/orderHelper';
import { useHistory } from 'react-router-dom'

const AddReview = () => {

	let history = useHistory(); 

    var reviewStatus;
    var restaurantId;
    var orderId;

    const { currentUser } = useAuth()

    const [review, setReview] = useState('')
    const [ratingStatus, setRatingStatus] = useState('')
    const [rating, setRating] = useState();
    const [status, setStatus] = useState();
    const [cart, setCart] = useState([]);
    const [order, setOrder] = useState([]);

    useEffect(() => {
        setCart(loadCart());
        setOrder(loadOrder());
    }, [])
    
    cart.map(item => {
        restaurantId = item.restaurantId;
    })

    console.log("restaurantId: ",restaurantId);

    order.map(order => {
        orderId = order.razorpay_order_id;
    })

    console.log("orderId: ",orderId);

    const ratingChanged = (newRating) => {
        switch (newRating) {
            case 1:
                setRatingStatus('Horrible');
                setRating(1);
                break;
            
            case 2:
                setRatingStatus('Bad');
                setRating(2);
                break;

            case 3:
                setRatingStatus('Average');
                setRating(3);
                break;

            case 4:
                setRatingStatus('Good');
                setRating(4);
                break;

            case 5:
                setRatingStatus('Excellent');
                setRating(5);
                break;
        
            default:
                break;
        }
    };

    console.log("Review: ",review)
    const getStatus = async (review) => {
        const { data } = await axios.post(
          "https://us-central1-food-review-308615.cloudfunctions.net/api/reviewStatus",
          {
            review: review,
          }
        );
        console.log("Data: ",data)
        return data;
    };
    
    const getReview = (review) => {
        reviewStatus = getStatus(review);
        console.log("reviewStatus: ",reviewStatus)
        reviewStatus.then((data) => {
                    setStatus(data);
                    console.log("status: ",status);
              });
    }

    const addReview = (event) => {
        event.preventDefault();

        getReview(review);
        status && (
            db.collection('Reviews').add({
                review: review,
                timestamp: firebase.firestore.Timestamp.now(),
                restaurantId: restaurantId,
                userID: currentUser?.uid,
                userName: currentUser?.email,
                status: status,
                orderId: orderId,
                rating: rating,
                ratingStatus: ratingStatus
            }).then(() => {
                console.log("Submitted successfully")
                history.push("/orders")
            })
            .catch((error) => console.log(error))
        )
        setReview('');
        setRating('');
        setRatingStatus('');
    }

    return (
        <div className="addReview">
            <h1>Add Review</h1>
            <div className="rating">
                <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={35}
                    activeColor="#FFA500"
                />
                <label className="rating__value">{ratingStatus}</label>
            </div>
            
            <form>
                <input type="text" value={review} onChange={e => setReview(e.target.value)} placeholder="Add Review" required />
                <div className="button">
                    <Button disabled={!review} className="btn" type="submit" onClick={addReview}>Add Review</Button>
                </div>
            </form>
        </div>
    )
}

export default AddReview
