import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import HeaderWithList from '../../../../components/HeaderWithList/HeaderWithList'
import ProductCard from '../../../../components/ProductCard/ProductCard'

const best_selling_products = {
    title: "Best selling products",
    list: [
        {
            name: "Kitchen",
            link: "/"
        },
        {
            name: "Meat and fish",
            link: "/"
        },
        {
            name: "Special nutrition",
            link: "/"
        },
        {
            name: "Pharmacy",
            link: "/"
        },
        {
            name: "Baby",
            link: "/"
        }
    ]
}

const best_sold_products = [
    {
        id: 1,
        title: "Iphone 13 pro",
        image_url: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80",
        short_description: "Space for a small product description",
        price: 210000,
        prevPrice: 220000,
        discountedPercentage: 30
    },
    {
        id: 2,
        title: "Nike Trainer",
        image_url: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80",
        short_description: "Space for a small product description",
        price: 2100,
    },
    {
        id: 3,
        title: "Mantra Guitar",
        image_url: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80",
        short_description: "Space for a small product description",
        price: 1500,
    }
]
const BestSellingProducts = () => {
    return (
        <div className="section-margin best-selling-products d-flex justify-content-between">
            <div className="d-flex best-product-header flex-column mr-xl">
                <HeaderWithList
                    title={best_selling_products.title}
                    list={best_selling_products.list}
                />
                <Button className="mt-5" variant="secondary">{`More products >`}</Button>
            </div>
            <div className="best-product-header-sec">
                <h3 className="">Best Selling Products</h3>
                <h5 className="cursor-pointer ml-md">View More <span className="text-secondary ml-sm">{'>'}</span></h5>
            </div>
            <Row className="product-list justify-content-between">
                {
                    best_sold_products.map(products=>(
                        <Col key={products.id} xl="4" lg="6" md="6">
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

export default BestSellingProducts;