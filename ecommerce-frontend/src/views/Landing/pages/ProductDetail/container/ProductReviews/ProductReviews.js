import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import StarRatings from 'react-star-ratings'
import IndividualProductRating from '../../components/IndividualProductRating/IndividualProductRating'
import ProductReviewCard from '../../components/ProductReviewCard/ProductReviewCard'

const ProductReviews = () => {
    const [overallRating] = useState([
        {
            rating: 5,
            percent: 20,
            number: 1
        },
        {
            rating: 4,
            percent: 80,
            number: 5
        },
        {
            rating: 3,
            percent: 0,
            number: 0
        },
        {
            rating: 2,
            percent: 50,
            number: 1
        },
        {
            rating: 1,
            percent: 20,
            number: 1
        },
    ]);
    return (
        <div className='product-reviews w-100'>
            <Row className='w-100 product-overall-review align-items-center'>
                <Col lg="4">
                    <div className='rate-number d-flex align-items-center w-100'>
                        <h1 className='mb-0'>3.5</h1>
                        <h3 className='text-dark-light ml-sm mb-0'>/</h3>
                        <h3 className='text-dark-light ml-sm mb-0'>5</h3>
                    </div>
                    <StarRatings
                        rating={3.5}
                        starRatedColor="#FDBC15"
                        starDimension='25'
                        starSpacing='5'
                        numberOfStars={5}
                    />
                    <p className='text-light-dark mt-2'>
                        <u>20 ratings</u>
                    </p>
                </Col>
                <Col lg="8">
                    {overallRating.map(rate => (
                        <IndividualProductRating
                            rating={rate.rating}
                            percent={rate.percent}
                            number={rate.number}
                            key={rate.rating}
                        />
                    ))
                    }
                </Col>
            </Row>
            <div className='divider'></div>
            <div className='individual-reviews mt-5'>
                <h3 className='mb-4'>Product Review</h3>
                <ProductReviewCard />
                <ProductReviewCard />
                <ProductReviewCard />
                <ProductReviewCard />
            </div>
        </div>
    )
}

export default ProductReviews
