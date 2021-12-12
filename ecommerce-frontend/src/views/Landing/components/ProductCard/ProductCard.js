import React from 'react'
import { Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

import Tag from '../Tag/Tag';

const ProductCard = ({ products }) => {
    return (
        <Card className="p-3 product-card position-relative cursor-pointer mt-4" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={products?.image_url} />
            <div className="position-absolute discount-tag">
                {products?.discountedPercentage &&
                    <Tag
                        value = {`-${products?.discountedPercentage}%`}
                        primary = {true}
                    />
                }
            </div>
            <Card.Title className="mt-3">{products?.title}</Card.Title>
            <Card.Text>
                {products?.short_description}
            </Card.Text>
            <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex flex-column">
                    <h4 className="mb-0">Nrp. {products?.price}</h4>
                    <h6 className="original-price mb-0">{products?.prevPrice ? products?.prevPrice :''}</h6>
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
