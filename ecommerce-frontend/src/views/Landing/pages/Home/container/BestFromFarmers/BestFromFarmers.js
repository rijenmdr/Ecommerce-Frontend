import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import HeaderWithList from '../../../../components/HeaderWithList/HeaderWithList'
import ProductCard from '../../../../components/ProductCard/ProductCard'

const best_from_farmer = {
    title: "Best from Farmers",
    list: [
        {
            name: "Carrots",
            link: "/"
        },
        {
            name: "Tomatoes",
            link: "/"
        },
        {
            name: "Potatoes",
            link: "/"
        },
        {
            name: "Chicken",
            link: "/"
        },
        {
            name: "Pork",
            link: "/"
        }
    ]
}

const bestproducts = [
    {
        id: 1,
        title: "Apple",
        image_url: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80",
        short_description: "Space for a small product description",
        price: 100,
        prevPrice: 220,
        discountedPercentage: 20,
        averageRating: 2
    },
    {
        id: 2,
        title: "Banana",
        image_url: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80",
        short_description: "Space for a small product description",
        price: 120,
        prevPrice: 200,
        discountedPercentage: 20,
        averageRating: 2
    },
    {
        id: 3,
        title: "Potatoes",
        image_url: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80",
        short_description: "Space for a small product description",
        price: 150,
        averageRating: 4
    }
]

const BestFromFarmers = () => {
    return (
        <div className="section-margin best-from-farmer d-flex justify-content-between">
            <div className="d-flex best-from-farmer-header flex-column mr-xl">
                <HeaderWithList
                    title={best_from_farmer.title}
                    list={best_from_farmer.list}
                />
                <Button className="mt-5" variant="secondary">{`More products >`}</Button>
            </div>
            <div className="best-product-header-sec">
                <h3 className="">Best from farmer</h3>
                <h5 className="cursor-pointer ml-md">View More <span className="text-secondary ml-sm">{'>'}</span></h5>
            </div>
            <Row className="d-flex justify-content-between">
                {
                    bestproducts.map(products=>(
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

export default BestFromFarmers
