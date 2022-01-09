import React from 'react'
import { Form } from 'react-bootstrap'
import StarRatings from 'react-star-ratings'

const RatingFilters = ({ rate, selectedRating, index, handleRatingChange }) => {
    return (
        <div className='checkboxes d-flex align-items-center mt-2'>
            <Form.Check
                type="radio"
                checked = {selectedRating === (5 - index).toString()}
                value ={5 - index}
                onChange={handleRatingChange}
                label={
                    <StarRatings
                        rating={5 - index}
                        starRatedColor="#FDBC15"
                        starDimension='20'
                        starSpacing='5'
                        numberOfStars={5}
                    />
                }
                id={`check-${rate}`}
            />

        </div>
    )
}

export default RatingFilters
