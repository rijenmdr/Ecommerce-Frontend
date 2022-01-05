import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import StarRatings from 'react-star-ratings';
import 'bootstrap/dist/css/bootstrap.min.css';


const IndividualProductRating = ({ rating, percent, number }) => {
    return (
        <div className='d-flex align-items-end'>
            <StarRatings
                rating={rating}
                starRatedColor="#FDBC15"
                starDimension='20'
                starSpacing='5'
                numberOfStars={5}
            />
            <div className='w-40 ml-md'>
                <ProgressBar
                    now={percent}
                    variant={
                        percent >= 80 ? 'success' :
                            percent >= 50 ? 'warning' : 'danger'}
                />
            </div>
            <p className='mb-0 ml-md'>{number}</p>
        </div>
    )
}

export default IndividualProductRating
