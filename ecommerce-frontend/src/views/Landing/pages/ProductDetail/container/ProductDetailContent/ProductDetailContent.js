import React, { useState } from 'react'
import { Button, Card, Col, Image, Row } from 'react-bootstrap'
import StarRatings from 'react-star-ratings'
import ProductExtraInfo from '../../components/ProductExtraInfo/ProductExtraInfo'
import SelectNoOfItem from '../../components/SelectNoOfItem/SelectNoOfItem';

//images
import Heart from '../../../../../../assets/images/icons/ic-actions-heart-red.svg';
import Compare from '../../../../../../assets/images/icons/ic-layout-picture-red-right.svg';

const ProductDetailContent = () => {
    const [extraDetail] = useState([
        {
            id: 1,
            title: "Freshness",
            value: "1 days old"
        },
        {
            id: 1,
            title: "Buy by:",
            value: "pcs, kgs, box, pack"
        },
        {
            id: 1,
            title: "Farm",
            value: "Grocery Fields"
        },
        {
            id: 1,
            title: "Delivery area",
            value: "Czech republic"
        }
    ])
    return (
        <div className='product-detail-content'>
            <h1>Carrots from Tomissy Farm</h1>
            <div className='d-flex align-items-end'>
                <StarRatings
                    rating={3.5}
                    starRatedColor="#FDBC15"
                    starDimension='20'
                    starSpacing='5'
                    numberOfStars={5}
                />
                <p className="text-dark-light ml-sm mb-0">
                    <u>(1 customer review)</u>
                </p>
            </div>
            <h5 className='product-short-description mt-5'>
                Carrots from Tomissy Farm are one of the best on the market.
                Tomisso and his family are giving a full love to his Bio products.
                Tomisso’s carrots are growing on the fields naturally.
            </h5>
            <Row className="product-extra-detail mt-5">
                <Col className='d-flex flex-column' lg="6">
                    <ProductExtraInfo
                        title="Product Id"
                        value="76645"
                    />
                    <ProductExtraInfo
                        title="Category"
                        value="Food"
                    />
                    <ProductExtraInfo
                        title="Stock"
                        value="In Stock"
                    />
                    <ProductExtraInfo
                        title="Delivery"
                        value="in 2 days"
                    />
                </Col>
                <Col className='d-flex flex-column' lg="6">
                    {
                        extraDetail.map(detail => (
                            <ProductExtraInfo
                                title={detail.title}
                                value={detail.value}
                                key={detail.id}
                            />
                        ))
                    }
                </Col>
            </Row>
            <Card className='p-3 d-flex flex-row align-items-center mt-4 justify-content-between flex-wrap'>
                <div className='product-prices'>
                    <h2 className='mb-0 text-secondary'>Rs. 36.23</h2>
                    <h5 className='mb-0 text-dark-light'><s>Rs. 48.56</s></h5>
                </div>
                <div className='d-flex add-to-cart align-items-center flex-wrap'>
                    <div>
                        <SelectNoOfItem />
                    </div>
                    <Button
                        className='ml-md'
                        size='sm'
                    >
                        + Add to cart
                    </Button>
                </div>
            </Card>
            <div className='product-action-options d-flex flex-wrap align-items-center mt-5'>
                <div className='add-to-wishlist d-flex align-items-center'>
                    <Image
                        src={Heart}
                        alt="heart-icon"
                        width={20}
                        className='svg-icon'
                    />
                    <h4 className='mb-0 ml-sm'>Add to my wish list</h4>
                </div>
                <div className='compare-icon d-flex align-items-center ml-xl'>
                    <Image
                        src={Compare}
                        alt="compare-icon"
                        width={20}
                        className='svg-icon'
                    />
                    <h4 className='mb-0 ml-sm'>Compare</h4>
                </div>
            </div>
        </div>
    )
}

export default ProductDetailContent
