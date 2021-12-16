import React from 'react'
import { Form } from 'react-bootstrap'
import StarRatings from 'react-star-ratings'

const RatingFilters = ({ rate, setRating, index }) => {
    return (
        <div className='checkboxes d-flex align-items-center mt-2'>
            <Form.Check
                type="checkbox"
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
