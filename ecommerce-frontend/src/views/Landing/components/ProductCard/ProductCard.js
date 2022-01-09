import React from 'react'
import { Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

import Tag from '../Tag/Tag';
import StarRatings from 'react-star-ratings';

const ProductCard = ({ products }) => {
    return (
        <Card className="p-3 product-card position-relative cursor-pointer mt-4" style={{ width: '18rem' }}>
            <Card.Img 
                variant="top" 
                src={products?.previewImg}
                style={{
                    maxHeight:"190px",
                    backgroundSize:"cover"
                }}
            />
            <div className="position-absolute discount-tag">
                {products?.previousPrice!==0 &&
                    <Tag
                        value = {`-${(((products?.previousPrice - products?.actualPrice)/products?.previousPrice)*100).toFixed(2)}%`}
                        primary = {true}
                    />
                }
            </div>
            <Card.Title className="mt-3 text-truncate">{products?.name}</Card.Title>
            <Card.Text className='text-truncate mb-1'>
                {products?.shortDescription}
            </Card.Text>

            <StarRatings
                rating={parseFloat(products?.averageRating)}
                starRatedColor="#FDBC15"
                starDimension='20'
                starSpacing='5'
                numberOfStars={5}
            />

            <div className="d-flex justify-content-between align-items-center mt-1">
                <div className="d-flex flex-column">
                    <h4 className="mb-0">Nrp. {products?.actualPrice}</h4>
                    <h6 className="original-price mb-0">{products?.previousPrice!==0 ? `Nrp. ${products?.previousPrice}` :''}</h6>
                </div>
                <Button size="sm">Buy now</Button>
            </div>
        </Card>
    )
}

ProductCard.propTypes = {
    products: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        image_url: PropTypes.string.isRequired,
        short_description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        prevPrice: PropTypes.number,
        discountedPercentage: PropTypes.number
    }),
}

export default ProductCard
