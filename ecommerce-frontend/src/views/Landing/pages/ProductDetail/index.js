import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import Breadcrumbs from '../../container/Breadcrumb';
import ProductDetailContent from './container/ProductDetailContent/ProductDetailContent';
import ProductImageSection from './container/ProductImageSection/ProductImageSection';
import Tag from '../../components/Tag/Tag';

//scss
import './ProductDetail.scss';
import ProductDescription from './container/ProductDescription/ProductDescription';
import ProductReviews from './container/ProductReviews/ProductReviews';
import ProductQuestions from './container/ProductQuestions/ProductQuestions';
import RelatedProducts from './container/RelatedProducts/RelatedProducts';

const ProductDetail = () => {
    const [images] = useState([
        'https://image.freepik.com/free-photo/delicious-vietnamese-food-including-pho-ga-noodles-spring-rolls-white-table_181624-34062.jpg',
        'https://media.istockphoto.com/photos/colorful-vegetables-and-fruits-vegan-food-in-rainbow-colors-picture-id1284690585?b=1&k=20&m=1284690585&s=170667a&w=0&h=HlEPBNsYMVuu-SsohPliBWHJy-IhW9y-fl8dS9KnBBo=',
        'https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg'
    ]);
    const [relatedProducts] = useState([
        // {
        //     id: 1,
        //     title: "Iphone 13 pro",
        //     image_url: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80",
        //     short_description: "Space for a small product description",
        //     price: 210000,
        //     prevPrice: 220000,
        //     discountedPercentage: 30,
        // },
        // {
        //     id: 2,
        //     title: "Nike Trainer",
        //     image_url: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80",
        //     short_description: "Space for a small product description",
        //     price: 2100,
        // },
        // {
        //     id: 3,
        //     title: "Mantra Guitar",
        //     image_url: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80",
        //     short_description: "Space for a small product description",
        //     price: 1500,
        // },
        // {
        //     id: 4,
        //     title: "Vodka",
        //     image_url: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80",
        //     short_description: "Space for a small product description",
        //     price: 1500,
        // }
    ])


    const [activeTab, setActiveTab] = useState(1);

    const description = `
        <h5>Origins</h5>
        <p>We work hard to ensure that the fruit and vegetables we sell are fresh and high in quality. If we don’t grow them ourselves, we source them from carefully chosen suppliers, preferring to buy locally whenever possible.
        </p>
        <br/>
        <h5>How to cook</h5>
        <p>From roasts, salads and soups to casseroles and cakes, Carrots will lend sweetness, texture and colour to an enormous number of recipes.</p>
        <br/>
        <h5>Full of Vitamins!</h5>
        <br/>
        <table>
            <tr>
                <th>Vitamins</th>
                <th>Quantity</th>
                <th>% DV</th>
            </tr>
            <tr>
                <td>Vitamin A equiv.</td>
                <td>735 μg</td>
                <td>104 %</td>
            </tr>
            <tr>
                <td>Vitamin A equiv.</td>
                <td>735 μg</td>
                <td>104 %</td>
            </tr>
            <tr>
                <td>Vitamin A equiv.</td>
                <td>735 μg</td>
                <td>104 %</td>
            </tr>
        </table>
        <br/>
        <h5>Origins</h5>
        <p>We work hard to ensure that the fruit and vegetables we sell are fresh and high in quality. If we don’t grow them ourselves, we source them from carefully chosen suppliers, preferring to buy locally whenever possible.
        </p>
        <br/>
        <h5>How to cook</h5>
        <p>From roasts, salads and soups to casseroles and cakes, Carrots will lend sweetness, texture and colour to an enormous number of recipes.</p>
        <br/>
        <h5>Origins</h5>
        <p>We work hard to ensure that the fruit and vegetables we sell are fresh and high in quality. If we don’t grow them ourselves, we source them from carefully chosen suppliers, preferring to buy locally whenever possible.
        </p>
        <br/>
        <h5>How to cook</h5>
        <p>From roasts, salads and soups to casseroles and cakes, Carrots will lend sweetness, texture and colour to an enormous number of recipes.</p>
    `

    const changeTab = (tab) => {
        setActiveTab(tab);
    }

    return (
        <div className='product-detail'>
            <Breadcrumbs
                title="Carrots from Tomissy Farm"
            />
            <Row className='section-margin'>
                <Col
                    className='product-detail-images d-flex flex-column'
                    lg="6"
                    md="12"
                >
                    <ProductImageSection
                        images={images}
                    />
                </Col>
                <Col className='product-content' lg="6">
                    <ProductDetailContent />
                    <div className='product-detail-tabs mt-5'>
                        <div className='tab-headings d-flex justify-content-between'>
                            <h4
                                onClick={() => changeTab(1)}
                                className={`${activeTab === 1 ? 'active-tab' : ''}`}
                            >
                                Description
                            </h4>
                            <h4
                                onClick={() => changeTab(2)}
                                className={`${activeTab === 2 ? 'active-tab' : ''}`}
                            >
                                <span className='mr-sm'>Reviews</span>
                                <Tag
                                    primary={true}
                                    value={20}
                                />
                            </h4>
                            <h4
                                onClick={() => changeTab(3)}
                                className={`${activeTab === 3 ? 'active-tab' : ''}`}
                            >
                                <span className='mr-sm'>Questions</span>
                                <Tag
                                    primary={true}
                                    value={5}
                                />
                            </h4>
                        </div>
                        <div className='tab-content my-4 mx-2'>
                            {
                                activeTab === 1 &&
                                <ProductDescription
                                    description={description}
                                />
                            }
                            {
                                activeTab === 2 &&
                                <ProductReviews />
                            }
                            {
                                activeTab === 3 &&
                                <ProductQuestions />
                            }
                        </div>
                    </div>
                </Col>
            </Row>
            <div className='section-padding related-products mt-5'>
                <RelatedProducts
                    products={relatedProducts}
                />
            </div>
        </div>
    )
}

export default ProductDetail;
