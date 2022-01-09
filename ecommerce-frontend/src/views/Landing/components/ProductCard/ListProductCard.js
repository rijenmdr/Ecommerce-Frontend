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
                    }} alt="Card image cap" src={products?.previewImg} />
                </Col>
                <Col xl="4" lg="5" className='d-flex flex-column ml-lg p-2'>
                    <Card.Title className="mt-3">{products?.name}</Card.Title>
                    <Card.Text>
                        {products?.shortDescription}
                    </Card.Text>
                    <StarRatings
                        rating={parseFloat(products?.averageRating)}
                        starRatedColor="#FDBC15"
                        starDimension='20'
                        starSpacing='5'
                        numberOfStars={5}
                    />
                    <u className='mt-2'>
                        <h6>{products?.reviews && products?.reviews.length} customer reviews</h6>
                    </u>
                    <Card.Text>
                        <div className='d-flex mt-3 mr-md'>
                            <h5 className='text-dark-light mr-xl'>Brand</h5>
                            <h5 className='text-dark-light ml-xl'>{products?.brandId?.name}</h5>
                        </div>
                        <div className='d-flex mt-2 mr-md'>
                            <h5 className='text-dark-light mr-xl'>Stock</h5>
                            <h5 className='text-dark-light ml-xl'>
                                <span className='text-secondary'>{products?.onStock} </span>{products?.soldIn}</h5>
                        </div>
                    </Card.Text>
                </Col>
                <Col xl="3" lg="2" className='d-flex flex-column align-items-end justify-content-start p-2 mt-3'>
                    <div className="d-flex flex-column">
                        <h4 className="mb-0">Nrp. {products?.actualPrice}</h4>
                        <h6 className="original-price mb-0">{products?.previousPrice !==0 ? products?.previousPrice : ''}</h6>
                    </div>
                    <div className="d-flex flex-column align-items-end mt-3 mb-2">
                        <h5 className="mb-0 text-dark-light">{products?.shippingCost === 0 ? 'Free Shipping' : `Shipping Cost: Nrp. ${products?.shippingCost}`}</h5>
                        <h6 className="mb-0 text-dark-light">
                            Delivery in {products?.deliveryIn?.numberForDelivery} {products?.deliveryIn?.timeForDelivery}
                        </h6>
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
