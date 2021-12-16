import React from 'react'
import { Col, Row } from 'react-bootstrap'
import ListProductCard from '../../../../components/ProductCard/ListProductCard'
import ProductCard from '../../../../components/ProductCard/ProductCard'

const SearchedProducts = ({ viewType, searchedProducts }) => {
    return (
        <Row className="w-75 searched-products justify-content-between ml-xl">
            {
                searchedProducts.map(products => (
                    <>
                        {viewType === "grid" ?
                            <Col key={products.id} xl="4" lg="6" md="12" sm="12">
                                <ProductCard
                                    key={products.id}
                                    products={products}
                                />
                            </Col> :
                            <Col key={products.id} xl="12">
                                <ListProductCard
                                    key={products.id}
                                    products={products}
                                />
                            </Col>
                        }

                    </>
                ))
            }
        </Row>
    )
}

export default SearchedProducts
