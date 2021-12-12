import React from 'react'
import { Card, CardImg, Col, Image, Row } from 'react-bootstrap';

import Tag from '../../../../components/Tag/Tag';

const OurBlogs = () => {
    const tag = {
        name: "Vegetable",
        link: "/"
    }
    return (
        <div className="section-margin our-blogs d-flex flex-column mt-5">
            <div className="our-blog-header d-flex justify-content-between align-items-center">
                <h3 className="">Read our Blog posts</h3>
                <h5 className="cursor-pointer ml-md">View More <span className="text-secondary ml-sm">{'>'}</span></h5>
            </div>
            <Row className="our-blog-list mt-4">
                <Col className="our-blog-first" lg="6" md="6">
                    <Card className="cursor-pointer position-relative">
                        <CardImg
                            className="blog1-img"
                            src="https://www.golokaso.com/wp-content/uploads/2018/06/vietnamese-fish-tacos-recipe-3w.jpg" />
                        <div className="position-absolute blog-tag">
                            <Tag
                                tag={tag}
                                primary={true}
                            />
                        </div>
                        <div className="position-absolute blog-details">
                            <h3 className="text-light blog-title">
                                Our chef tips for a great and tasty dinner ready in 20 minutes
                            </h3>
                            <div className="d-flex align-items-center blog-add">
                                <Image
                                    className="avatar"
                                    src="https://www.whatsappprofiledpimages.com/wp-content/uploads/2021/08/Profile-Photo-Wallpaper.jpg"
                                    width={40}
                                    height={40}
                                    roundedCircle
                                />
                                <h6 className="text-light ml-xl">Author</h6>
                                <h6 className="ml-xl text-light">15. 6. 2020</h6>
                            </div>
                        </div>
                    </Card>
                </Col>
                <Col className='blog-list-second cursor-pointer' lg="3" md="6">
                    <Card>
                        <CardImg src="https://www.golokaso.com/wp-content/uploads/2018/06/vietnamese-fish-tacos-recipe-3w.jpg" />
                    </Card>
                    <div className="d-flex flex-column mt-2">
                        <div>
                            <Tag
                                tag={tag}
                                primary={true}
                            />
                        </div>
                        <h4 className="mt-1">
                            Which vegetable your family will love and want’s eat each day
                        </h4>
                        <div className="d-flex mt-2">
                            <h6>Author</h6>
                            <h6 className="ml-xl">15. 6. 2020</h6>
                        </div>
                    </div>
                </Col>
                <Col className='last-row-blogs' lg="3" md="12">
                    <Row className='last-row-blog cursor-pointer'>
                        <div className="d-flex justify-content-between">
                            <div className="w-50 blog-desc">
                                <h5 className="desc">
                                    Salat is good start to your routines
                                </h5>
                                <div className="d-flex mt-2">
                                    <h6>Author</h6>
                                    <h6 className="ml-xl">15. 6. 2020</h6>
                                </div>
                            </div>
                            <Image
                                width={100}
                                src="https://www.golokaso.com/wp-content/uploads/2018/06/vietnamese-fish-tacos-recipe-3w.jpg"
                                rounded />
                        </div>
                    </Row>
                    <Row className='last-row-blog cursor-pointer'>
                        <div className="d-flex justify-content-between mt-5">
                            <div className="w-50 blog-desc">
                                <h5 className="desc">
                                    Salat is kinda good start to your routines
                                </h5>
                                <div className="d-flex mt-2">
                                    <h6>Author</h6>
                                    <h6 className="ml-xl">15. 6. 2020</h6>
                                </div>
                            </div>
                            <Image
                                width={100}
                                src="https://www.golokaso.com/wp-content/uploads/2018/06/vietnamese-fish-tacos-recipe-3w.jpg"
                                rounded />
                        </div>
                    </Row>
                    <Row className='last-row-blog cursor-pointer'>
                        <div className="d-flex justify-content-between mt-5">
                            <div className="w-50 blog-desc">
                                <h5 className="desc">
                                    Salat is good start to your routines
                                </h5>
                                <div className="d-flex mt-2">
                                    <h6>Author</h6>
                                    <h6 className="ml-xl">15. 6. 2020</h6>
                                </div>
                            </div>
                            <Image
                                width={100}
                                src="https://www.golokaso.com/wp-content/uploads/2018/06/vietnamese-fish-tacos-recipe-3w.jpg"
                                rounded />
                        </div>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default OurBlogs
