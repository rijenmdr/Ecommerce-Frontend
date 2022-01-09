import React from 'react';
import { Col, Row } from 'react-bootstrap';
import ProductCard from '../../../../components/ProductCard/ProductCard';

const popular_products = [
    {
        id: 1,
        title: "Iphone 13 pro",
        image_url: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80",
        short_description: "Space for a small product description",
        price: 210000,
        prevPrice: 220000,
        discountedPercentage: 30,
        averageRating:4
    },
    {
        id: 2,
        title: "Nike Trainer",
        image_url: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80",
        short_description: "Space for a small product description",
        price: 2100,
        averageRating: 2
    },
    {
        id: 3,
        title: "Mantra Guitar",
        image_url: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80",
        short_description: "Space for a small product description",
        price: 1500,
        averageRating: 2
    },
    {
        id: 4,
        title: "Vodka",
        image_url: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80",
        short_description: "Space for a small product description",
        price: 1500,
        averageRating: 2
    }
]
const PopularProducts = () => {
    return (
        <div className="section-margin popular-products d-flex flex-column">
            <div className="popular-products-header d-flex justify-content-between align-items-center">
                <h3 className="">Popular Products</h3>
                <h5 className="cursor-pointer ml-md">View More <span className="text-secondary ml-sm">{'>'}</span></h5>
            </div>
            <Row className="mt-4 justify-content-between align-items-center">
                {
                    popular_products.map(products=>(
                        <Col key={products.id} xl="3" lg="4" md="6" sm="12" className="mt-2">
                            <ProductCard
                                key = {products.id}
                                products={products}
                            />
                        </Col>
                    ))
                }
            </Row>
        </div>
    )
}

export default PopularProducts
