import { Container } from '@material-ui/core'
import React from 'react'
import '../assets/scss/Reviews.scss'
import Header from '../Components/Header'

const Reviews = () => {
    return (
        <div className="reviews">
            <Header />
            <Container className="reviews__section">
                <div className="positive__reviews">
                    <h3>✯ Positive Reviews</h3>
                </div>
                <div className="negative__reviews">
                    <h3>✯ Negative Reviews</h3>
                </div>
            </Container>
        </div>
    )
}

export default Reviews
