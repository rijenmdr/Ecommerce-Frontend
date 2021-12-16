import React from 'react'
import { Button, Card, Col, Image, Row } from 'react-bootstrap'
import StarRatings from 'react-star-ratings';

import Heart from '../../../../assets/images/icons/ic-actions-heart.svg';

const ListProductCard = ({ products }) => {
    return (
        <Card className='list-card mt-4 cursor-pointer'>
            <Row className='d-flex flex-row align-items-start'>
                <Col xl="4" lg="4" className="">
                    <Image style={{
                        width: "100%",
                        height: "20vw",
                        objectFit: "cover"
                    }} alt="Card image cap" src={products?.image_url} />
                </Col>
                <Col xl="4" lg="5" className='d-flex flex-column ml-lg p-2'>
                    <Card.Title className="mt-3">{products?.title}</Card.Title>
                    <Card.Text>
                        {products?.short_description}
                    </Card.Text>
                    <StarRatings
                        rating={5}
                        starRatedColor="#6A983C"
                        starDimension='20'
                        starSpacing='5'
                        numberOfStars={5}
                    />
                    <Card.Text>
                        <div className='d-flex mt-3 mr-md'>
                            <h5 className='text-dark-light mr-xl'>Brand</h5>
                            <h5 className='text-dark-light ml-xl'>Samsung</h5>
                        </div>
                        <div className='d-flex mt-2 mr-md'>
                            <h5 className='text-dark-light mr-xl'>Stock</h5>
                            <h5 className='text-dark-light ml-xl'><span className='text-secondary'>200 </span>pcs</h5>
                        </div>
                    </Card.Text>
                </Col>
                <Col xl="3" lg="2" className='d-flex flex-column align-items-end justify-content-start p-2 mt-3'>
                    <div className="d-flex flex-column">
                        <h4 className="mb-0">Nrp. {products?.price}</h4>
                        <h6 className="original-price mb-0">{products?.prevPrice ? products?.prevPrice : ''}</h6>
                    </div>
                    <div className="d-flex flex-column mt-3 mb-2">
                        <h5 className="mb-0 text-dark-light">Free Shipping</h5>
                        <h6 className="mb-0 text-dark-light">Delivery in 1 day</h6>
                    </div>
                    <div className="d-flex flex-column align-item-center mt-2">
                        <Button size="sm">Buy now</Button>
                        <Button
                            className='mt-2 btn-secondary d-flex justify-content-center align-items-center'
                            size="sm">
                            <Image className='mr-sm' width={20} src={Heart} alt="heart" />
                            Add to wishlist
                        </Button>
                    </div>
                </Col>
            </Row>
        </Card>
    )
}

export default ListProductCard
