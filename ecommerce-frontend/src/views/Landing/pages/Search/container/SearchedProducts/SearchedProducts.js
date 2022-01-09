import React from 'react'
import { Col, Row } from 'react-bootstrap'
import ListProductCard from '../../../../components/ProductCard/ListProductCard'
import ProductCard from '../../../../components/ProductCard/ProductCard'

import NoData from '../../../../components/NoData';

const SearchedProducts = ({ viewType, searchedProducts }) => {
    return (
        <>
            {searchedProducts.length !== 0 ?
                <Row className="w-75 searched-products ml-xl">
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
                </Row> :
                <Row className='w-100'>
                    <Col lg="12">
                        <NoData />
                    </Col>
                </Row>
            }
        </>
    )
}

export default SearchedProducts
