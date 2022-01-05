import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import ProductCard from '../../../../components/ProductCard/ProductCard'

const RelatedProducts = ({ products }) => {
    const navigate = useNavigate();
    return (
        <>
            <div className='d-flex justify-content-between align-items-center'>
                <h3>Related Products</h3>
                <h5 onClick={() => navigate('/products')} className="cursor-pointer ml-md">
                    View More <span className="text-secondary ml-sm">{'>'}</span>
                </h5>
            </div>
            <Row>
                {
                    products?.map(product => (
                        <Col
                            className='mb-4 justify-content-between'
                            key={product.id}
                            xl="3"
                            lg="4"
                            md="6"
                        >
                            <ProductCard
                                products={product}
                            />
                        </Col>
                    ))
                }
            </Row>
        </>
    )
}

export default RelatedProducts
